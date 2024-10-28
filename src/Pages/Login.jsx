import React from "react";
import Header from "../components/Header";
import { Form, Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const Login = () => {
  return (
    <section>
      <Header />
      <div>
        <img src="/hero.jpeg" alt="hero-img" className="relative" />
        <div className="bg-white rounded-xl shadow-md py-16 px-24 absolute left-1/3 top-1/4 w-1/3 ">
          <Form method="post" className="mb-32">
            <h1 className="text-5xl mb-12">Sign in</h1>
            <label htmlFor="username" className="text-xl text-gray-400">
              Email or username
            </label>
            <input
              type="text"
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
              <Button size="lg">sign in</Button>
            </div>
            <div className="flex justify-between mt-4 text-xl">
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <Link>Need Help?</Link>
            </div>
          </Form>
          <p className="text-xl text-gray-400">
            Don't have an account?
            <Link className="underline text-black font-semibold" to="/register">
              Sign up
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

export default Login;
