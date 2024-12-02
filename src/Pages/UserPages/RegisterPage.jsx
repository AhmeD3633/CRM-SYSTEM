import  { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import RegisterModal from "../../Components/Forms/User/RegisterModal";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    user_username: "",
    user_email: "",
    user_address: "",
    user_url: "",
    user_password: "",
  });

  const formFields = [
    {
      id: "user_username",
      label: "اسم المستخدم",
      type: "text",
      placeholder: "اسم المستخدم",
    },
    {
      id: "user_email",
      label: "البريد الإلكتروني",
      type: "email",
      placeholder: "البريد الإلكتروني",
    },
    {
      id: "user_address",
      label: "العنوان",
      type: "text",
      placeholder: "العنوان",
    },
    {
      id: "user_url",
      label: "موقعك الحالي",
      type: "text",
      placeholder: "شارك موقعك الحالي",
    },
    {
      id: "user_password",
      label: "الرقم السري",
      type: "password",
      placeholder: "********",
    },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost/CRM/Registration.php", formData)
      .then((response) => {
        setFormData({
          user_username: "",
          user_email: "",
          user_address: "",
          user_url: "",
          user_password: "",
        });
      })
      .catch((error) => {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      });
  };

  return (
    <section className="w-full pl-[64px] pr-[64px] bg-[#292929]">
      <div className="w-full">
        <div className="text-right">
          <h1 className="text-[32px] text-[white] font-bold">إنشاء حساب</h1>
          <p className="text-[18px] text-[#969696]">
            إنشاء حساب لمتابعة أعمالك
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-[#292929] w-full rounded space-y-2 pt-6 pb-8 mb-4"
        >
          {formFields.map((field) => (
            <div className="relative mb-3" key={field.id}>
              <label
                className="block text-[#969696] text-sm font-bold mb-2 text-right"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              <input
                className="text-right border rounded-[10px] w-full py-2 px-3 text-[white] focus:outline-none focus:ring-1 focus:ring-[#0A8F0A] bg-[#292929]"
                id={field.id}
                type={
                  field.id === "user_password"
                    ? showPassword
                      ? "text"
                      : "password"
                    : field.type
                }
                placeholder={field.placeholder}
                value={formData[field.id]}
                onChange={handleChange}
              />
              {field.id === "user_password" && (
                <span
                  className="w-[fit-content] absolute right-3 top-[38px] left-3 text-[gray] cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiFillEyeInvisible size={20} />
                  ) : (
                    <AiFillEye size={20} />
                  )}
                </span>
              )}
            </div>
          ))}
          <div>
            <button
              className="mt-2 w-full text-white font-bold rounded-[10px] focus:outline-none focus:shadow-outline transition duration-300 border-[none]"
              type="submit"
            >
              <RegisterModal />
            </button>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-1 border-b border-gray-300"></div>
            <span className="mx-4 text-gray-600">or</span>
            <div className="flex-1 border-b border-gray-300"></div>
          </div>

          <div className="text-center flex items-center justify-center gap-[8px] text-[white] text-[12px]">
            <a className="text-[#367AFF] underline" href="/user">
              سجل دخول
            </a>
            <p>لديك بالفعل حساب؟</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
