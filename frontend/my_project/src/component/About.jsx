import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './footer';


const About = () => {
  return (
    <>
    <Navbar/>
    <section className="max-w-screen-xl mx-auto mt-8 px-4 md:px-10 py-20 dark:bg-slate-900 dark:text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-500">About V_BookStore</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Your ultimate online bookstore — where passion for reading meets the power of technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Books and Reading"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why V_BookStore?</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            At V_BookStore, we believe that books are more than just pages — they're gateways to imagination, knowledge, and personal growth.
            Whether you're into fiction, non-fiction, self-help, or tech — we've got something for every reader.
          </p>
          <ul className="list-disc mt-4 ml-5 text-gray-600 dark:text-gray-400">
            <li>Wide collection of genres and authors</li>
            <li>Modern, intuitive UI</li>
            <li>Fast search and smooth user experience</li>
            <li>Login/signup with secure authentication</li>
            <li>Dark mode for late-night readers 🌙</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl font-medium mb-2">Built with ❤️ using MERN Stack</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This project is open source and constantly evolving to deliver the best reading experience.
        </p>
      </div>
    </section>
    <Footer/>
    </>
    
  );
};

export default About;
