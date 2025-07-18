import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const createNewUserData = async (userId, userData) => {
  try {
    const userDocRef = doc(db, "users", userId);
    await setDoc(userDocRef, { ...userData, cart: [], orders: [] });
    console.log("User data created successfully");
  } catch (error) {
    console.error("Error creating user data:", error);
  }
};
