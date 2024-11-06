import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <form className="flex flex-col p-4 md:p-6 rounded-xl bg-[#9538e2]/30 backdrop-blur-xl md:w-8/12 lg:w-6/12 mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-purple-600">
          Sign Up
        </h1>
        <input
          className="py-1.5 md:py-2 pl-4 mt-4 md:mt-5 focus:border-[#9538e2] outline-none border-2 rounded-md text-sm md:text-base"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          className="py-1.5 md:py-2 pl-4 mt-4 md:mt-5 focus:border-[#9538e2] outline-none border-2 rounded-md text-sm md:text-base"
          type="text"
          name="email"
          placeholder="Your email"
        />
        <input
          className="py-1.5 md:py-2 pl-4 mt-4 md:mt-5 focus:border-[#9538e2] outline-none border-2 rounded-md text-sm md:text-base"
          type="text"
          name="password"
          placeholder="Your password"
        />
        <input
          className="py-1.5 md:py-2 pl-4 mt-4 md:mt-5 border-[#9538e2] outline-none border-2 rounded-md bg-white hover:bg-base-300 text-sm md:text-base font-bold text-purple-600"
          type="submit"
          name="Login"
        />
        <p className="flex flex-row gap-2 mt-6 justify-center items-center text-black text-sm md:text-base">
          <span>Already have an account?</span>
          <Link to="/users" className="underline text-purple-600 font-bold">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
