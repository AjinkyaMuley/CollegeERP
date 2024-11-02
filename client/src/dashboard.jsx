import React from 'react';

const DashboardCard = ({ title, items, color }) => {
  const colorClasses = {
    red: 'bg-red-500',
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    yellow: 'bg-yellow-500'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className={`${colorClasses[color]} text-white p-3 rounded-t-lg`}>
        {title}
      </div>
      <div className="p-4">
        {items && Object.entries(items).map(([key, value]) => (
          <div key={key} className="flex items-center my-2">
            <span className="text-gray-600">• {key}:</span>
            <span className="ml-2 font-medium">{value}</span>
          </div>
        ))}
        <button className="mt-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
          Manage
        </button>
      </div>
    </div>
  );
};

const SectionHeader = ({ title }) => (
  <div className="bg-gray-700 text-white p-3 rounded-lg mb-6">
    <h2 className="text-lg font-semibold flex items-center">
      <span className="mr-2">▶</span> {title}
    </h2>
  </div>
);

const Dashboard = () => {
  const adminStats = {
    streams: {
      'Main Streams': 4,
      'Streams': 14,
      'Sessions': 20
    },
    students: {
      'Total Registered': 4443,
      'Verified Accounts': 4443,
      'Unverified Accounts': 0
    },
    admissions: {
      'Total Applications': 0,
      'Approved': 0,
      'Unapproved': 0,
      'Today': 0
    },
    payments: {
      'Total Records': 0,
      'Paid Records': 0,
      'Unpaid Records': 0,
      'Today': '0/0/0'
    }
  };

  // Updated library stats with dummy data
  const libraryStats = {
    inventory: {
      'Total Books': 15420,
      'Available Books': 14238,
      'Issued Books': 1182,
      'Categories': 42
    },
    members: {
      'Total Members': 4892,
      'Student Members': 4650,
      'Faculty Members': 242,
      'Active Members': 3876
    },
    fineCollection: {
      'Total Fine': '₹28,450',
      'Collected': '₹21,675',
      'Pending': '₹6,775',
      'This Month': '₹4,225'
    },
    bookIssued: {
      'Total Issues': 1182,
      'Current Month': 145,
      'Overdue Books': 73,
      'Returns Today': 12
    }
  };

  const grievanceStats = {
    grievance: {
      'Total Posted': 26,
      'Total Open': 26,
      'Total Closed': 0
    },
    feedback: {
      'Total Feedbacks': 0
    },
    inquiries: {
      'Total Inquiries': 257
    },
    submissions: {
      'Total Submissions': 147
    }
  };

  const websiteStats = {
    news: {
      'Notices': 16,
      'Tender': 0,
      'Advertisement': 0
    },
    slider: {
      'Total Slides': 5,
      'Published': 5,
      'UnPublished': 0
    },
    ticker: {
      'Total Slides': 4,
      'Published': 4,
      'UnPublished': 0
    },
    faculty: {
      'Departments': 8,
      'Total Faculties': 0,
      'Active': 0,
      'Disabled': 0
    }
  };

  return (
    <div className="flex-grow bg-gray-100 p-8 overflow-auto">
      {/* Top Header Section for Administration */}
      <div className="bg-gray-700 text-white p-4 rounded-lg mb-8">
        <h1 className="text-xl font-semibold">
          Administration + Student Admission Management (in 2024)
        </h1>
      </div>

      {/* Administration Stats Section */}
      <SectionHeader title="Administration Statistics" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <DashboardCard title="Stream Stats" color="red" items={adminStats.streams} link="./stream.js" />
        <DashboardCard title="Student Stats" color="blue" items={adminStats.students} />
        <DashboardCard title="Admission Stats" color="green" items={adminStats.admissions} />
        <DashboardCard title="Payment Stats" color="yellow" items={adminStats.payments} />
      </div>

      {/* Website Management Section */}
      <SectionHeader title="Website Management" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="News/Notice" color="red" items={websiteStats.news} />
        <DashboardCard title="Slider" color="blue" items={websiteStats.slider} />
        <DashboardCard title="Ticker" color="green" items={websiteStats.ticker} />
        <DashboardCard title="Faculty" color="yellow" items={websiteStats.faculty} />
      </div>

      {/* Library Management Section */}
      <SectionHeader title="Library Management" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Total Inventory" color="red" items={libraryStats.inventory} />
        <DashboardCard title="Total Members" color="blue" items={libraryStats.members} />
        <DashboardCard title="Fine Collection Stats" color="green" items={libraryStats.fineCollection} />
        <DashboardCard title="Book Issued Stats" color="yellow" items={libraryStats.bookIssued} />
      </div>

      {/* Grievances Section */}
      <SectionHeader title="Grievances and Feedbacks (in 2024)" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Grievance Stats" color="red" items={grievanceStats.grievance} />
        <DashboardCard title="Feedbacks Received" color="blue" items={grievanceStats.feedback} />
        <DashboardCard title="Inquiries Received" color="green" items={grievanceStats.inquiries} />
        <DashboardCard title="Contact Us Submissions" color="yellow" items={grievanceStats.submissions} />
      </div>
    </div>
  );
};

export default Dashboard;