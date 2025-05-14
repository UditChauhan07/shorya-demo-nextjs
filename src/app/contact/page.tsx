"use client";

export default function Contact() {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
        {/* Left side: Contact details */}
        <div className="bg-gray-900 text-white w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Contact GameZone</h2>
          <p className="mb-6 text-gray-300">
            Have questions or feedback? Reach out to us anytime!
          </p>
          <ul className="space-y-4 text-gray-300">
            <li>
              <span className="font-semibold text-white">📞 Phone:</span> +1
              (800) 123-4567
            </li>
            <li>
              <span className="font-semibold text-white">✉️ Email:</span>{" "}
              support@gamezone.com
            </li>
            <li>
              <span className="font-semibold text-white">📍 Address:</span> 123
              Gaming St, Virtual City, Earth 40400
            </li>
          </ul>
        </div>

        {/* Right side: Form */}
        <div className="w-full md:w-1/2 p-8">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Send Us a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your message here..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
