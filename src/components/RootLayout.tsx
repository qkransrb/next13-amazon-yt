import Header from "./header/Header";
import BottomHeader from "./header/BottomHeader";
import Footer from "./footer/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
