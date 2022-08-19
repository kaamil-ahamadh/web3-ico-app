import React, { useEffect, useState } from "react";

const ContactItem = ({ title, getValue, setValue, name, error }) => {
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (error) {
      if (error.includes(title)) {
        setErrorMsg(error);
      } else {
        setErrorMsg("");
      }
    } else {
      setErrorMsg("");
    }
  }, [error]);

  return (
    <>
      {title !== "Message" ? (
        <>
          <input
            className={
              errorMsg
                ? "contact-input border-red-500"
                : "contact-input border-blue-600 focus:border-green-600"
            }
            placeholder={title}
            type="text"
            autoComplete="false"
            name={name}
            value={getValue}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          {errorMsg ? (
            <div className="text-red-500 mt-1 text-center text-[1rem]">
              {errorMsg}
            </div>
          ) : null}
        </>
      ) : (
        <>
          <textarea
            className={
              errorMsg
                ? "contact-input border-red-500"
                : "contact-input border-blue-600 focus:border-green-600"
            }
            placeholder={title}
            type="text"
            autoComplete="off"
            name={name}
            value={getValue}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          {errorMsg ? (
            <div className="text-red-500 mb-4 text-center text-[1rem]">
              {errorMsg}
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default ContactItem;
