import React from "react";
import Service from "./Service";

const Services = () => {
  const contents = [
    {
      titleHead: "SUPERBLY RESPONSIVE",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed excepturi voluptatibus minima laboriosam enim nulla debitis eos ipsam illo iste placeat modi, aperiam voluptatum tempora omnis sit id vel vero.",
      button: <button className="infobutton">READ MORE</button>
    },
    {
      titleHead: "SQUEEKY CLEAN",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed excepturi voluptatibus minima laboriosam enim nulla debitis eos ipsam illo iste placeat modi, aperiam voluptatum tempora omnis sit id vel vero.",
      button: <button className="infobutton">READ MORE</button>
    },
    {
      titleHead: "MULTI PURPOSE",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed excepturi voluptatibus minima laboriosam enim nulla debitis eos ipsam illo iste placeat modi, aperiam voluptatum tempora omnis sit id vel vero.",
      button: <button className="infobutton">READ MORE</button>
    },
    {
      titleHead: "HIGHLY FLEXIBLE",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed excepturi voluptatibus minima laboriosam enim nulla debitis eos ipsam illo iste placeat modi, aperiam voluptatum tempora omnis sit id vel vero.",
      button: <button className="infobutton">READ MORE</button>
    }
  ];
  const serviceList = contents.map((something, i) => {
    return (
      <div className="info">
        <Service
          key={"key-" + i}
          Title={contents[i].titleHead}
          Description={contents[i].description}
          Button={contents[i].button}
        />
      </div>
    );
  });
  return <div className="trunk">{serviceList}</div>;
};

export default Services;
