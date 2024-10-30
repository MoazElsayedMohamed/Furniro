import React, { useState } from "react";
import Header from "../components/Header";
import { Form, Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import FormRow from "../components/FormRow";
import { usePassword } from "../context/PasswordContext";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showPassword, handleClick } = usePassword();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:1337/api/auth/local`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });
      const data = await response.json();

      const jwt = data.jwt;
      const user = data.user;
      localStorage.setItem("token", jwt);

      if (response.ok) {
        toast.success("logged in successfully");
        navigate("/");
      } else {
        toast.error("logged in failed");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section>
      <Header />
      <div>
        <img
          src="/hero.jpeg"
          alt="hero-img"
          className="relative sm:max-phone:h-[120vh]"
        />
        <div className="bg-white rounded-xl shadow-md py-16 px-24 absolute left-1/3 top-1/4 w-1/3 sm:max-phone:px-8 sm:max-phone:py-8 sm:max-phone:w-5/6 sm:max-phone:left-[10%] sm:max-phone:top-[15%] ">
          <form className="mb-32 sm:max-phone:mb-16" onSubmit={handleSubmit}>
            <h1 className="text-5xl mb-12 sm:max-phone:text-3xl">Sign in</h1>

            <FormRow
              id="identifier"
              type="text"
              label="Email or username"
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <FormRow
              id="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              onClick={handleClick}
              showPassword={showPassword}
              required={true}
              minLength={8}
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
          </form>
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
