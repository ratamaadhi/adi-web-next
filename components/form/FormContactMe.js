import React, { useState } from "react";

const FormContactMe = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
      <label className="block text-sm font-light text-secondary mb-1 mt-3">
        Full Name
      </label>
      <input
        type="text"
        name="fullName"
        id="fullName"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full border-tertiary rounded-lg shadow-sm bg-primary text-secondary focus:outline-none focus:ring-0 focus:border-amber-700"
      />

      <label className="block text-sm font-light text-secondary mb-1 mt-3">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border-tertiary rounded-lg shadow-sm bg-primary text-secondary focus:outline-none focus:ring-0 focus:border-amber-700"
      />

      <label className="block text-sm font-light text-secondary mb-1 mt-3">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full h-32 border-tertiary rounded-lg shadow-sm bg-primary text-secondary focus:outline-none focus:ring-0 focus:border-amber-700 resize-none"
      />
    </form>
  );
};

export default FormContactMe;
