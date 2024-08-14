import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [termsList, setTermsList] = useState();

  useEffect(() => {
    const getTermsList = async () => {
      const response = await fetch(
        `https://app-backend-72sy.onrender.com/api/v1/terms?lang=${currentLanguage}`
      );
      const data = await response.json();
      setTermsList(data.data);
    };

    getTermsList();
  }, [currentLanguage]);

  return (
    <div className="p-4">
      {termsList?.map((term, idx) => (
        <p className="term" key={idx}>
          {term}
        </p>
      ))}
    </div>
  );
};

export default Terms;
