import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(['', '']);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('/api/contact.json', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    });

    if (response.ok) {
      setName('');
      setEmail('');
      setMessage('');
      setResult(['Request sent!', 'text-green-500']);
    } else {
      setResult(['Error! Please try again.', 'text-red-500']);
    }
  };

  return (
    <form className="mt-3 flex flex-col gap-y-6">
      <div>
        <input
          type="text"
          required
          className="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-3 text-base ring-1 ring-primary-900/40 transition placeholder:text-primary-950/60 hover:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          required
          className="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-3 text-base ring-1 ring-primary-900/40 transition placeholder:text-primary-950/60 hover:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <textarea
          rows="3"
          className="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-4 text-base ring-1 ring-primary-900/40 transition placeholder:text-primary-950/60 hover:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <p className={'text-sm ' + result[1]}>{result[0]}</p>
      <div>
        <button
          className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-100 dark:text-primary-950 dark:hover:bg-primary-200 dark:focus-visible:outline-primary-400"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
