import React from "react";
import BusinessFilterContent from "./styled-components/BusinessFilterContent";
import { Input, Select } from "antd";
import BusinessFilterSearchContainer from "./styled-components/BusinessFilterSearchContainer";
import BusinessFilterCategoryContainer from "./styled-components/BusinessFilterCategoryContainer";

const { Search } = Input;

const BusinessFilter = () => {
  return (
    <BusinessFilterContent>
      <BusinessFilterSearchContainer>
        <Search placeholder="Busca un negocio" allowClear />
      </BusinessFilterSearchContainer>
      <BusinessFilterCategoryContainer>
        <Select
          showSearch
          placeholder="Seleccionar Categoria"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "tom",
              label: "Tom",
            },
          ]}
          style={{width: 200}}
        />
      </BusinessFilterCategoryContainer>
    </BusinessFilterContent>
  );
};

export default BusinessFilter;
