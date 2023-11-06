// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBjbvYC-JpxKZH_bWEeaciodO351fAw1LQ',
  authDomain: 'devpool-110a7.firebaseapp.com',
  projectId: 'devpool-110a7',
  storageBucket: 'devpool-110a7.appspot.com',
  messagingSenderId: '263896034329',
  appId: '1:263896034329:web:717be6cc6c4a77073b8e88',
  measurementId: 'G-QEXNVLBNLG',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
