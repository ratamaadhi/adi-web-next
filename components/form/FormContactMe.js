import React, { useState } from 'react';
import { createContactMeApi } from '../../lib/api';

function FormContactMe() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [messageAlert, setmessageAlert] = useState('');

  function reset() {
    setFullName('');
    setEmail('');
    setMessage('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    createContactMeApi({
      fullName,
      email,
      message,
    })
      .then(() => {
        setmessageAlert('succes');
        setIsSuccess(true);
        reset();
      })
      .catch(() => {
        setIsError(true);
        setMessage('failed');
      })
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsError(false);
          setIsSuccess(false);
          setmessageAlert('');
        }, 3000);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative mb-1 mt-8">
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={`peer w-full border-x-0 border-b border-t-0 border-tertiary bg-primary px-0 shadow-sm placeholder:text-transparent focus:border-amber-700 focus:outline-none focus:ring-0 ${
            isLoading ? 'text-gray-400' : ' text-secondary'
          }`}
          required
          disabled={isLoading}
        />
        <label className="absolute left-0 -top-3.5 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:left-0 peer-focus:text-sm peer-focus:text-gray-400">
          Full Name
        </label>
      </div>

      <div className="relative mb-1 mt-8">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`peer w-full border-x-0 border-b border-t-0 border-tertiary bg-primary px-0 shadow-sm placeholder:text-transparent focus:border-amber-700 focus:outline-none focus:ring-0 ${
            isLoading ? 'text-gray-400' : ' text-secondary'
          }`}
          required
          disabled={isLoading}
        />
        <label className="absolute left-0 -top-3.5 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:left-0 peer-focus:text-sm peer-focus:text-gray-400">
          Email
        </label>
      </div>

      <div className="relative mb-1 mt-12">
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`peer w-full resize-none rounded-lg border-tertiary bg-primary shadow-sm placeholder:text-transparent focus:border-amber-700 focus:outline-none focus:ring-0 ${
            isLoading ? 'text-gray-400' : ' text-secondary'
          }`}
          required
          disabled={isLoading}
        />
        <label className="absolute left-0 -top-8 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-8 peer-focus:left-0 peer-focus:text-sm peer-focus:text-gray-400">
          Message
        </label>
      </div>
      <div className="flex w-full items-center justify-between">
        <div
          className={`${
            !isLoading && isSuccess
              ? 'border border-green-400 text-green-400'
              : !isLoading && isError
              ? 'border border-red-400 text-red-400'
              : ''
          } rounded-lg px-2 py-1 text-xs`}
        >
          {messageAlert}
        </div>
        <button
          type="submit"
          className="mt-2 w-36 rounded-lg bg-gradient-to-br from-amber-600 via-amber-800 to-indigo-900 px-3 py-2 text-secondary shadow-sm"
          disabled={isLoading}
        >
          {isLoading ? 'loading..' : 'Send'}
        </button>
      </div>
    </form>
  );
}

export default FormContactMe;
