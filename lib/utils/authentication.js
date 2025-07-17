import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const signUpAndSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // The signed-in user info.
    const user = result.user;
    console.log("User signed in with Google:", user);
    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

const signUpAndSignInWithEmail = async (
  authenticationType,
  email,
  password
) => {
  try {
    let userCredential;
    if (authenticationType == "signup") {
      userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } else {
      userCredential = await signInWithEmailAndPassword(auth, email, password);
    }
    const user = userCredential.user;
    console.log("User signed in:", user);
    return user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

export const SignUpAndSignIn = async (
  authenticationType,
  provider,
  email = "",
  password = ""
) => {
  if (provider === "google") {
    return await signUpAndSignInWithGoogle();
  } else if (provider === "email") {
    return await signUpAndSignInWithEmail(authenticationType, email, password);
  } else {
    throw new Error("Unsupported authentication provider");
  }
};

export const SignOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export const ResetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent successfully");
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw error;
  }
};
