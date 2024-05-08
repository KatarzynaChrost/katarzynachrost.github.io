"use client";

import { useForm } from "react-hook-form";
import Button from "../atoms/Button";
import { toast } from "react-toastify";
import { contact } from "../../actions/contact";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";

export interface IFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: IFormData) => {
    const response = await contact(data);

    if (response.success) {
      toast.success("Message sent! 🚀");
      reset();
    } else {
      toast.error("Something went wrong, try again later.");
    }
  };

  return (
    <div>
      <form className="mx-auto mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">
          <div className="grid grid-rows-2 gap-4 lg:gap-2">
            <div className="relative">
              <label htmlFor="name" className="block text-lg">
                Name:
              </label>
              <input
                {...register("name", {
                  required: "Field is required",
                  pattern: {
                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                    message: "Invalid name",
                  },
                })}
                id="name"
                className={clsx("input-border", {
                  "border-1 border-red-500": errors.name,
                })}
                placeholder="Enter your name"
              />
              {errors.name?.message && (
                <p className="text-red-500 absolute right-0">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-lg">
                Email:
              </label>
              <input
                {...register("email", {
                  required: "Field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                id="email"
                className={clsx("input-border", {
                  "border-1 border-red-500": errors.email,
                })}
                placeholder="Enter your email"
              />
              {errors.email?.message && (
                <p className="text-red-500 absolute right-0">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="relative">
            <label htmlFor="message" className="block text-lg">
              Message:
            </label>
            <textarea
              id="message"
              className={clsx("input-border", {
                "border-1 border-red-500": errors.message,
              })}
              rows={5}
              placeholder="Enter your message"
              {...register("message", { required: "Field is required" })}
            />
            {errors.message?.message && (
              <p className="text-red-500 absolute right-0">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-8 text-right">
          <Button outline onZinc type="submit">
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
