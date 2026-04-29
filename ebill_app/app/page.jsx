'use client';

import { useState } from 'react';

export default function Home() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    const { invoke } = await import('@tauri-apps/api/core');
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri + Next.js</h1>

      <div className="row">
        <a href="https://nextjs.org" target="_blank">
          <img src="/next.svg" className="logo next" alt="Next logo" />
        </a>
      </div>

      <p>Click on the Next.js logo to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>
    </div>
  );
}