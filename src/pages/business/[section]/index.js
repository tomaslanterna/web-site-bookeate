import BusinessContext from "@/contexts/BusinessContext";
import { useContext, useMemo, useState } from "react";
import React from "react";
import BusinessDetailsContainer from "./styled-components/BusinessDetailsContainer";
import BusinessDetailsContent from "./styled-components/BusinessDetailsContent";
import BusinessDetailsBookings from "./components/BusinessDetailsBookings/BusinessDetailsBookings";
import BusinessDatePicker from "./components/BusinessDatePicker/BusinessDatePicker";
import BusinessBanner from "./components/BusinessBanner/BusinessBanner";
import BusinessDetailsBody from "./styled-components/BusinessDetailsBody";
import formatDate from "@/utils/utils.date";

const SectionDetails = ({ section }) => {
  const { selectedBusiness } = useContext(BusinessContext);
  const dateAux = new Date();
  const today=formatDate(dateAux);
  const [date, setDate] = useState(today);

  const changeDate = (target) => {
    const newDate=formatDate(target.$d);
    setDate(newDate);
    console.log(newDate);
  };

  useMemo(() => console.log(selectedBusiness), [selectedBusiness]);
  return (
    <BusinessDetailsContainer>
      <BusinessDetailsContent>
        <BusinessBanner business={selectedBusiness}/>
        <BusinessDetailsBody>
          <BusinessDatePicker date={date} onChangeDate={changeDate}/>
          <BusinessDetailsBookings/>
        </BusinessDetailsBody>
      </BusinessDetailsContent>
    </BusinessDetailsContainer>
  );
};

SectionDetails.getInitialProps = (ctx) => {
  const { query } = ctx;
  const { section } = query;
  console.log(section);
  return { section };
};

export default SectionDetails;
