import React from "react";
import { CardHeader } from "../../../../Components/Card";
import Text from "../../../../Components/Text";

const DeckCardHeader = ({ name, numOfCards }) => {
  return (
    <CardHeader className="d-flex justify-content-between align-items-center">
      <Text.Heading level={2}>{name}</Text.Heading>
      <Text.Paragraph>{numOfCards} cards</Text.Paragraph>
    </CardHeader>
  );
};

export default DeckCardHeader;
