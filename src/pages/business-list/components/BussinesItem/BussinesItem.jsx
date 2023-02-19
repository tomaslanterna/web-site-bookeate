import React, { useContext } from "react";
import BussinesItemContainer from "./styled-components/BussinesItemContainer";
import { Card } from "antd";
import { useRouter } from "next/router";
import BusinessContext from "@/contexts/BusinessContext";

const { Meta } = Card;

const BussinesItem = ({ business }) => {
  const router = useRouter();
  const { setSelectedBusiness } = useContext(BusinessContext);

  const selectBusiness = () => {
    setSelectedBusiness(business);
    router.push("/business/" + business.shopName);
  };
  return (
    <BussinesItemContainer>
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={<img alt="example" src={business.shopImg} />}
        onClick={selectBusiness}
      >
        <Meta title={business.shopName} description={business.shopCategory} />
      </Card>
    </BussinesItemContainer>
  );
};

export default BussinesItem;
