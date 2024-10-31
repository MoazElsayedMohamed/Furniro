import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import ContactInfo from "./ContactInfo";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import FormRow from "./FormRow";
import { Button } from "./ui/button";
import { toast } from "sonner";

const MainContact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.id]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:1337/api/contact-messages`, {
        method: "POST",
        body: JSON.stringify({
          data: contactData,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      toast.success("Your data is submitted successfully");

      return data;
    } catch (error) {
      throw new Error("Failed to fetch form data");
    }
  }

  return (
    <section className="py-36 px-52">
      <h2 className="text-6xl font-bold text-center mb-4">Get in Touch</h2>
      <div className="text-center mb-16">
        <p className=" text-lg font-light text-gray-500">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="flex gap-32 justify-center">
        <div className="flex flex-col gap-8">
          <ContactInfo
            icon={<FaLocationDot />}
            main="Address"
            text1="236 5th SE Avenue, New York NY10000, United States"
          />
          <ContactInfo
            icon={<FaPhoneAlt />}
            main="Phone"
            text1="Mobile: +(84) 546-6789"
            text2="Hotline: +(84) 456-6789"
          />
          <ContactInfo
            icon={<MdAccessTimeFilled />}
            main="Working Time"
            text1="Monday-Friday: 9:00 - 22:00"
            text2="Saturday-Sunday: 9:00 - 21:00"
          />
        </div>
        <div className="w-1/2">
          <form onSubmit={handleSubmit}>
            <FormRow
              id="name"
              type="text"
              label="Your name"
              placeholder="Abc"
              onChange={handleChange}
              required
            />
            <FormRow
              id="email"
              type="email"
              label="Email address"
              placeholder="Abc@def.com"
              onChange={handleChange}
              required
            />
            <FormRow
              id="subject"
              type="text"
              label="Subject"
              placeholder="This is an optional"
              onChange={handleChange}
            />
            <FormRow
              id="content"
              type="text"
              label="Message"
              placeholder="Hi! i’d like to ask about"
              onChange={handleChange}
            />
            <div className="w-1/2">
              <Button size="lg" type="submit">
                Sumbit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MainContact;
