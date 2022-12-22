import {useState} from 'react'
import { func } from 'prop-types';

function NewContact(){
    const [fname, setFname] = useState("");
    function firstName(e){
        setFname(e.target.value);
    }

    const [lname, setLname] = useState("");
    function lastName(e){
        setLname(e.target.value);
    }

    const [phone, setPhone] = useState("");
    function phoneNumber(e){
        setPhone(e.target.value);
    }

    const [email, setEmail] = useState("");
    function emailAddress(e){
        setEmail(e.target.value);
    }

    function getContactValues(){
        console.log(fname)
        console.log(lname)
        console.log(phone)
        console.log(email)
    }
    return(
        <div>
            <div className="container flex">
      <div className="box-wrapper">
        <div className="add-form">
          <h2>Add Contact</h2>
          <form action="" id="add-contact-form">
            <input
              type="text"
              name="firstName"
              id="fname"
              placeholder="First Name"
              onChange={firstName}
            />
            <input
              type="text"
              name="lastName"
              id="lname"
              placeholder="Last Name"
              onChange={lastName}
            />
            <input
              type="tel"
              name="phoneNumber"
              id="phone"
              placeholder="Phone Number (optional)"
              onChange={phoneNumber}
            />
            <div id="phone-no-err-msg"></div>
            <input
              type="email"
              name="emailAddress"
              id="email"
              placeholder="Email (optional)"
              onChange={emailAddress}
            />
            <br />
            <button className="form-btn" onClick={getContactValues}>Add Contact</button>
          </form>
        </div>
      </div>
    </div>
        </div>
    )
}

export default NewContact;