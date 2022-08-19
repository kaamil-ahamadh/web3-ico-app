import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import ContactItem from "../components/ContactItem";
import { toast } from "react-toastify";
import schema from "../utils/schema";

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(null);

  //Send Email
  const form = useRef();

  const sendEmail = () => {
    if (
      !process.env.REACT_APP_EMAILJS_SERVICE_ID ||
      !process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
      !process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ) {
      console.log("EmailJs Settings Missing");
      return;
    }
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Message Sent Successfully");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
          } else {
            toast.error("Error Occurred, Please Try again after some time");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (name || email || subject || message) {
      handleValidation();
    }
  }, [name, email, subject, message]);

  const handleValidation = async (e) => {
    //Call Only on Submit Button Click
    if (e) {
      e.preventDefault();
    }

    try {
      const value = await schema.validateAsync({
        name,
        email,
        subject,
        message,
      });

      setError("");

      //Call Only on Submit Button Click
      if (e) {
        sendEmail();
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="mt-6">
      <div className="flex justify-center items-center h-[80vh]">
        <div className="contact-container z-10">
          <div className="flex justify-center mt-6 mb-1">Contact Us</div>
          <form ref={form} onSubmit={handleValidation} autoComplete="off">
            <div className="flex items-center flex-col">
              <ContactItem
                title="Name"
                getValue={name}
                setValue={setName}
                name="user_name"
                error={error}
              />
              <ContactItem
                title="Email"
                getValue={email}
                setValue={setEmail}
                name="user_email"
                error={error}
              />
              <ContactItem
                title="Subject"
                getValue={subject}
                setValue={setSubject}
                name="user_subject"
                error={error}
              />
              <ContactItem
                title="Message"
                getValue={message}
                setValue={setMessage}
                name="user_message"
                error={error}
              />
              <div className="flex flex-col items-center">
                <button type="submit" className="btn m-4">
                  Send
                </button>
                <div className="text-sm mb-4">* All Fields are mandatory</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
