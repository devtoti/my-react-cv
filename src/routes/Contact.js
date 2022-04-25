import React from "react";
import { useState } from "react";

const Contact = () => {
  const [fname, setFName] = useState("");
  const [last, setLast] = useState("");
  const [msg, setMsg] = useState("");

  const [fnameError, setfnameError] = useState(false);
  const [lnameError, setlnameError] = useState(false);
  const [msgError, setMsgError] = useState(false);

  function handleSubmit(e) {
    console.log(fname, last, msg);
    let nameCheck = fname;
    let lastNameCheck = last;
    let msgCheck = msg;
    // const hasNumber = /\d/;

    const onlyLetters = /[^a-zA-Z]/;
    e.preventDefault();

    //CHECK FIRST NAME INPUT//
    nameCheck.length < 4 || nameCheck == "" || onlyLetters.test(nameCheck)
      ? setfnameError(true)
      : setfnameError(false);

    //CHECK LAST NAME INPUT//
    lastNameCheck.length < 2 || onlyLetters.test(nameCheck) || nameCheck == ""
      ? setlnameError(true)
      : setlnameError(false);

    //CHECK MESSAGE INPUT//
    msgCheck.length < 10 || nameCheck == ""
      ? setMsgError(true)
      : setMsgError(false);
  }

  function handleForm(ev) {
    console.log(fname, last, msg);
    const { value, name } = ev.target;
    if (name == "fName") {
      setFName(value);
    } else if (name == "lName") {
      setLast(value);
    } else {
      setMsg(value);
    }
  }

  return (
    <div className="contact-me-form">
      <form onSubmit={handleSubmit}>
        <div className="input-fields">
          <h2>Contact me</h2>
          <h4>First name</h4>
          <input
            style={{ height: "2em" }}
            type="text"
            placeholder="your first name"
            value={fname}
            name="fName"
            onChange={handleForm}
          ></input>
          {fnameError && (
            <small>
              Must contain at least 4 digits. Numbers and special characters are
              not allowed.
            </small>
          )}
          <h4>Last name</h4>
          <input
            style={{ height: "2em" }}
            type="text"
            placeholder="your last name"
            value={last}
            name="lName"
            onChange={handleForm}
          ></input>
          {lnameError && (
            <small>
              Must contain at least 2 digits. Numbers and special characters are
              not allowed.
            </small>
          )}

          <h4>Message</h4>
          <input
            type="text"
            placeholder="your message"
            value={msg}
            name="Message"
            onChange={handleForm}
            style={{ height: "3em" }}
          ></input>
          {msgError && <small>Message must contain at least 10 letters.</small>}
        </div>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};
const fields = [
  { type: "text", placeholder: "your first name", label: "fName", id: 0 },
  { type: "text", placeholder: "your last name", label: "lName", id: 1 },
  { type: "text", placeholder: "your message", label: "message", id: 2 }
];

export default Contact;
