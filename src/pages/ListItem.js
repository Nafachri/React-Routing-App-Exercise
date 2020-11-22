import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Card, CardDeck, Button } from "react-bootstrap";

function ListItem() {
  const [digimons, setDigimons] = useState([]);
  let histoy = useHistory();

  useEffect(async () => {
    const response = await fetch("https://digimon-api.vercel.app/api/digimon");
    const data = await response.json();
    setDigimons(data);
  });

  function click(item) {
    histoy.push(`/detail-page/${item.name}`);
    console.log(item);
  }

  return (
    <>
      {/* {digimons.map((item) => <div><img onClick={click} src={item.img}></img><p>{item.name} = {item.level}</p></div>)} */}

      {digimons.map(function (item) {
        return (
          <CardDeck>
            <Card>
              <Card.Img className="topImage" variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.level}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  onClick={() => {
                    click(item);
                  }}
                  variant="btn btn-success"
                >
                  Detail
                </Button>
              </Card.Footer>
            </Card>
          </CardDeck>
        );
      })}
    </>
  );
}

export default ListItem;
