import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="flex flex-col p-4 md:p-6 rounded-xl bg-[#9538e2]/20 backdrop-blur-xl md:w-8/12 lg:w-6/12 mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#9538e2]">
          Log in
        </h1>
        <input
          className="py-1.5 md:py-2 pl-4 mt-4 md:mt-5  focus:border-[#9538e2] outline-none border-2 rounded-md text-[#9538e2] text-sm md:text-base"
          type="text"
          name="name"
          placeholder="Your email"
        />
        <input
          className="py-1.5 md:py-2 pl-4 mt-4 md:mt-5  focus:border-[#9538e2] outline-none border-2 rounded-md text-[#9538e2] text-sm md:text-base"
          type="text"
          name="name"
          placeholder="Your password"
        />
        <a className="underline text-end font-medium mt-2 cursor-pointer text-sm md:text-base">
          Forget Password
        </a>
        <input
          className="py-1.5 md:py-2 pl-4 mt-4 md:mt-5 rounded-md border-2 border-[#9538e2] text-center text-sm md:text-base text-[#9538e2] bg-white hover:bg-base-300 font-bold cursor-pointer"
          type="submit"
          name="Login"
        />
        <p className="flex flex-row justify-center items-center gap-2 text-black text-sm md:text-base mt-6">
          <span>Don`t have an account?</span>
          <Link
            to="/users/signUp"
            className="underline text-purple-600 font-bold"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
