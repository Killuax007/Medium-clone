import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupType } from "@404guy/medium-zod-schema";
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";
import axios from "axios";
export default function Auth({ type }: { type: "signup" | "signin" }) {
  const [data, setData] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  async function onSubmit() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"} `,
        data
      );
      const jwt = response.data.token;
      const id = response.data.id;
      localStorage.setItem("token", jwt);
      localStorage.setItem("id", id);
      {
        type == "signup"
          ? toast.success("user signed up successfully !!!")
          : toast.success("Welcome back User !!!");
      }
      navigate("/blogs");
    } catch (error) {
      toast.error("Invalid credentials!!");
    }
  }
  return (
    <div className="flex flex-col justify-center text-center h-screen">
      <div className="flex justify-center">
        <div className="p-4">
          <div className="px-7 mb-5">
            <div className="text-2xl font-bold">
              {type == "signup" ? "Create a new account" : "Welcome back  User"}
            </div>
            <div className="text-slate-400 mt-1">
              {type == "signup"
                ? "Already have an account ? "
                : "New user Join here ? "}
              <Link
                to={type == "signin" ? "/signup" : "/signin"}
                className="underline"
              >
                {type === "signup" ? "Login" : "Signup"}
              </Link>
            </div>
          </div>
          <div className="mt-2">
            {type === "signup" ? (
              <LabeledInput
                label="Userame"
                placeholder="Enter your name..."
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />
            ) : null}

            <LabeledInput
              label="Email"
              placeholder="Enter your email..."
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
            <LabeledInput
              label="Password"
              placeholder="Enter your password..."
              type="password"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
            <button
              type="submit"
              onClick={onSubmit}
              className="my-5 flex w-full justify-center rounded-md bg-black  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface labelInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function LabeledInput({ label, onChange, placeholder, type }: labelInputType) {
  return (
    <div className="mt-3">
      <label className="flex flex-row py-1 px-2 mb-2 text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className=" p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
