import { useState } from 'react';

function NewContact() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  function onChangeInput(e) {
    const value = e.target.value;
    const inputName = e.target.name;
    setUser({
      ...user,
      // firstName:value
      [inputName]: value,
    });
  }

  function getContactValues(e) {
    e.preventDefault();
    let contactsList = JSON.parse(localStorage.getItem('contactsList'));
    if (contactsList) {
      contactsList = [...contactsList, { ...user }];
    } else {
      contactsList = [{ ...user }];
    }
    console.log('contact list ->', contactsList);
    localStorage.setItem('contactsList', JSON.stringify(contactsList));
  }

  return (
    // <div>
    <div className='container flex'>
      <div className='box-wrapper'>
        <div className='add-form'>
          <h2>Add Contact</h2>
          <form action='' onSubmit={getContactValues} id='add-contact-form'>
            <input
              type='text'
              name='firstName'
              id='fname'
              value={user.firstName}
              placeholder='First Name'
              onChange={onChangeInput}
            />
            <input
              type='text'
              name='lastName'
              id='lname'
              value={user.lastName}
              placeholder='Last Name'
              onChange={onChangeInput}
            />
            <input
              type='tel'
              name='phoneNumber'
              id='phone'
              value={user.phoneNumber}
              placeholder='Phone Number (optional)'
              onChange={onChangeInput}
            />
            <div id='phone-no-err-msg'></div>
            <input
              type='email'
              name='email'
              id='email'
              value={user.email}
              placeholder='Email (optional)'
              onChange={onChangeInput}
            />
            <br />
            <button className='form-btn' type='submit'>
              Add Contact
            </button>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default NewContact;
