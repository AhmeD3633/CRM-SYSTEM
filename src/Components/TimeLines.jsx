import { useEffect, useState } from "react";
import axios from "axios";

const Timeline = ({ userId, projectId }) => {
  const [stages, setStages] = useState([]);

  // Fetch project stages on component mount
  useEffect(() => {
    const fetchStages = async () => {
      try {
        const response = await axios.get(
          `/api/users/${userId}/projects/${projectId}/stages`
        );
        setStages(response.data);
      } catch (error) {
        console.error("Error fetching project stages:", error);
      }
    };

    fetchStages();
  }, [userId, projectId]);

  // Determine the color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-primary"; // Completed - use primary color
      case "inprogress":
        return "text-warning"; // In progress - warning color
      default:
        return "text-gray-500"; // Pending - gray color
    }
  };

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-[70%] ml-20">
      {stages.map((stage, index) => (
        <li key={stage.stage_id}>
          <hr className={getStatusColor(stage.status)} />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 ${getStatusColor(stage.status)}`}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`mb-10 ${
              index % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"
            }`}
          >
            <time className="font-mono italic">
              {stage.status === "completed"
                ? "Completed"
                : stage.status === "inprogress"
                ? "In Progress"
                : "Pending"}
            </time>
            <div className="text-lg font-black">{stage.stage_name}</div>
            <p>{stage.description}</p>
          </div>
          <hr className={getStatusColor(stage.status)} />
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
