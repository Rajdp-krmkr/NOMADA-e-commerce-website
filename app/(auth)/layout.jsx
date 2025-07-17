import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "NÓMADA - Authentication",
  description: "Sign in or sign up to NÓMADA luxury handbags",
};

export default function AuthLayout({ children }) {
  return (
    <div>
      {/* Auth pages have no navbar or footer for clean authentication experience */}
      {children}
    </div>
  );
}
