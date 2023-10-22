
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZa2UUOqR0abkCU_DTna9W7uWEvB20zi8",
  authDomain: "news-portal-using-react.firebaseapp.com",
  projectId: "news-portal-using-react",
  storageBucket: "news-portal-using-react.appspot.com",
  messagingSenderId: "277605087885",
  appId: "1:277605087885:web:d4ef4a03d996e74cad40c4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;