import { Poppins } from "next/font/google";
import "./Design/globals.css";

const poppins = Poppins({ subsets: ["latin"],weight:['400'] });

export const metadata = {
  title: "Ouer Tour app",
  description: "The picefull tour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
