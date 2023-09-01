import React, { useState } from 'react';

function Home() {
  // hook 만들어줌
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    console.log(text);
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
