import ChallengeBtn from "../components/ChallengeBtn";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Submit } from "../components/GeneralBtn";

const schema = yup.object().shape({
  name: yup.string().min(2).max(15).required(),
  description: yup.string().min(10).max(150).required(),
});

export default function CreateNewScenario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <form
      className="flex-1 flex-col flex pt-24 pb-2 max-w-7xl mx-auto justify-evenly text-center"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="bg-slate-400 px-80 py-8 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-white text-xl font-semibold drop-shadow-lg">
          Scenario Name
        </h2>
        <input
          type="name"
          placeholder="Give a creative name..."
          className="rounded mt-10 w-64 outline-none p-2 capitalize"
          {...register("name")}
        />
        <p className="text-red-700 py-1 font-bold">{errors.name?.message}</p>
      </div>
      <div className="bg-slate-400 px-80 py-10 rounded-lg shadow-lg flex flex-col my-5 items-center">
        <h2 className="text-white text-xl font-semibold drop-shadow-lg">
          Scenario Description
        </h2>
        <textarea
          type="description"
          placeholder="Describe your scenario..."
          className="rounded mt-10 w-64 h-52 outline-none p-2 capitalize"
          {...register("description")}
        />
        <p className="text-red-700 py-1 font-bold">
          {errors.description?.message}
        </p>
      </div>
      <div className="flex justify-center gap-10">
        <ChallengeBtn name="home" />
        <Submit />
      </div>
    </form>
  );
}
