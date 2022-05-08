import React from "react";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import {
  EditCard,
  EditDeck,
  Home,
  NewCard,
  NewDeck,
  PageNotFound,
  StudyDeck,
  ViewDeck,
} from "../routes";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/decks/new">
            <NewDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <StudyDeck />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <NewCard />
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
