import { useEffect, useState } from "react";

const fetchTimelineData = async () => {
  return [
    {
      id: 1,
      title: "أدارة الحساب",
      description: "وصف لإدارة الحساب",
      status: "completed",
    },
    {
      id: 2,
      title: "التصميم الجرافيكي",
      description: "وصف للتصميم الجرافيكي",
      status: "incomplete",
    },
    {
      id: 3,
      title: "البرمجة",
      description: "وصف البرمجة",
      status: "incomplete",
    },
    {
      id: 4,
      title: "الإنشاء",
      description: "عملية الإنشاء",
      status: "incomplete",
    },
    {
      id: 5,
      title: "التسليم",
      description: "التسليم النهائي",
      status: "incomplete",
    },
  ];
};

const Timeline = () => {
  const [timelineItems, setTimelineItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTimelineData();
      setTimelineItems(data);
    };
    getData();
  }, []);

  // Function to determine the status label
  const getStatusLabel = (index, status) => {
    if (status === "completed") return "Completed";
    if (status === "inprogress") return "In Progress";
    return "Pending";
  };

  // Function to dynamically set "inprogress" status for the next item after the last "completed"
  const determineStatuses = () => {
    const itemsWithStatus = [...timelineItems];
    let foundLastCompleted = false;

    return itemsWithStatus.map((item) => {
      if (item.status === "completed") {
        foundLastCompleted = true;
        return item;
      }
      if (foundLastCompleted && item.status === "incomplete") {
        foundLastCompleted = false;
        return { ...item, status: "inprogress" };
      }
      return item;
    });
  };

  const itemsWithUpdatedStatuses = determineStatuses();

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-[70%] ml-20">
      {itemsWithUpdatedStatuses.map((item, index) => (
        <li key={item.id}>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 ${
                item.status === "completed"
                  ? "text-primary"
                  : item.status === "inprogress"
                  ? "text-yellow-500"
                  : "text-gray-400"
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
            className={`mb-10 ${
              index % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"
            }`}
          >
            <time className="font-mono italic">
              {getStatusLabel(index, item.status)}
            </time>
            <div className="text-lg font-black">{item.title}</div>
            <p>{item.description}</p>
          </div>
          <hr
            className={`${
              item.status === "completed"
                ? "bg-primary"
                : item.status === "inprogress"
                ? "bg-yellow-500"
                : "bg-gray-400"
            }`}
          />
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
