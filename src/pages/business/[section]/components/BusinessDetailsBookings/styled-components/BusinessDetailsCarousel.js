import styled from "styled-components";

const BusinessDetailsCarousel = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 200px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar:horizontal {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ebf0f5;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

export default BusinessDetailsCarousel;
