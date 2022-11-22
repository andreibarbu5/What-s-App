import React from "react";
import profile from "../assets/profile.jpg";
import Contact from "./Contact";
import profile2 from "../assets/face2.jpg";
import profile3 from "../assets/face3.jpg";
import profile4 from "../assets/face4.jpg";

const Contacts = () => {
  const contacts = [
    {
      img: profile,
      name: "Cool Kids",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: profile2,
      name: "Jane",
      message: "What's up consectetur adipiscing elit?",
    },
    {
      img: profile3,
      name: "Brother",
      message: "How are you adipiscing elit??",
    },
    { img: profile4, name: "Michael", message: "Hi 123 adipiscing elit?" },
    {
      img: profile,
      name: "Cool Kids",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: profile2,
      name: "Jane",
      message: "What's up consectetur adipiscing elit?",
    },
    {
      img: profile3,
      name: "Brother",
      message: "How are you adipiscing elit??",
    },
    { img: profile4, name: "Michael", message: "Hi 123 adipiscing elit?" },
  ];
  return (
    <div>
      <div className="md:w-[20rem] lg:w-[30rem]  md:px-4  ">
        {contacts.map((contact) => (
          <Contact
            img={contact.img}
            name={contact.name}
            message={contact.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
