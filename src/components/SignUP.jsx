import PasswordInput from "./elmements/PasswordInput";

const SignIN = () => {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative hidden lg:flex  h-32 items-end bg-gray-900 lg:col-span-5 lg:h-[98%] xl:col-span-6 ml-2 mt-2 mb-2 pr-2 rounded-3xl">
          <img
            alt=""
            src="./src/assets/SignINImage.png"
            className="absolute inset-0 h-full w-full object-cover opacity-80 rounded-3xl"
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl w-[70%]">
            <form action="#" className="grid grid-cols-1 gap-1">
              <div className="relative w-full h-full  ml-auto pb-8 pt-8 rounded-lg">
                <img
                  alt=""
                  src="./src/assets/logo.png"
                  className="absolute top-4 right-0 w-32"
                />
              </div>

              <div className="col-span-1">
                <h1 className="text-4xl text-right pb-4 font-bold">
                  سجل الدخول
                </h1>
                <h2 className="text-lg text-right  text-slate-500 mb-2">
                  أدخل البريد الالكتروني وكلمة المرور
                </h2>
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700 text-right"
                >
                  البريد الالكتروني
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full h-12  rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-sm text-right p-3"
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 text-right"
                >
                  كلمة المرور
                </label>
                <PasswordInput />
              </div>
              <div className="col-span-1">
                <button
                  style={{ backgroundColor: "#00FFA9" }}
                  type="submit"
                  className="mt-6 w-full h-12 rounded-md px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-blue-500"
                >
                  تسجيل الدخول
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              ليس لديك حساب؟{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                تسجيل
              </a>
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignIN;
