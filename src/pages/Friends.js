import React from 'react';

const Friends = () => {
  // Siin võiksid saada teiste kasutajate andmed, et neid profiilidel kuvada
  // Näiteks võid kasutada andmebaasi päringuid või staatilisi andmeid

  return (
    <div>
      <h1>Leia Sõpru</h1>
      <div>
        {/* Siia saad lisada teiste kasutajate profiilid */}
        <div>
          <h2>Kasutaja 1</h2>
          <p>Nimi: Jane Doe</p>
          <p>Hobid: Matkamine, kokandus</p>
          {/* Lisaks muud profiiliandmed */}
        </div>
        <div>
          <h2>Kasutaja 2</h2>
          <p>Nimi: Mark Smith</p>
          <p>Hobid: Jalgpall, joonistamine</p>
          {/* Lisaks muud profiiliandmed */}
        </div>
        {/* Jätkake teiste kasutajate profiilidega */}
      </div>
    </div>
  );
};

export default Friends;
