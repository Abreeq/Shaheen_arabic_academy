import React from "react";
import "./Cards.css";
import { MuslimIcon, Quran01Icon, Quran03Icon } from "hugeicons-react";
const Cards = () => {
  return (
    <div className="cards-container">
      <div className="cards">
        <div className="card">
          <MuslimIcon color="#000000" size={60} className="card-icon" />
          <h1 className="card-heading">Expert Teachers</h1>
          <p className="card-description">
            Our platform is home to a team of highly experienced and qualified
            teachers who are passionate about delivering top-notch education.
            They ensure each lesson is engaging, insightful, and tailored to
            meet the needs of every student.
          </p>
        </div>

        <div className="card">
          <Quran03Icon color="#000000" size={60} className="card-icon" />
          <h1 className="card-heading">Islamic Studies</h1>
          <p className="card-description">
            We offer in-depth courses on Islamic Studies, exploring key
            concepts, history, and teachings. These courses are designed to give
            students a comprehensive understanding of Islam, its practices, and
            its principles.
          </p>
        </div>

        <div className="card">
          <Quran01Icon color="#000000" size={60} className="card-icon" />
          <h1 className="card-heading">Quality Education</h1>
          <p className="card-description">
            We believe in providing high-quality education through interactive
            lessons, practical examples, and a focus on learning outcomes. Our
            aim is to equip students with the knowledge and skills they need to
            excel both academically and in their personal lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
