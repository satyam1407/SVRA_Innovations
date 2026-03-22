import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "SVRA Properties - Simplify Property Tax Management",
//   description:
//     "Comprehensive platform for property owners, managers, tenants, and investors to manage taxation, expenses, claims, and rental agreements with ease.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
