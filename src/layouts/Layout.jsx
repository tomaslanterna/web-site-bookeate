import Header from "@/components/Header";
import React from "react";
import LayoutContainer from "./styled-components/LayoutContainer";

const Layout=({children})=>{

return(
    <>
    <Header/>
    <LayoutContainer>
        {children}
    </LayoutContainer>
    </>
);
}

export default Layout;