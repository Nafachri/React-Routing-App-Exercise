import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailItem() {
  const [digimons, setDigimons] = useState([]);
  const { name } = useParams();

  useEffect(async () => {
    const response = await fetch(
      `https://digimon-api.vercel.app/api/digimon/name/${name}`
    );
    const data = await response.json();
    setDigimons(data);
  }, []);
  console.log(digimons);

  return (
    <>
      {digimons[0] && (
        <div>
          <h1>{digimons[0].name}</h1>
          <img src={digimons[0].img}></img>
          <h4>{digimons[0].level}</h4>
        </div>
      )}
    </>
  );
}

export default DetailItem;
