import Header from "./Header";
import Footer from "./Footer";
import CallBackButton from "@/components/ui/call-back-button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
      <CallBackButton />
    </div>
  );
};

export default Layout;
