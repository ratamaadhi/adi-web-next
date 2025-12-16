import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
        setmessageAlert('success');
        setIsSuccess(true);
        reset();
      })
      .catch(() => {
        setIsError(true);
        setmessageAlert('failed');
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
        <Input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={`border-x-0 border-b border-t-0 border-tertiary bg-background px-0 shadow-xs placeholder:text-transparent focus:border-amber-700 focus:outline-hidden focus:ring-0 rounded-none ${
            isLoading ? 'text-gray-400' : 'text-secondary'
          }`}
          required
          disabled={isLoading}
        />
        <label className="absolute -top-3.5 left-0 text-sm text-gray-400 transition-all peer-placeholder-shown:left-0 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:left-0 peer-focus:text-sm peer-focus:text-gray-400">
          Full Name
        </label>
      </div>

      <div className="relative mb-1 mt-8">
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`border-x-0 border-b border-t-0 border-tertiary bg-background px-0 shadow-xs placeholder:text-transparent focus:border-amber-700 focus:outline-hidden focus:ring-0 rounded-none ${
            isLoading ? 'text-gray-400' : 'text-secondary'
          }`}
          required
          disabled={isLoading}
        />
        <label className="absolute -top-3.5 left-0 text-sm text-gray-400 transition-all peer-placeholder-shown:left-0 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:left-0 peer-focus:text-sm peer-focus:text-gray-400">
          Email
        </label>
      </div>

      <div className="relative mb-1 mt-12">
        <Textarea
          name="message"
          id="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`resize-none border-tertiary bg-background shadow-xs placeholder:text-transparent focus:border-amber-700 focus:outline-hidden focus:ring-0 ${
            isLoading ? 'text-gray-400' : 'text-secondary'
          }`}
          required
          disabled={isLoading}
        />
        <label className="absolute -top-8 left-0 text-sm text-gray-400 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-8 peer-focus:left-0 peer-focus:text-sm peer-focus:text-gray-400">
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
        <Button
          type="submit"
          className="mt-2 w-36 rounded-lg bg-gradient-to-br from-amber-600 via-amber-800 to-indigo-900 px-3 py-2 text-secondary shadow-xs hover:from-amber-700 hover:via-amber-900 hover:to-indigo-950"
          disabled={isLoading}
        >
          {isLoading ? 'loading..' : 'Send'}
        </Button>
      </div>
    </form>
  );
}

export default FormContactMe;
