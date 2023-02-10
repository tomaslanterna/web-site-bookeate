import { Button } from "antd";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import HeaderContainer from "./styled-components/HeaderContainer";
import HeaderContent from "./styled-components/HeaderContent";
import HeaderNavContainer from "./styled-components/HeaderNavContainer";
import LogoContainer from "./styled-components/LogoContainer";

const Header =()=>{


    const navlinks=[
            {navId:1, name:'Lista de Locales'},
            {navId:2, name:'Mi Perfil'},
            {navId:3, name:'Cerrar Sesion'},
        ];

    return(
        <HeaderContainer>
            <HeaderContent>
                <LogoContainer>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/bookeate2.PNG?alt=media&token=264537f0-339f-456c-a6a8-5ff866745772"alt="Logo" width="50" height="50"/>
                </LogoContainer>
                <HeaderNavContainer>
                    {navlinks.map(nav=> <Button type="link" key={nav.navId}>{nav.name}</Button>)}
                </HeaderNavContainer>
            </HeaderContent>
        </HeaderContainer>
    );
}

export default Header;