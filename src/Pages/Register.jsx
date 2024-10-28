import React from "react";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { Form, Link } from "react-router-dom";

const Register = () => {
  return (
    <section>
      <Header />
      <div>
        <img src="/hero.jpeg" alt="hero-img" className="relative" />
        <div className="bg-white rounded-xl shadow-md py-16 px-24 absolute left-1/3 top-1/4 w-1/3 ">
          <Form method="post" className="mb-32">
            <h1 className="text-5xl mb-12">Sign up</h1>
            <label
              htmlFor="fullname"
              className="text-xl text-gray-400 capitalize"
            >
              full name
            </label>
            <input
              type="text"
              id="fullname"
              className="block h-16 border border-gray-300 w-full rounded-xl outline-none p-4 mt-4 mb-6"
            />
            <label htmlFor="email" className="text-xl text-gray-400 capitalize">
              email
            </label>
            <input
              type="email"
              id="email"
              className="block h-16 border border-gray-300 w-full rounded-xl outline-none p-4 mt-4 mb-6"
            />
            <label
              htmlFor="username"
              className="text-xl text-gray-400 capitalize"
            >
              username
            </label>
            <input
              type="email"
              id="username"
              className="block h-16 border border-gray-300 w-full rounded-xl outline-none p-4 mt-4 mb-6"
            />
            <label htmlFor="username" className="text-xl text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="username"
              className="block h-16 border border-gray-300 w-full rounded-xl outline-none p-4 mt-4"
            />
            <div className="mt-8">
              <Button size="lg">sign up</Button>
            </div>
          </Form>
          <p className="text-xl text-gray-400">
            Already have an account?
            <Link className="underline text-black font-semibold" to="/login">
              Sign in
            </Link>
          </p>
          <p className="text-xl text-gray-400 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <Link className="text-black font-semibold">Learn more.</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
