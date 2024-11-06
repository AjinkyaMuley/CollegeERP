import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardCard = ({ title, items, color, link }) => {
  const navigate = useNavigate();
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
        <button
          onClick={() => navigate(link)}
          className="mt-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
        >
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

  const [admissionStats,setAdmissionStats]=useState(
    {
      total_applications: 0,
      approved: 0,
      pending: 0,
    }
  )

  const [studentStats, setStudentStats] = useState({
    totalStudents: 0,
    activeStudents: 0,
    inactiveStudents: 0,
  });

  const [streamStats, setStreamStats] = useState({
    main_streams: 0,
    total_streams: 0,
    total_sessions: 0,
  });

  const [paymentStats, setPaymentStats] = useState({
    totalEntries: 0,
    paidEntries: 0,
    unpaidEntries: 0,
  });

  const [newsStats, setNewsStats] = useState({
    total_notices: 0,
    total_tenders: 0,
    total_advertisements: 0,
  });

  const [facultyStats, setFacultyStats] = useState({
    totalDepartments: 0,
    departments: [],
    totalFaculties: 0,
    activeFaculties: 0,
    disabledFaculties: 0,
  });

  useEffect(() => {

    const fetchAdmissionStats = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/admissions/get-all-stats');
        setAdmissionStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    const fetchStudentStats = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/student/get-student-stats');
        const { totalStudents, activeStudents, inactiveStudents } = response.data.stats;
        setStudentStats({ totalStudents, activeStudents, inactiveStudents });

      } catch (error) {
        console.error('Error fetching student stats:', error);
      }
    };

    const fetchStreamStats = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/stream/get-stream-stats');
        const [{ main_streams, total_streams, total_sessions }] = response.data; // Assuming response.data is the array
        setStreamStats({ main_streams, total_streams, total_sessions });
      } catch (error) {
        console.error('Error fetching stream stats:', error);
      }
    };

    const fetchPaymentStats = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/payment/get-payment-stats');
        const { total_entries, paid_entries, unpaid_entries } = response.data;
      setPaymentStats({
        totalEntries: total_entries,
        paidEntries: paid_entries,
        unpaidEntries: unpaid_entries,
      });
      } catch (error) {
        console.error('Error fetching payment stats:', error);
      }
    };

    const fetchNewsStats = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/news/get-news-stats'); // replace with your endpoint
        const { total_notices, total_tenders, total_advertisements } = response.data;

        setNewsStats({
          total_notices, total_tenders, total_advertisements
        })
     } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    const fetchFacultyStats = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/faculty/get-faculty-stats');
        const { totalDepartments, departments, totalFaculties, activeFaculties, disabledFaculties } = response.data;

        setFacultyStats({
          totalDepartments,
          departments,
          totalFaculties,
          activeFaculties,
          disabledFaculties,
        });
      } catch (error) {
        console.error('Error fetching faculty stats:', error);
      }
    };

    fetchFacultyStats();
    fetchNewsStats();
    fetchAdmissionStats();
    fetchStudentStats();
    fetchStreamStats();
    fetchPaymentStats();

  }, []); 

  const adminStats = {
    streams: {
      'Main Streams': streamStats.main_streams,
      'Streams': streamStats.total_streams,
      'Sessions': streamStats.total_sessions
    },
    students: {
      'Total Registered': studentStats.totalStudents,
      'Verified Accounts': studentStats.activeStudents,
      'Unverified Accounts': studentStats.inactiveStudents
    },
    admissions: {
      'Total Applications': admissionStats.total_applications,
      'Approved': admissionStats.approved,
      'Unapproved': admissionStats.pending,
    },
    payments: {
      'Total Records': paymentStats.totalEntries,
      'Paid Records': paymentStats.paidEntries,
      'Unpaid Records': paymentStats.unpaidEntries,
    }
  };

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
      'Notices': newsStats.total_notices,
      'Tender': newsStats.total_tenders,
      'Advertisement': newsStats.total_advertisements
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
      'Departments': facultyStats.totalDepartments,
      'Total Faculties': facultyStats.totalFaculties,
      'Active': facultyStats.activeFaculties,
      'Disabled': facultyStats.disabledFaculties
    }
  };

  return (
    <div className="flex-grow bg-gray-100 p-8 overflow-auto">

      <div className="bg-gray-700 text-white p-4 rounded-lg mb-8">
        <h1 className="text-xl font-semibold">
          Administration + Student Admission Management (in 2024)
        </h1>
      </div>


      <SectionHeader title="Administration Statistics" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Stream Stats" color="red" items={adminStats.streams} link="/admin/stream" />
        <DashboardCard title="Student Stats" color="blue" items={adminStats.students} link="/admin/student" />
        <DashboardCard title="Admission Stats" color="green" items={adminStats.admissions} link="/admin/admission" />
        <DashboardCard title="Payment Stats" color="yellow" items={adminStats.payments} link="/admin/payment" />
      </div>


      <SectionHeader title="Website Management" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="News/Notice" color="red" items={websiteStats.news} link="/website/news" />
        <DashboardCard title="Slider" color="blue" items={websiteStats.slider} link="/website/slider" />
        <DashboardCard title="Ticker" color="green" items={websiteStats.ticker} link="/website/ticker" />
        <DashboardCard title="Faculty" color="yellow" items={websiteStats.faculty} link="/website/faculty" />
      </div>


      <SectionHeader title="Library Management" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Total Inventory" color="red" items={libraryStats.inventory} link="/library/inventory" />
        <DashboardCard title="Total Members" color="blue" items={libraryStats.members} link="/library/member" />
        <DashboardCard title="Fine Collection Stats" color="green" items={libraryStats.fineCollection} link="/library/fine" />
        <DashboardCard title="Book Issued Stats" color="yellow" items={libraryStats.bookIssued} link="/library/bookissue" />
      </div>


      <SectionHeader title="Grievances and Feedbacks (in 2024)" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Grievance Stats" color="red" items={grievanceStats.grievance} link="/feedback/grievance" />
        <DashboardCard title="Feedbacks Received" color="blue" items={grievanceStats.feedback} link="/feedback/feedback" />
        <DashboardCard title="Inquiries Received" color="green" items={grievanceStats.inquiries} link="/feedback/inquiries" />
        <DashboardCard title="Contact Us Submissions" color="yellow" items={grievanceStats.submissions} link="/feedback/contact" />
      </div>
    </div>
  );
};

export default Dashboard;
