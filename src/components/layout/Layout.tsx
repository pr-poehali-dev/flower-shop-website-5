import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-cocktail-lavender">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
