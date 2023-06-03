import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegistrationSchema,
  type RegistrationType,
} from "../../lib/schemas/RegistrationSchema";
import { InputForm } from "../atoms";

type Props = {};

const RegistrationForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationType>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(JSON.stringify(data, null, 2));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm name="name" label="Name" />
      <div className="form-control w-full max-w-xs">
        <label htmlFor="name" className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          id="name"
          required
          className="input input-bordered w-full max-w-xs"
          {...register("name")}
        />
        {errors?.name?.message && (
          <label className="label">
            <span className="label-text-alt text-warning">
              {errors?.name?.message}
            </span>
          </label>
        )}
      </div>

      <div className="form-control w-full max-w-xs">
        <label htmlFor="username" className="label">
          <span className="label-text">Username</span>
        </label>

        <input
          type="text"
          id="username"
          required
          className="input input-bordered w-full max-w-xs"
          {...register("username")}
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label htmlFor="email" className="label">
          <span className="label-text">E-mail address</span>
        </label>

        <input
          type="email"
          id="email"
          required
          className="input input-bordered w-full max-w-xs"
          {...register("email")}
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label htmlFor="password" className="label">
          <span className="label-text">Password</span>
        </label>

        <input
          type="password"
          id="password"
          required
          className="input input-bordered w-full max-w-xs"
          {...register("password")}
        />
      </div>

      <input
        type="submit"
        className="btn my-4"
        name="register"
        value="Register"
      />
    </form>
  );
};

export default RegistrationForm;
