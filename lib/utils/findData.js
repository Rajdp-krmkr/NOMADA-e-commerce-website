import {
  getDoc,
  getDocs,
  doc,
  query,
  collection,
  where,
  addDoc,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

// Find cart items by product ID
export const findCartItems = async (elementId) => {
  try {
    const q = query(collection(db, "Products"), where("id", "==", elementId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.warn(`No product found with id: ${elementId}`);
      return null;
    }

    // Return the first matching document
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    console.error("Error finding cart items:", error);
    return null;
  }
};

// Find product by slug
export const findProductBySlug = async (slug) => {
  try {
    const q = query(collection(db, "Products"), where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.warn(`No product found with slug: ${slug}`);
      return null;
    }

    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    console.error("Error finding product by slug:", error);
    return null;
  }
};

// Get all products
export const getAllProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Products"));
    const products = [];

    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });

    return products;
  } catch (error) {
    console.error("Error getting all products:", error);
    return [];
  }
};

// Get products by category
export const getProductsByCategory = async (category) => {
  try {
    const q = query(
      collection(db, "Products"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    const products = [];

    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });

    return products;
  } catch (error) {
    console.error("Error getting products by category:", error);
    return [];
  }
};

// Get trending products
export const getTrendingProducts = async () => {
  try {
    const q = query(collection(db, "Products"), where("trending", "!=", null));
    const querySnapshot = await getDocs(q);
    const products = [];

    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });

    // Sort by trending number
    return products.sort((a, b) => {
      const aNum = parseInt(a.trending.replace("#", ""));
      const bNum = parseInt(b.trending.replace("#", ""));
      return aNum - bNum;
    });
  } catch (error) {
    console.error("Error getting trending products:", error);
    return [];
  }
};
