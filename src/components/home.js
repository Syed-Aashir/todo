import React from 'react';
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const allContacts = JSON.parse(localStorage.getItem('contactsList')); //readOnly

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('');
  const [filter, setFilter] = useState('');

  function handleSetSearch(e) {
    setSearch(e.target.value);
  }

  function getOrderData(e) {
    setOrder(e.target.value);
  }

  function getFilterData(e) {
    console.log('filter ->', e.target.value);
    setFilter(e.target.value);
  }

  function logValues() {
    console.log(search);
    console.log(order);
    console.log(filter);
    navigate('/newContact');
  }

  function searchContacts(search) {
    const searchVal = search.toLowerCase();
    if (searchVal) {
      const searchContacts = contacts.filter((contact) => {
        const firstName = contact.firstName.toLowerCase();
        const lastName = contact.lastName.toLowerCase();
        return firstName.includes(searchVal) || lastName.includes(searchVal);
      });
      setContacts([...searchContacts]);
    } else {
      allContacts?.length && setContacts([...allContacts]);
    }
  }

  function filterContacts(attribute) {
    if (attribute) {
      const filterContacts = contacts.filter((contact) => {
        // {firstName,lastName,phoneNumber,email} = contact
        // console.log(contact['email']);
        return (
          contact[attribute] !== null &&
          contact[attribute] !== '' &&
          contact[attribute] !== undefined
        );
      });
      setContacts([...filterContacts]);
    } else {
      allContacts?.length && setContacts([...allContacts]);
    }
  }

  useEffect(() => {
    // mounting -> dependency array is empty
    const contacts = JSON.parse(localStorage.getItem('contactsList'));
    if (contacts) {
      setContacts([...contacts]);
    }
  }, []);

  useEffect(() => {
    console.log('filter effect');
    filterContacts(filter);
  }, [filter]);

  useEffect(() => {
    // when search state updated - (Component Update & Re-render)
    searchContacts(search);
  }, [search]);

  return (
    <div>
      <div class='container flex'>
        <div class='box-wrapper'>
          <div class='filters-wrapper'>
            <h2>Contacts</h2>
            <label>
              <strong>Search Contact:</strong>
            </label>
            <input
              type='text'
              name='searchContact'
              id='search-contact'
              placeholder='Search by name'
              onChange={handleSetSearch}
            />
            <div class='filter-container'>
              <div class='order-wrapper'>
                <label>
                  <strong>Order by:</strong>
                </label>
                <select
                  id='order-select'
                  onClick={getOrderData}
                  defaultValue={''}
                >
                  <option value='' disabled hidden>
                    All Enteries
                  </option>
                  <option value='1'>Alphabetical order</option>
                  <option value='-1'>Reverse Order</option>
                </select>
              </div>
              <div class='filter-wrapper'>
                <label>
                  <strong>Filter by:</strong>
                </label>
                <select id='filter-select' onChange={getFilterData}>
                  <option value=''>All Contacts</option>
                  <option value='phoneNumber'>
                    Contacts with phone Numbers
                  </option>
                  <option value='email'>Contacts having Email Id</option>
                </select>
              </div>
            </div>
          </div>

          <div id='contacts-list'>
            {contacts?.map((contact, index) => (
              <div key={`contact-${index}`}>
                {contact.firstName} - {contact.lastName}
              </div>
            ))}
          </div>

          <div id='pagination-wrapper'></div>
          <a id='new-contact-button' onClick={logValues}>
            Add Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
