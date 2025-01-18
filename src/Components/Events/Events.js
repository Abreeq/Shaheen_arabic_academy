import React from 'react';
import './Events.css';

const events = [
  {
    title: 'Seerat Competition',
    date: 'January 30, 2025',
    location: 'Masjid Usman, Hamdaniya Colony Bemina, Srinagar',
    description: 'Join us for an exciting Seerat conference focusing on the life of the prophet Muhammad صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ.',
  },
  {
    title: 'Tilawat Competition',
    date: 'Comming Soon',
    location: 'Masjid Usman, Hamdaniya Colony Bemina, Srinagar',
    description: 'Join us for an exciting Tilawat competition focusing on the recitation of the correct and complete Quran and Tajweed.',
  },
  {
    title: 'Islamic Conference',
    date: 'Will be announced soon',
    location: 'Masjid Usman, Hamdaniya Colony Bemina, Srinagar',
    description: 'Join us for an exciting Islamic conference where we will be discussing and gaining insights on various topics related to Islam.',
  },
];

const Events = () => {
  return (
    <div className="events-container">
      <h1 className="title">Upcoming Events<span className='span-text'>إن شاء الله</span></h1>
      <div className="events-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h2 className="event-title">{event.title}</h2>
            <p className="event-date">{event.date}</p>
            <p className="event-location">{event.location}</p>
            <p className="event-description">{event.description}</p>
            <button className="btn">RSVP Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
