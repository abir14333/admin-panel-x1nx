import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPdBMcH7Gyu2w0u5hiTx-1XWHhBLw0Vok",
  authDomain: "x1nx-modx.firebaseapp.com",
  databaseURL: "https://x1nx-modx-default-rtdb.firebaseio.com",
  projectId: "x1nx-modx",
  storageBucket: "x1nx-modx.firebasestorage.app",
  messagingSenderId: "739319660068",
  appId: "1:739319660068:web:235e661ae00ef6f006e2b1",
  measurementId: "G-QCKV3QTHK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };