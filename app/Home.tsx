'use client';
import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="m-12">
      <h1 className="text-2xl">Message from API: {message}</h1>
    </div>
  );
};

export default Home;
