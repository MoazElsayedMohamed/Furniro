import React, { useState } from "react";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import FormRow from "../components/FormRow";
import { usePassword } from "../context/PasswordContext";
import { toast } from "sonner";

const Register = () => {
  const { showPassword, handleClick } = usePassword();
  const navigate = useNavigate();
  const [registerInput, setRegisterInput] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setRegisterInput({ ...registerInput, [e.target.id]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:1337/api/auth/local/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registerInput),
        }
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("Registeration successfully");
        navigate("/login");
      } else {
        toast.error(data.message || "Registeration failed");
      }

      return data;
    } catch (error) {
      toast.error("error");
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
          className="relative sm:max-phone:h-[140vh]"
        />
        <div className="bg-white rounded-xl shadow-md py-16 px-24 absolute left-1/3 top-1/4 w-1/3 sm:max-phone:w-5/6 sm:max-phone:py-8 sm:max-phone:px-8 sm:max-phone:left-[10%] sm:max-phone:top-[10%]  ">
          <form className="mb-32 sm:max-phone:mb-16" onSubmit={handleSubmit}>
            <h1 className="text-5xl mb-12 sm:max-phone:text-3xl">Sign up</h1>
            <FormRow
              id="name"
              type="text"
              label="Full Name"
              onChange={handleChange}
            />
            <FormRow
              id="email"
              type="email"
              label="Email"
              required
              onChange={handleChange}
            />
            <FormRow
              id="username"
              type="text"
              label="Username"
              onChange={handleChange}
              required
            />
            <FormRow
              id="password"
              type="password"
              label="Password"
              showPassword={showPassword}
              onClick={handleClick}
              onChange={handleChange}
              minLength={8}
              required={true}
            />
            <div className="mt-8">
              <Button size="lg">sign up</Button>
            </div>
          </form>
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
