import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const app = initializeApp({
  apiKey: "AIzaSyCyESPeb5oOmpTDpi6mZvU4BSkIZRaWHgo",
  authDomain: "codme-64da7.firebaseapp.com",
  projectId: "codme-64da7",
  storageBucket: "codme-64da7.appspot.com",
  messagingSenderId: "262915864664",
  appId: "1:262915864664:web:a614547a20fbd458b3322d",
  measurementId: "G-CT0HG55EPC",
});

export const auth = getAuth(app);