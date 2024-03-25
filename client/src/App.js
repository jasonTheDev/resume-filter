import React, { useState, useEffect } from 'react';

function App() {

  const [title, setTitle] = useState('Resume Builder from React!');

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => { setTitle(data.title);
      }
    )
  }, []);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default App
