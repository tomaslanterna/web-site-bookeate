import styled from "styled-components";

const BusinessListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 750px;
  max-height: 600px;
  padding: 20px;
  margin-right: 20px;
  overflow-y: auto;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar:vertical {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #EBF0F5;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  border: 1px gray solid;
  border-radius: 10px;
  background-color: white;
  box-shadow: initial;
`;

export default BusinessListContainer;
