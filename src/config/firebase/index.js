import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBq6WyMqFRWVZRhG8kPeTyxcIGm4NK7nXM",
  authDomain: "belajar-flutter-a532d.firebaseapp.com",
  databaseURL: "https://belajar-flutter-a532d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "belajar-flutter-a532d",
  storageBucket: "belajar-flutter-a532d.appspot.com",
  messagingSenderId: "1074928534830",
  appId: "1:1074928534830:web:a7f1cf968dfbaf371a26bf"
};

const app = initializeApp(firebaseConfig);

export default app;