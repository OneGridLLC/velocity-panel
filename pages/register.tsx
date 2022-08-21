import type { NextPage } from "next";
import Head from "next/head";

const DOMAIN = "skribe.dev";

const Register: NextPage = () => {
  return (
    <div className="flex flex-col lg:flex-row p-[6vw] bg-zinc-900 h-screen">
      <Head>
        <meta property="og:title" content="Velocity Hosting" />
        <meta
          property="og:description"
          content="Digitalocean level experience, on a lowendtalk level budget!"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://vlcty.host" />
        <meta name="theme-color" content="#3b82f6" />
      </Head>

      <div className="lg:w-1/3">
        <h1 className="text-[16vw] lg:text-[4vw]">
          <span className="font-bold text-white text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
            Velocity Host
          </span>
        </h1>
        <p className="text-[4vw] lg:text-[1vw] text-white font-bold">
          the developers hosting provider
        </p>
        <form className="mt-24">
          <h1 className="text-2xl text-white font-bold mb-2">
            Login Information
          </h1>
          {/* Email input */}
          <div className="mb-2">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-white bg-zinc-800 bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-zinc-700 focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
            />
          </div>
          {/* Password input */}
          <div className="mb-2">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-white bg-zinc-800 bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-zinc-700 focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>
          {/* Password Confirm input */}
          <div className="mb-2">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-white bg-zinc-800 bg-clip-padding  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-zinc-700 focus:border-blue-600 focus:outline-none"
              placeholder="Password Confirm"
            />
          </div>
          <h1 className="text-2xl text-white font-bold mb-2">
            Identification Information
          </h1>
          {/* Full Name Input */}
          <div className="mb-6 flex flex-row gap-12">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-white bg-zinc-800 bg-clip-padding  w-1/2 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-zinc-700 focus:border-blue-600 focus:outline-none"
              placeholder="First name"
            />
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-white bg-zinc-800 bg-clip-padding  w-1/2 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-zinc-700 focus:border-blue-600 focus:outline-none"
              placeholder="Last Name"
            />
          </div>

          <div className="mb-12 flex flex-col gap-2">
            <h1 className="text-2xl text-white font-bold">
              Address Information
            </h1>
            <div className="flex flex-row gap-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-white bg-zinc-800 bg-clip-padding  w-2/3 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-zinc-700 focus:border-blue-600 focus:outline-none"
                placeholder="Address"
              />
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-white bg-zinc-800 bg-clip-padding  w-1/3 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-zinc-700 focus:border-blue-600 focus:outline-none"
                placeholder="Zip Code"
              />
            </div>

            <div className="flex flex-row gap-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-white bg-zinc-800 bg-clip-padding  w-1/3 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-zinc-700 focus:border-blue-600 focus:outline-none"
                placeholder="City"
              />
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-white bg-zinc-800 bg-clip-padding  w-1/3 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-zinc-700 focus:border-blue-600 focus:outline-none"
                placeholder="State"
              />
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-white bg-zinc-800 bg-clip-padding  w-1/3 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-zinc-700 focus:border-blue-600 focus:outline-none"
                placeholder="Country"
              />
            </div>
          </div>

          {/* Beta Code input */}
          <div className="mb-6 flex flex-row gap-12">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-white bg-zinc-800 bg-clip-padding  w-32 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-zinc-700 focus:border-blue-600 focus:outline-none"
              placeholder="Beta Code"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck3"
              />
              <label
                className="form-check-label inline-block text-gray-300"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            <a
              href="#!"
              className="text-blue-600  hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
            >
              Forgot password?
            </a>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="inline-block px-7 py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
