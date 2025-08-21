import React from 'react';

export default function Profile() {
  return (
    <div>
      <img
        src="/foto.jpg"
        alt="Minha foto"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block', 
          margin: '0 auto 10px auto',
        }}
      />
      <h2>Ingrid Beatriz</h2>
      <p>
        Sou estudante de Sistemas para Internet.
        Apaixonada por tecnologia e sempre em busca de aprender coisas novas. 🫰🏼
      </p>
    </div>
  );
}