import React, { useState } from "react";
import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import {
  Home,
  Settings,
  Users,
  Activity,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  BarChart2, // Icon for Statistics
  Globe,      // Icon for Website Management
  Book,       // Icon for Library Management
  MessageCircle, // Icon for Grievances and Feedbacks
  FileText,   // Icon for each submenu
} from "lucide-react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [openMenus, setOpenMenus] = useState({});

  // Toggle menu open/close
  const toggleMenu = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const sidebarItems = [
    {
      label: "Home",
      icon: <Home />,
      href: "/home", // Add href for Home
    },
    {
      label: "Administration Statistics",
      icon: <BarChart2 />,
      href: "/admin/statistics", // Add href for Administration Statistics
      subItems: [
        { label: "Stream Stats", icon: <FileText />, href: "./admin/stream.jsx"  },
        { label: "Student Stats", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\student.jsx" },
        { label: "Admission Stats", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\admission.jsx" },
        { label: "Payment Stats", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\payment.jsx" },
      ],
    },
    {
      label: "Website Management",
      icon: <Globe />,
      href: "/admin/website", // Add href for Website Management
      subItems: [
        { label: "News/Notice", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\news.jsx" },
        { label: "Slider", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\slider.jsx" },
        { label: "Ticker", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\ticker.jsx" },
        { label: "Faculty", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\faculty.jsx" },
      ],
    },
    {
      label: "Library Management",
      icon: <Book />,
      href: "/admin/library", // Add href for Library Management
      subItems: [
        { label: "Total Inventory", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\inventory.jsx" },
        { label: "Total Members", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\members.jsx" },
        { label: "Fine Collection Stats", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\fines.jsx" },
        { label: "Book Issued Stats", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\issued.jsx" },
      ],
    },
    {
      label: "Grievances and Feedbacks",
      icon: <MessageCircle />,
      href: "/admin/grievances", // Add href for Grievances and Feedbacks
      subItems: [
        { label: "Grievance Stats", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\grievances.jsx" },
        { label: "Feedbacks Received", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\feedbacks.jsx" },
        { label: "Inquiries Received", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\inquiries.jsx" },
        { label: "Contact Us Submissions", icon: <FileText />, href: "C:\\project\\CollegeERP\\client\\src\\admin\\contact.jsx" },
      ],
    },
  ];

  // Define theme colors
  const theme = {
    dark: {
      bg: "bg-black",
      text: "text-white",
      hover: "hover:bg-gray-800",
      border: "border-gray-700",
    },
    light: {
      bg: "bg-white",
      text: "text-gray-800",
      hover: "hover:bg-gray-100",
      border: "border-gray-200",
    },
  };

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <nav
      className={`
        ${currentTheme.bg} ${currentTheme.text}
        transition-all duration-300 min-h-screen
        border-r ${currentTheme.border}
        ${isExpanded ? "w-64" : "w-24"}
        flex flex-col justify-between
      `}
    >
      {/* Top section */}
      <div>
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center justify-center w-full">
            <img
              src={isDarkMode ? logo : logo2}
              alt="Logo"
              className="h-20 w-20" // Fixed size for the logo
            />
            {isExpanded && (
              <h2 className="text-xl font-bold ml-2">IIITN</h2>
            )}
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${currentTheme.hover} p-2 rounded-lg ml-auto`}
          >
            {isExpanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <ul className="mt-8">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <div
                onClick={() => item.subItems && toggleMenu(item.label)}
                className={`${currentTheme.hover} cursor-pointer flex items-center p-4 transition-colors duration-200`}
              >
                {item.icon}
                {isExpanded && <span className="ml-4">{item.label}</span>}
              </div>
              {item.subItems && openMenus[item.label] && isExpanded && (
                <ul className="ml-8">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.href}
                        className={`${currentTheme.hover} cursor-pointer flex items-center p-2 transition-colors duration-200`}
                      >
                        {subItem.icon}
                        {isExpanded && <span className="ml-2">{subItem.label}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Theme toggle button at bottom */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`
            ${currentTheme.hover}
            p-2 rounded-lg
            w-full flex items-center justify-center
            transition-colors duration-200
          `}
        >
          {isExpanded ? (
            <div className="flex items-center">
              {isDarkMode ? <Sun className="mr-2" /> : <Moon className="mr-2" />}
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </div>
          ) : isDarkMode ? (
            <Sun />
          ) : (
            <Moon />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
