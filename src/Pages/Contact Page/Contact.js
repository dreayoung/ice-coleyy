import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rn78f4y',
        'template_zr539r4',
        form.current,
        'user_S28fFgEj80Fk6zJmzNWEF'
      )
      .then(
        (result) => {
          console.log('success', result.text);
          setStatus('SUCCESS');
        },
        (error) => {
          console.log('fail..', error.text);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 5000);
    }
  }, [status]);

  return (
    <>
      <div className="p-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <div className="bg-ice-green rounded-full p-4 w-20 mx-auto">
                <AiOutlineMail size={30} className="m-2 text-white" />
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Don't be shy -- drop me a line, i'll get back to you as soon as
                possible!
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form ref={form} onSubmit={sendEmail}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                {status === 'SUCCESS' ? (
                      <div className="px-4 py-3 leading normal text-center text-ice-green bg-gray-100 rounded-full">
                        <p>your message has been sent!</p>
                      </div>
                    ) : null}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        className="bb block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Full Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        name="full_name"
                      />
                      <p className="text-red-500 text-xs italic">
                        Please fill out this field.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="bb block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        E-mail
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        type="email"
                        name="email"
                      />
                      <p className="text-red-500 text-xs italic">
                        Please fill out this field.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="bb block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Message
                      </label>
                      <textarea
                        className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                        id="message"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                      <button
                        className="shadow bg-ice-green hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit"
                        value="Send"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
