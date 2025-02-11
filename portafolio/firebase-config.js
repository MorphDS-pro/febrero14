// firebase-config.js
// Importar las funciones necesarias de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBGSyQlXo4qXoz3oWKFxWHwedZ8JEc6LHY",
  authDomain: "febrero-db3ff.firebaseapp.com",
  projectId: "febrero-db3ff",
  storageBucket: "febrero-db3ff.appspot.com",  // Asegúrate de que sea correcto
  messagingSenderId: "516615451182",
  appId: "1:516615451182:web:cba63f6e539862dbc6a5bf",
  measurementId: "G-3VBP8NNT1N"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la configuración para usarla en otros archivos
export const storage = getStorage(app);
export const db = getFirestore(app);
