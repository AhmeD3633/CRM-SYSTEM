import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import ReplyButton from "./ReplyButton";

const AdminTicket = () => {
  const [tickets, setTickets] = useState([
    {
      sender: "ساره داود",
      title: "مشكلة في مرحلة التصميم الجرافيكي",
      notes: `أعجبني التصميم بشكل عام، ولكن عندي بعض الملاحظات الصغيرة للتعديل. بالنسبة للألوان، أتمنى لو تم تخفيف اللون الأزرق قليلاً ليكون مريحاً للعين ويتناسب أكثر مع هوية علامتنا.`,
    },
    {
      sender: "اسم العميل الثاني",
      title: "طلب تعديل الشعار",
      notes: `أتمنى تغيير الخط المستخدم في الشعار ليكون أكثر حداثة ووضوحاً، وتقليل الحجم قليلاً.`,
    },
    {
      sender: "اسم العميل الثاني",
      title: "طلب تعديل الشعار",
      notes: `أتمنى تغيير الخط المستخدم في الشعار ليكون أكثر حداثة ووضوحاً، وتقليل الحجم قليلاً.`,
    },
  ]);
  const API_URL = "https://example.com/api"; // Replace with your actual API URL

  return (
    <div className="w-full max-w-[10000px] mx-auto">
      <div className="h-full space-y-4">
        <h1 className="font-bold text-[24px] my-5 pr-3 text-right text-white">
          الملاحظات
        </h1>
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="py-2 mx-3 bg-black border border-green-600 shadow-md rounded-xl"
          >
            <div className="px-4 text-right">
              <div className="flex items-center justify-between mb-2">
                <DeleteButton
                  tickets={tickets}
                  setTickets={setTickets}
                  ticketIndex={index}
                />
                <h2 className="mb-1 text-lg font-bold text-white">ملاحظة</h2>
              </div>
              <hr className="mb-2 border-0 h-[0.5px] bg-green-500" />
              <div className="mb-4">
                <span className="font-bold text-white">مرسل من:</span>{" "}
                {ticket.sender}
              </div>
              <div className="mb-4">
                <span className="font-bold text-white">العنوان:</span>{" "}
                {ticket.title}
              </div>
              <div className="whitespace-pre-wrap eading-relaxed">
                <p className="mb-2">
                  <span className="font-bold text-white">ملاحظة:</span>{" "}
                  {ticket.notes}
                </p>
              </div>
              <ReplyButton ticket={ticket} API_URL={API_URL} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTicket;
