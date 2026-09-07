import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const App = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);

    for (let i = 0; i < data.files.length; i++) {
      formData.append("files", data.files[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/user/create",
        formData,
        {
          withCredentials: true,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />

        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />

        <input
          type="file"
          multiple
          {...register("files")}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;