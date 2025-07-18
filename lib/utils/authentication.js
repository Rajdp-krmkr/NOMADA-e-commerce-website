import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const signUpAndSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // console.log("User signed in with Google:", user);
    return {
      user,
      message: "Successfully signed in with Google!",
    };
  } catch (error) {
    // console.error("Error signing in with Google:", error);
    return {
      user: null,
      message:
        error.message || "An error occurred while signing in with Google.",
    };
  }
};

export const SignUpWithEmail = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);

    // Update profile with display name
    if (user) {
      try {
        await updateProfile(user, {
          displayName: name,
        });
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    } else {
      return {
        user: null,
        message: "User creation failed. Please try again later.",
      };
    }

    // Send email verification
    try {
      await sendEmailVerification(user);
      console.log("Verification email sent to:", email);
      return {
        user,
        message:
          "Account created successfully! Please check your email to verify your account.",
      };
    } catch (error) {
      console.error("Error sending verification email:", error);
      return {
        user,
        message:
          "Account created but failed to send verification email. Please try again later.",
      };
    }
  } catch (error) {
    console.error("Error signing up with email:", error);
    return {
      user: null,
      message: error.message || "An error occurred during sign up.",
    };
  }
};

export const SignInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Check if email is verified
    if (!user.emailVerified) {
      return {
        user,
        emailVerified: false,
        message:
          "Please verify your email before signing in. Check your inbox for the verification link.",
      };
    }

    return {
      user,
      emailVerified: true,
      message: "Signed in successfully!",
    };
  } catch (error) {
    // console.error("Error signing in with email:", error);
    return {
      user: null,
      emailVerified: false,
      message: error.message || "An error occurred during sign in.",
    };
  }
};

export const SignOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
    return {
      success: true,
      message: "You have been signed out successfully.",
    };
  } catch (error) {
    // console.error("Error signing out:", error);
    return {
      success: false,
      message: error.message || "An error occurred while signing out.",
    };
  }
};

export const ResetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent successfully");
    return {
      success: true,
      message:
        "Password reset email sent successfully. Please check your inbox.",
    };
  } catch (error) {
    // console.error("Error sending password reset email:", error);
    return {
      success: false,
      message:
        error.message ||
        "An error occurred while sending password reset email.",
    };
  }
};

export const ResendVerificationEmail = async () => {
  try {
    const user = auth.currentUser;
    if (user && !user.emailVerified) {
      await sendEmailVerification(user);
      console.log("Verification email resent successfully");
      return "Verification email sent! Please check your inbox.";
    } else if (user && user.emailVerified) {
      return "Email is already verified.";
    } else {
      throw new Error("No user is currently signed in.");
    }
  } catch (error) {
    // console.error("Error resending verification email:", error);
    throw error;
  }
};

export const CheckUserLoggedIn = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe(); // Unsubscribe to avoid memory leaks
      if (user && user.emailVerified) {
        resolve({
          isLoggedin: true,
          user,
        });
      } else {
        resolve({
          isLoggedin: false,
          user: null,
        });
      }
    }, reject);
  });
};
