import { GlobalStyle } from "./GlobalStyle";
import { Layuot } from "./Layout";
import { Filter } from "./Filter/Filter";
import { ContactForm } from "./ContactForm/ContactForm.js";
import { ContactList } from "./ContactList/ContactList.js";

export const App = () => {
  return (
    <Layuot>
      <ContactForm />
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layuot>
  );
}
