function ProjectDetails({ title, icon, content, index }) {
  const bgColors = ["bg-gray-500", "bg-yellow-600", "bg-green-500"];
  const bgColor = bgColors[index % bgColors.length];
  return (
    <div className="flex flex-col items-end gap-4 p-10 bg-black rounded-2xl">
      <h3 className="p-4 bg-green-600 rounded-full ">{icon}</h3>
      <h4 className="text-xl font-bold">{title} </h4>
      <p className={`text-white p-2 rounded ${bgColor}`}>{content}</p>
    </div>
  );
}

export default ProjectDetails;
