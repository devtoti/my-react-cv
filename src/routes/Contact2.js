import "../styles.css";
import { useEffect, useState } from "react";

function formReset(e) {
  console.log("gubai");
}

function formMessage(e) {
  console.log(e);
}

export default function Contact() {
  const [nameInput, setNameInput] = useState("Your name...");
  const [emailInput, setEmailInput] = useState("Your email...");
  const [msgInput, setMsgInput] = useState("Your message...");

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(name, email, msg) {
    if (name.length >= 9) {
      console.log("working");
      setNameInput("");
      setSubmitted(true);
    } else {
      alert("must contain more digits");
    }
  }

  useEffect(() => {
    ///efecto
    console.log("123");
  }, [nameInput, emailInput]);

  function handleName(e) {
    setNameInput(e.target.value);
    if (nameInput.length < 8) {
      // console.log(nameInput.length + 1);
      return null;
    }
  }
  const nameCheck = nameInput.length <= 5;
  const emailCheck = emailInput.length <= 8;
  const nameErrorMsg = {
    error: "Name must contain at least 6 letters",
    success: "Perfect!"
  };
  const emailErrorMsg = "E-mail must contain @ and domain name";
  const contentErrorMsg = "Name must contain at least 6 letters";
  // const formColors = {};
  return (
    <>
      {submitted && "hi"}
      {!submitted && (
        <main className="main-contact contact" style={{ padding: "1rem 0" }}>
          <h2>Contact</h2>
          <form className="contact-form">
            <h4>First name</h4>
            <div className={nameCheck ? "incomplete" : "completed"}>
              <input
                type="text"
                value={nameInput}
                onChange={handleName}
              ></input>
              {/* <small className={nameCheck ? "small-error-message" : "small-hidden"}> */}
              <small className="small-error-message">
                {nameCheck ? nameErrorMsg.error : nameErrorMsg.success}
              </small>
            </div>
            <h4>E-mail</h4>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className={emailCheck ? "incomplete" : "completed"}
            ></input>
            <small
              className={emailCheck ? "small-error-message" : "small-hidden"}
            >
              {emailErrorMsg}
            </small>
            <h4>Message</h4>
            <input
              className="form-content"
              onChange={(e) => formMessage(e.target.value)}
              type="text"
            ></input>
            <div className="form-buttons">
              <button
                className="w3-button w3-black w3-block"
                type="button"
                onClick={() => handleSubmit(nameInput, emailInput, msgInput)}
              >
                Send
              </button>
              <button
                className="w3-button w3-block w3-red"
                type="button"
                onClick={() => formReset()}
              >
                Clear
              </button>
            </div>
          </form>
        </main>
      )}
    </>
  );
}
