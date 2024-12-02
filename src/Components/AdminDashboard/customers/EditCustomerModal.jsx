import { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

function EditCustomerModal({ customer, onSave }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editCustomer, setEditCustomer] = useState({
    name: customer.name,
    website: customer.website,
    email: customer.email,
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const fileData = new FormData();
      fileData.append("file", selectedFile);
      console.log("File ready for upload:", selectedFile);

      setSelectedFile(null);
      alert("File uploaded successfully.");
    }

    onSave(editCustomer);
    toggleModal();
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center">
      <FaEdit
        onClick={toggleModal}
        className="text-gray-500 cursor-pointer hover:text-blue-500"
      />

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
          <div className="w-full p-4 max-h-[90vh] overflow-y-auto bg-[#292929] rounded-lg shadow-lg md:w-1/2 lg:w-1/3">
            <h2 className="mb-1 text-lg font-bold text-right text-white">
              تعديل علي بيانات العميل او اضافة عقد
            </h2>
            <h3 className="mb-1 font-medium text-right text-gray-400 text-md">
              يرجى تعديل البيانات أدناه
            </h3>

            <form className="space-y-2" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-sm font-medium text-right text-white">
                  اسم العميل
                </label>
                <input
                  type="text"
                  value={editCustomer.name}
                  onChange={(e) =>
                    setEditCustomer({ ...editCustomer, name: e.target.value })
                  }
                  placeholder="Name"
                  className="w-full p-2 bg-[#292929] text-white border text-right border-gray-500 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-right text-white">
                  الموقع الالكتروني
                </label>
                <input
                  type="text"
                  value={editCustomer.website}
                  onChange={(e) =>
                    setEditCustomer({
                      ...editCustomer,
                      website: e.target.value,
                    })
                  }
                  placeholder="Website"
                  className="w-full p-2 bg-[#292929] text-right text-white border border-gray-500 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-right text-white">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={editCustomer.email}
                  onChange={(e) =>
                    setEditCustomer({ ...editCustomer, email: e.target.value })
                  }
                  placeholder="Email"
                  className="w-full p-2 bg-[#292929] text-right text-white border border-gray-500 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-right text-white">
                  العنوان
                </label>
                <input
                  type="text"
                  placeholder="العنوان"
                  className="w-full p-2 bg-[#292929] text-right text-white border border-gray-500 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-right text-white">
                  الوصف
                </label>
                <textarea
                  placeholder="الوصف"
                  className="w-full p-2 bg-[#292929] text-right text-white border border-gray-500 rounded-md"
                ></textarea>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-right text-white">
                  اضافة عقد
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full p-2 bg-[#292929] text-right text-white border border-gray-500 rounded-md"
                />
              </div>

              <div className="flex justify-between mt-1">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="w-1/2 text-whitebtn btn-ghost"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="w-1/2 text-white bg-green-700 btn"
                >
                  تأكيد
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
// Define prop types for props validation
EditCustomerModal.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    website: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  onSave: PropTypes,
};

export default EditCustomerModal;
