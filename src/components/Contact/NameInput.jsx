const NameInput = ({ register, errors }) => (
  <div className="w-full rounded-3xl">
    <input
      className="font-sora text-sm hvr-box-shadow-inset p-4 bg-zinc-800 outline-0 rounded-xl w-full text-zinc-300"
      placeholder="Your Name"
      {...register("name", { required: true })}
    />
    {errors.name && (
      <span className="text-red-500 font-sora text-sm">*name is required</span>
    )}
  </div>
);

export default NameInput;
