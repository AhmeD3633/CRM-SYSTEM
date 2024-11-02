import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statuses, setStatuses] = useState({});

  const openModal = () => {
    fetchStages(1); // Assuming project ID is 1
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchStages = async (projectId) => {
    try {
      const response = await fetch(
        `http://localhost/project-timeline-backend/getStages.php?Id=${projectId}`
      );
      const data = await response.json();
      // Convert data to an object for quick lookup by stage_id
      const statusMap = data.reduce((acc, stage) => {
        acc[stage.stage_id] = stage.status;
        return acc;
      }, {});
      setStatuses(statusMap);
    } catch (error) {
      console.error("Error fetching stages:", error);
    }
  };

  const staticStages = [
    { id: 1, title: "إدارة الحساب" },
    { id: 2, title: "التصميم الجرافيكي" },
    { id: 3, title: "البرمجة" },
    { id: 4, title: "الانشاء" },
  ];

  return (
    <div>
      <button className="btn bg-emerald-600" onClick={openModal}>
        Show Status
      </button>

      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            <h3 className="text-lg font-black text-right">مراحل المشروع</h3>
            <hr className="mt-2 bg-gray-300" />
            <ul className="mt-4 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              {staticStages.map((stage, index) => (
                <li key={stage.id}>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-5 w-5 ${
                        statuses[stage.id] === "Completed"
                          ? "text-green-500"
                          : statuses[stage.id] === "In Progress"
                          ? "text-yellow-500"
                          : "text-gray-500"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div
                    className={
                      index % 2 === 0
                        ? "timeline-start mb-10 md:text-end"
                        : "timeline-end mb-10"
                    }
                  >
                    <time
                      className={`font-mono italic ${
                        statuses[stage.id] === "Completed"
                          ? "text-green-500"
                          : statuses[stage.id] === "In Progress"
                          ? "text-yellow-500"
                          : "text-gray-500"
                      }`}
                    >
                      {statuses[stage.id] || "Pending"}
                    </time>
                    <div className="text-lg font-bold">{stage.title}</div>
                  </div>
                  <hr
                    className={`mt-2 ${
                      statuses[stage.id] === "Completed"
                        ? "bg-green-500"
                        : statuses[stage.id] === "In Progress"
                        ? "bg-yellow-500"
                        : "bg-gray-500"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-backdrop" onClick={closeModal}>
            <button onClick={closeModal}>Close</button>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default App;
