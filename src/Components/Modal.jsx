import { useState } from "react";
import UserTimeLineDashboard from "./UserTimeLineDashboard";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="btn bg-emerald-600" onClick={openModal}>
        Show Status
      </button>

      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Project Progress!</h3>
            <UserTimeLineDashboard />
          </div>
          <div className="modal-backdrop" onClick={closeModal}>
            <button onClick={closeModal}>close</button>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default App;
