import React, { useState } from "react";

const ReplyButton = ({ ticket, API_URL }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup visibility state
  const [replyText, setReplyText] = useState(""); // Reply text state
  const [isSending, setIsSending] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleReply = async () => {
    if (!replyText.trim()) {
      setError("Reply text cannot be empty!"); // Validate empty input
      return;
    }

    setIsSending(true); // Start loading
    setError(null); // Clear previous errors
    try {
      const response = await fetch(`${API_URL}/send-reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: ticket.sender,
          title: ticket.title,
          reply: replyText,
        }),
      });

      if (response.ok) {
        setReplyText(""); // Clear the input field
        setIsPopupVisible(false); // Hide the popup
      } else {
        throw new Error("Failed to send reply");
      }
    } catch (err) {
      setError(err.message); // Display error in popup
    } finally {
      setIsSending(false); // Stop loading
    }
  };

  return (
    <div className="relative">
      {/* Reply button */}
      <button
        onClick={() => setIsPopupVisible(true)}
        className="px-10 py-2 bg-[#0d3d2c] text-emerald-400 font-bold rounded-md hover:bg-emerald-400 hover:text-gray-900 transition duration-200"
      >
        رد
      </button>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
          <div className="w-full p-6 max-h-[90vh] overflow-y-auto bg-[#292929] rounded-lg shadow-lg md:w-1/2 lg:w-1/3">
            {/* Title */}
            <h2 className="mb-4 text-lg font-bold text-right text-emerald-400">
              إرسال الرد
            </h2>

            {/* Textarea */}
            <textarea
              rows={6}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="اكتب ردك هنا"
              className="w-full p-4 mb-4 text-right text-white bg-[#292929] border border-emerald-500 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            ></textarea>

            {/* Error Message */}
            {error && (
              <p className="mb-4 text-sm text-right text-red-500">{error}</p>
            )}

            {/* Buttons */}
            <div className="flex justify-between space-x-3">
              {/* Cancel Button */}
              <button
                onClick={() => setIsPopupVisible(false)}
                className="w-1/2 px-4 py-2 text-white transition duration-200 bg-gray-600 rounded-lg hover:bg-gray-500"
                disabled={isSending}
              >
                إلغاء
              </button>

              {/* Send Button */}
              <button
                onClick={handleReply}
                disabled={isSending}
                className={`w-1/2 px-4 py-2 text-white bg-emerald-500 rounded-lg shadow ${
                  isSending
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-emerald-400 transition duration-200"
                }`}
              >
                {isSending ? "...جاري الأرسال" : "إرسال"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReplyButton;
