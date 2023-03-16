import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import React from "react";
import LayoutContainer from "./styled-components/LayoutContainer";
import LayoutHeader from "./styled-components/LayoutHeader";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
      <Footer />
    </>
  );
};

export default Layout;
