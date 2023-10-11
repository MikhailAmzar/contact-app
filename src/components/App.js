import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactDetail from './ContactDetail';
import DeleteConfirm from './DeleteConfirm';
import EditContact from './EditContact';
import api from '../api/contacts';
import { useEffect, useState } from 'react';
import {v4 as uuid} from 'uuid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {


  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  // const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ??  []);
  
//retrieve contacts
const retrieveContacts = async () => {
  const response = await api.get("/contacts");
  return response.data;
};

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    }
    const response = await api.post("/contacts", request)
    // setContacts([...contacts, {id: uuid(), ...contact}]);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {// edit contacts
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email} = response.data;
    setContacts(
      contacts.map((contact) => {
      return contact.id === id ? { ...response.data } : contact; 
    })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) =>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  },[]);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header/>
          <br/>
          <br/>
          <br/>
            <Switch>
                <Route path="/" exact 
                render={(props) => (
                  <ContactList {...props} 
                  contacts={contacts} 
                  getContactId={removeContactHandler}
                  />
                )}/>
                <Route path="/add"
                render={(props) => (
                  <AddContact {...props}
                  addContactHandler={addContactHandler}/>
                )}/>

                <Route path="/edit"
                render={(props) => (
                  <EditContact {...props}
                  updateContactHandler={updateContactHandler}/>
                )}/>
                <Route path="/contact/:id" component={ContactDetail}/>   
                <Route path="/delete" component={DeleteConfirm}/>
            </Switch>
          <br/>
          <br/>
          <br/>
        {/* <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
        
    </div>
  );
}

export default App;
