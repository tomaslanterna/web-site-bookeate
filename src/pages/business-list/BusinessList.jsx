import React from "react";
import BusinessListContainer from "./styled-components/BusinessListContainer";
import BussinesItem from "./components/BussinesItem";
import BusinessSectionContainer from "./styled-components/BusinessSectionContainer";
import BusinessFilterContainer from "./styled-components/BusinessFilterContainer";
import BusinessSectionContent from "./styled-components/BusinessSectionContent";
import BusinessFilter from "./components/BusinessFilter";

const shops = [
  {
    shopId: 1,
    shopName: "Prueba 1",
    shopCategory: "Estetica",
    shopImg:
      "https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/32805-adivinanza-que-es-que-es-del-tamano-de-una-nuez.jpg?alt=media&token=a6b9edd8-9606-4845-8b1d-fe94cc26222c",
  },
  {
    shopId: 2,
    shopName: "Prueba 2",
    shopCategory: "Estetica",
    shopImg:
      "https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/b7198a8cfdf9f04ca524fb59ec3b7d7e-500x500.jpg?alt=media&token=cb96e6c3-07c4-40f3-9dd7-ed5f47c0db62",
  },
  {
    shopId: 3,
    shopName: "Prueba 3",
    shopCategory: "Estetica",
    shopImg:
      "https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/download.jpg?alt=media&token=39cb4e60-6123-4f3b-aca2-a375ac8a4561",
  },
  {
    shopId: 4,
    shopName: "Prueba 4",
    shopCategory: "Estetica",
    shopImg:
      "https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/gorro-t-rmico-aluminio-tama-o-grande-3946-p.png?alt=media&token=5985282c-5ec8-43cb-b16e-b36f5a80a3db",
  },
  {
    shopId: 5,
    shopName: "Prueba 5",
    shopCategory: "Estetica",
    shopImg:
      "https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/images%20(1).jpg?alt=media&token=bdab2807-2481-49e4-9fd2-d4d2cbbd0f97",
  },
  {
    shopId: 6,
    shopName: "Prueba 6",
    shopCategory: "Estetica",
    shopImg:
      "https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/images%20(2).jpg?alt=media&token=7afd3a54-b79a-43ae-89e0-608d569bb7c5",
  },
  {
    shopId: 7,
    shopName: "Prueba 7",
    shopCategory: "Estetica",
    shopImg:
      "https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/images%20(3).jpg?alt=media&token=055128d9-673b-4404-9b89-ba1798524a44",
  },
  {
    shopId: 8,
    shopName: "Prueba 8",
    shopCategory: "Estetica",
    shopImg:
      "https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/images.jpg?alt=media&token=60e04108-020e-4fe3-b794-e1b0551357d5",
  },
  {
    shopId: 9,
    shopName: "Prueba 9",
    shopCategory: "Estetica",
    shopImg:
      "https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/revistas14x21cm-500x500px-A.jpg?alt=media&token=16c7b4ff-c346-4701-81b1-f2b209c0183f",
  },
  {
    shopId: 10,
    shopName: "Prueba 10",
    shopCategory: "Estetica",
    shopImg:
      "https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/style10s-date-rouge-face-500x500.png?alt=media&token=173d64d0-e246-4000-8a0c-0b19e36e60d2",
  },
  {
    shopId: 11,
    shopName: "Prueba 11",
    shopCategory: "Estetica",
    shopImg:
      "https://firebasestorage.googleapis.com/v0/b/ecommerceapp-3894d.appspot.com/o/style10s-date-rouge-face-500x500.png?alt=media&token=173d64d0-e246-4000-8a0c-0b19e36e60d2",
  },
];
const BusinessList = () => {
  return (
    <BusinessSectionContainer>
      <BusinessSectionContent>
        <BusinessListContainer>
          {shops.map((bus) => (
            <BussinesItem
              business={bus}
              key={bus.shopId}
            />
          ))}
        </BusinessListContainer>
        <BusinessFilterContainer>
          <BusinessFilter/>
        </BusinessFilterContainer>
      </BusinessSectionContent>
    </BusinessSectionContainer>
  );
};

export default BusinessList;
