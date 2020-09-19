import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from '../src/pages/login/login.page';
import ContactsPage from '../src/pages/contacts/contact.page';
import ContactDetailPage from '../src/pages/contact-detail/contact-detail.page';

export default function Routes() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/contacts" exact component={ContactsPage} />
          <Route path="/contact-detail/:id" exact component={ContactDetailPage} />
        </Switch>
      </BrowserRouter>
  );
}