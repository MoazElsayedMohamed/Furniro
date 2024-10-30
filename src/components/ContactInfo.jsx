import React from "react";

const ContactInfo = ({ icon, main, text1, text2 }) => {
  return (
    <div className="flex gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h2 className="text-3xl font-semibold mb-4">{main}</h2>
        <p className="font-light text-lg">{text1}</p>
        <p className="font-light text-lg">{text2}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
