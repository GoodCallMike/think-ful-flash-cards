import React from "react";
import ListGroup from "../../../../Components/ListGroup/ListGroup.component";
import Text from "../../../../Components/Text";
import { Card } from "../../../../Components/Card";
import CardListItem from "./CardListItem.component";

const CardList = ({ cards, onDelete }) => {
  if (!cards?.length)
    return <Text.Heading level={3}>Deck is empty.</Text.Heading>;

  return (
    <>
      <Text.Heading level={1}>Cards</Text.Heading>
      <Card>
        <ListGroup>
          {cards.map((card) => (
            <CardListItem key={card.id} onDelete={onDelete} {...card} />
          ))}
        </ListGroup>
      </Card>
    </>
  );
};

export default CardList;
