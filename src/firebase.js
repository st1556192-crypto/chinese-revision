import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signOut
} from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  increment,
  onSnapshot,
  serverTimestamp,
  setDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfMtmrm0bJ1VU2koxtWBJTmntF6VgqPcE",
  authDomain: "chinesenote-32120.firebaseapp.com",
  projectId: "chinesenote-32120",
  storageBucket: "chinesenote-32120.firebasestorage.app",
  messagingSenderId: "495772067144",
  appId: "1:495772067144:web:59ccc5f38498d4992aff7d",
  measurementId: "G-MLH07T7FY3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence).catch(() => {});
isSupported().then((ok) => {
  if (ok && (location.protocol === "http:" || location.protocol === "https:")) getAnalytics(app);
}).catch(() => {});

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export function watchUser(callback) {
  return onAuthStateChanged(auth, callback);
}

export function googleSignIn() {
  return signInWithPopup(auth, provider);
}

export function googleSignOut() {
  return signOut(auth);
}

export async function saveMistake(uid, mistake) {
  const field = mistake.source === "test" ? "test" : "practice";
  const patch = {
    idiomId: mistake.id,
    text: mistake.text,
    gloss: mistake.gloss,
    updatedAt: serverTimestamp(),
    [field]: increment(1)
  };
  if (mistake.picked) patch.lastPicked = mistake.picked;
  await setDoc(doc(db, "users", uid, "mistakes", mistake.id), patch, { merge: true });
}

export function watchMistakes(uid, callback) {
  return onSnapshot(collection(db, "users", uid, "mistakes"), (snap) => {
    const rows = snap.docs.map((item) => item.data());
    rows.sort((a, b) => (b.updatedAt?.toMillis?.() || 0) - (a.updatedAt?.toMillis?.() || 0));
    callback(rows);
  }, () => callback(null));
}
