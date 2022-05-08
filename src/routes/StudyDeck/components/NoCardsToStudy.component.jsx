import React from "react";
import Text from "../../../Components/Text";
import Button from "../../../Components/Button/Button.component";
import { FaPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Breadcrumb from "../../../Components/Breadcrumb/Breadcrumb.component";

const NoCardsToStudy = ({ deckId, numOfCards }) => {
  const history = useHistory();

  const handleAddCards = () => {
    history.push(`/decks/${deckId}/cards/new`);
  };

  return (
    <>
      <Breadcrumb />
      <Text.Heading level={2}>No enough cards.</Text.Heading>
      <Text.Paragraph>{`You need at least 3 cards to study. There are ${numOfCards} cards in this deck.`}</Text.Paragraph>
      <Button btnStyle="primary" icon={FaPlus} onClick={handleAddCards}>
        Add Cards
      </Button>
    </>
  );
};

export default NoCardsToStudy;
