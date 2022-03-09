import React, { useState, useEffect } from 'react';
import Footer from '../Resusables/Footer';
import { AiOutlineMail } from 'react-icons/ai';

export default function Contact() {
  const [status, setStatus] = useState('');

  return (
    <>
      <div className="p-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <div className="bg-ice-green rounded-full p-4 w-20 mx-auto">
                <AiOutlineMail size={30} className="m-2 text-white" />
              </div>
              <p className="bb mt-8 text-sm text-zinc-400 text-center">
                Don't be shy -- drop me a line, <br />
                i'll get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form name="contact-form" method="post">
              <input type="hidden" name="form-name" value="contact-form" />
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-black space-y-6 sm:p-6">
                  {status === 'SUCCESS' ? (
                    <div className="px-4 py-3 leading normal text-center text-ice-green ring-1 ring-ice-green rounded-full bg-black ">
                      <p>Your message has been successfully sent!</p>
                    </div>
                  ) : null}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        className="bb block uppercase tracking-wide text-zinc-400 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Full Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Jane Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="bb block uppercase tracking-wide text-zinc-400 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        E-mail
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="doe@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="bb block uppercase tracking-wide text-zinc-400 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Message
                      </label>
                      <textarea
                        className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                        id="message"
                        name="message"
                        placeholder="Your message here! (please include details of the shoot)"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                      <input
                        className="shadow bg-ice-green hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit"
                        value="Send"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
