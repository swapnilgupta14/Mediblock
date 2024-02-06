import React from 'react';
import './KnowMyTeam.css';

import Image1 from './dog.png';
import Image2 from './dog.png';
import Image3 from './dog.png';
import Image4 from './dog.png';
import Image5 from './dog.png';

const members = [
  {
    id: 1,
    name: 'SWAPNIL GUPTA',
    image: Image1,
    details: 'Description for Swapnil Gupta',
  },
  {
    id: 2,
    name: 'TANMAY GUPTA',
    image: Image2,
    details: 'Description for Tanmay Gupta',
  },
  {
    id: 3,
    name: 'TANYA TIWARI',
    image: Image3,
    details: 'Description for Tanya Tiwari',
  },
  {
    id: 4,
    name: 'VANSHIKA SRIVASTAVA',
    image: Image4,
    details: 'Description for Vanshika Srivastava',
  },
  {
    id: 5,
    name: 'VARINI AWASTHI',
    image: Image5,
    details: 'Description for Varini Awasthi',
  },
];

const MemberDetails = ({ member }) => {
  return (
    <div className="member-details">
      <img src={member.image} alt={member.name} className="image" />
      <div className="name">{member.name}</div>
      <div className="details">{member.details}</div>
    </div>
  );
};

const KnowMyTeam = () => {
  return (
    <div className="know-my-team">
      <div className="heading"> Our Team </div>
      <div className="member-container">
        {members.map((member) => (
          <MemberDetails key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default KnowMyTeam;
