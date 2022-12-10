// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvDMxyNNvGaNuYEtCh2WBhiFStizmW6GM",
  authDomain: "section-swapper.firebaseapp.com",
  projectId: "section-swapper",
  storageBucket: "section-swapper.appspot.com",
  messagingSenderId: "508354415897",
  appId: "1:508354415897:web:c473e406900a3087184988",
  measurementId: "G-WXPWWJ5DFP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const analytics = getAnalytics(app);

export const getSections = async () => {
  const sectionsCol = collection(db, "sections");
  const sectionsSnapshot = await getDocs(sectionsCol);
  const sectionsList = sectionsSnapshot.docs.map((doc) => doc.data());
  return sectionsList;
};
