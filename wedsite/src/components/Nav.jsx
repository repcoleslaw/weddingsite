import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "RSVP", href:"https://andrew-and-carolyn.wedsites.com/rsvp" },
    { name: "Details", href:"https://andrew-and-carolyn.wedsites.com/" },
    { name: "Q&A", href:"https://andrew-and-carolyn.wedsites.com/#faq" }
  ];

  return (
    <nav className="bg-white fixed max-w-full w-full top-0 left-0 z-50">
      <div className="flex items-center p-4">
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 hover:text-[#65232E] focus:outline-none text-3xl"
        >
          {isOpen ? "x" : "☰"}
        </button>
      </div>

      {/* Dropdown Menu with transition */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 pb-4 space-y-2">
            <a href="/" className="text-gray-800 hover:text-[#65232E] transition-colors">Home</a>
          {menuItems.map((item) => (
          
            <a
              key={item.name}
              href={item.href}
              className="text-gray-800 hover:text-[#65232E] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
        </div>
    </nav>
  );
}