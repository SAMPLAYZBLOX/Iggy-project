import { useState } from 'react';

export default function Home() {
  const [percentage, setPercentage] = useState(null);

  const handleClick = () => {
    const randomPercentage = Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
    setPercentage(randomPercentage);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>How dumb will Iggy be today? Lets find out!</h1>
      <button 
        onClick={handleClick} 
        style={{
          padding: '10px 20px', 
          fontSize: '16px', 
          cursor: 'pointer', 
          backgroundColor: '#0070f3', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px'
        }}
      >
        Find Out!
      </button>
      {percentage !== null && (
        <h2 style={{ marginTop: '20px' }}>Iggy will be {percentage}% dumb today!</h2>
      )}
    </div>
  );
}
