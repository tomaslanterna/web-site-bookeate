const { createContext, useState } = require("react");

const BusinessContext = createContext();

export const BusinessProvider = ({ children }) => {
  const [selectedBusiness, setSelectedBusiness] = useState({});

  return (
    <BusinessContext.Provider value={{ selectedBusiness, setSelectedBusiness }}>
      {children}
    </BusinessContext.Provider>
  );
};

export default BusinessContext;
