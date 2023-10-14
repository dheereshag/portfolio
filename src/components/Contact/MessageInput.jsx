const MessageInput = ({ register, errors }) => (
  <div>
    <textarea
      className="font-sora text-sm hvr-box-shadow-inset p-4 bg-zinc-800 outline-0 rounded-2xl w-full text-zinc-300"
      placeholder="Your Message"
      rows={8}
      {...register("message", { required: true })}
    />
    {errors.message && (
      <span className="text-red-500 font-sora text-sm">
        *message is required
      </span>
    )}
  </div>
);

export default MessageInput;