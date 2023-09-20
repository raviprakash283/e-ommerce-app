import React from "react";
import "./Contact.css";
// import { Button } from "@material-ui/core";

const Contact = () => {

    const redirectToGmailWithRecipient = () => {
        const recipient = 'raviprakashjnv@gmail.com'; // Replace with the desired recipient email address
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}`;
    
        // Redirect to Gmail with the recipient pre-filled
        window.location.href = gmailURL;
      };
  return (
    <div className="contactContainer">
            <div className="mailBtn">
          <button onClick={redirectToGmailWithRecipient} >Contact us at raviprakashjnv@gmail.com</button>
          </div>
    
    </div>
  );
};

export default Contact;