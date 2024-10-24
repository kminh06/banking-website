import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(['', '']);

  const handleSubmit = async () => {
    console.log(name, email);
    const response = await fetch('/api/signup.json', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });

    if (response.ok) {
      setName('');
      setEmail('');
      setResult(['Request sent!', 'text-green-500']);
    } else {
      setResult(['Error! Please try again.', 'text-red-500']);
    }
  };

  return (
    <form className="flex flex-col gap-y-6 rounded-2xl border-2 border-primary-300 p-8 shadow-2xl shadow-primary-400 dark:border-primary-600 dark:shadow-primary-600">
      <div>
        <h2 className="font-serif text-3xl text-primary-900 dark:text-primary-100">
          Start earning now!
        </h2>
        <h3 className="text-sm text-primary-600 dark:text-primary-300">Create your account.</h3>
      </div>
      <div>
        <input
          type="text"
          required
          className="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-3 text-base ring-1 ring-primary-300 transition placeholder:text-primary-950/60 hover:ring-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="w-72">
        <input
          type="email"
          required
          className="block w-full appearance-none rounded-md border-0 bg-primary-50 px-4 py-3 text-base ring-1 ring-primary-300 transition placeholder:text-primary-950/60 hover:ring-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:bg-primary-950 dark:ring-primary-200/40 dark:placeholder:text-primary-200/60 dark:hover:ring-primary-400 dark:focus:ring-primary-400"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <p className={'text-sm ' + result[1]}>{result[0]}</p>
      <div className="flex w-full flex-row items-center justify-center">
        <button
          className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-12 py-1.5 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-100 dark:text-primary-950 dark:hover:bg-primary-200 dark:focus-visible:outline-primary-400"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Register
        </button>
        <p className="flex-grow text-center">or</p>
        <a
          className="cursor-pointer py-1.5 pr-4 text-base font-medium text-primary-600 underline-offset-4 transition-all hover:underline dark:text-primary-50"
          href="https://app.thomasinvestmentbank.com/sign-in"
        >
          Sign In
        </a>
      </div>
    </form>
  );
}
