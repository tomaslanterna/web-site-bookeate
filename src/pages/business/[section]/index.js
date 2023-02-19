import BusinessContext from "@/contexts/BusinessContext";
import { useContext, useMemo } from "react";
import React from "react";
import BusinessDetailsContainer from "./styled-components/BusinessDetailsContainer";

const SectionDetails = ({ section }) => {
  const { selectedBusiness } = useContext(BusinessContext);

  useMemo(() => console.log(selectedBusiness), [selectedBusiness]);
  return (
    <BusinessDetailsContainer>{selectedBusiness.shopName}</BusinessDetailsContainer>
  );
};

SectionDetails.getInitialProps = (ctx) => {
  const { query } = ctx;
  const { section } = query;
  console.log(section);
  return { section };
};

export default SectionDetails;
