import React from "react";

type Props = {
  label: string;
  name: string;
};

const InputForm = ({ label, name, ...props }: Props) => {
  return (
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
      {props?.errors?.name?.message && (
        <label className="label">
          <span className="label-text-alt text-warning">
            {props?.errors?.name?.message}
          </span>
        </label>
      )}
    </div>
  );
};

export default InputForm;
