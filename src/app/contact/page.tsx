// pages/contact.tsx
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
     <main className="bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500 min-h-screen py-12">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-extrabold text-white">Contact Me</h2>
          <p className="mt-4 text-lg text-gray-100 max-w-lg mx-auto">
            For all enquiries,please email us using the form below. </p>
            
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-teal-500"><FaPhone/>Phone</h3>
              <p className="mt-2 text-lg text-gray-700">+9232-1281-5495</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl 
               font-semibold text-teal-500"><MdEmail />Email</h3>
              <Link href={"farahalmas080@gmail.com"} className="mt-2 text-lg text-gray-700">Contact me</Link>
            </div>

            <div className= "bg-white p-6  rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-teal-500"><FaFacebookSquare />FaceBook</h3>
            <Link href={"https://www.facebook.com/fariya.pari.904?mibextid=ZbWKwL"} className={"mt-2 text-lg text-gray-700"}>Veiw My FaceBook</Link>
            </div>

            <div className="bg-white p-6 rounded-lg  shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-teal-500">LinkedIn</h3>
              <Link
                href="https://www.linkedin.com/in/farah-almas-90a77a2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-lg text-blue-500 hover:text-blue-600"
              >
                View My LinkedIn Profile
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 flex justify-center">
            <form className="max-w-2xl w-full space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                rows={6}
              />
              <button
                type="submit"
                className="w-full py-3 text-lg font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
         
        </div>
       </main>
      
     </div>
  );
};

export default Contact;
