import React from "react";
import Text from "../../Components/Text";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb.component";
import { createDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";
import Form from "../../Components/Form/Form.component";
import formInputs from "../../configs/deckInputs.config";

const NewDeck = () => {
  const history = useHistory();
  const crumbs = [{ id: "createDeck", name: "Create Deck" }];

  const handleSubmit = (event, deck) => {
    event.preventDefault();

    const controller = new AbortController();
    const signal = controller.signal;
    createDeck({ ...deck }, signal).then(() => history.push("/"));
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <>
      <Breadcrumb crumbs={crumbs} />
      <Text.Heading level={1}>Create Deck</Text.Heading>
      <Form
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        formInputs={formInputs}
      />
    </>
  );
};

export default NewDeck;
