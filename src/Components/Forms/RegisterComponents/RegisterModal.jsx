import React from "react";

const RegisterModal = () => {
  return (
    <div>
      <button
        className="btn bg-[#0A8F0A] hover:bg-[#0F430F]  w-full text-white font-bold border-none rounded-md focus:outline-none focus:shadow-outline transition duration-300"
        type="submit'"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        إنشاء حساب
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#292929]">
          <h3 className="text-lg font-bold">!مرحبًا بك</h3>
          <p className="py-4">تم إنشاء حسابك بنجاح</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-[#292929] transition duration-300 hover:bg-[#292929]">
                إغلاق
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default RegisterModal;
