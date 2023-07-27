import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbe6pN0j5BbjzdnRYAasl6EiwRd9QBDw0",
  authDomain: "tienda-predeterminada-tpfinal.firebaseapp.com",
  projectId: "tienda-predeterminada-tpfinal",
  storageBucket: "tienda-predeterminada-tpfinal.appspot.com",
  messagingSenderId: "265271152134",
  appId: "1:265271152134:web:ded4a757d426cedd0c3d87"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

