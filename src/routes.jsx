import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ContactList from "./pages/Contacts/ContactList";
import ViewContacts from "./pages/Contacts/ViewContacts";
import AddContact from "./pages/Contacts/AddContact";
import EditContact from "./pages/Contacts/EditContact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      <Route path="/" element={<Home />} />

      <Route path="/contacts" element={<ContactList />} />

      <Route path="/view-contact/:id" element={<ViewContacts />} />

      <Route path="add-contact" element={<AddContact />} />

      <Route path="edit-contact/:id" element={<EditContact />} />
    </Route>
  )
);

export default router;
