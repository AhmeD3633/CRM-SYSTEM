import React from "react";

const DeleteButton = ({ tickets, setTickets, ticketIndex }) => {
  const handleDelete = () => {
    setTickets(tickets.filter((_, i) => i !== ticketIndex));
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-4 py-2  rounded shadow hover:bg-red-800 transition"
    >
      حذف
    </button>
  );
};

export default DeleteButton;
