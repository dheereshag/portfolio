const EmailInput = ({ register, errors }) => (
  <div className="w-full rounded-3xl">
    <input
      className="font-sora text-sm hvr-box-shadow-inset p-4 bg-zinc-800 outline-0 rounded-xl w-full text-zinc-300"
      placeholder="Your Email"
      {...register("email", {
        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        required: true,
      })}
    />
    {errors.email && (
      <span className="text-red-500 font-sora text-sm">*enter valid email</span>
    )}
  </div>
);

export default EmailInput;