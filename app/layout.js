"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <main style={{ margin: "50px" }}>
        {children}
        <ToastContainer />
      </main>
    </AuthProvider>
  );
}
