import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="flex flex-col gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-[#9538e2]/20 backdrop-blur-xl md:w-8/12 lg:w-6/12 mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#9538e2]">
          Log in
        </h1>
        <input
          className="py-1.5 md:py-2 pl-4 rounded-md text-[#9538e2]"
          type="text"
          name="name"
          placeholder="Your email"
        />
        <input
          className="py-1.5 md:py-2 pl-4 rounded-md text-[#9538e2]"
          type="text"
          name="name"
          placeholder="Your password"
        />
        <a className="underline text-end font-medium  cursor-pointer">
          Forget Password
        </a>
        <input
          className="py-1.5 md:py-2 pl-4 rounded-md text-center text-[#9538e2] bg-white hover:bg-base-300 font-bold cursor-pointer"
          type="submit"
          name="Login"
        />
        <p className="flex flex-row justify-center items-center gap-2 text-black">
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
