import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Search, MoreVertical } from 'lucide-react';

const StudentsPage = () => {
  const stats = {
    totalRegistered: 4443,
    verifiedAccounts: 4443,
    unverifiedAccounts: 0
  };

  const studentData = [
    { id: 1, name: "John Doe", email: "john@example.com", enrollmentNo: "2024001", status: "Active", joinDate: "2024-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", enrollmentNo: "2024002", status: "Active", joinDate: "2024-01-16" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", enrollmentNo: "2024003", status: "Inactive", joinDate: "2024-01-17" },
    { id: 4, name: "Sarah Williams", email: "sarah@example.com", enrollmentNo: "2024004", status: "Active", joinDate: "2024-01-18" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 flex-1 bg-gradient-to-br from-purple-50 to-white">
                <div className="text-sm font-medium text-purple-600">Total Registered</div>
                <div className="flex items-baseline mt-1">
                  <div className="text-2xl font-bold text-purple-700">{stats.totalRegistered}</div>
                  <div className="ml-2 text-xs text-purple-500">students</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 flex-1 bg-gradient-to-br from-green-50 to-white">
                <div className="text-sm font-medium text-green-600">Verified Accounts</div>
                <div className="flex items-baseline mt-1">
                  <div className="text-2xl font-bold text-green-700">{stats.verifiedAccounts}</div>
                  <div className="ml-2 text-xs text-green-500">accounts</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 flex-1 bg-gradient-to-br from-red-50 to-white">
                <div className="text-sm font-medium text-red-600">Unverified Accounts</div>
                <div className="flex items-baseline mt-1">
                  <div className="text-2xl font-bold text-red-700">{stats.unverifiedAccounts}</div>
                  <div className="ml-2 text-xs text-red-500">accounts</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Students List Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Students List</h2>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            + Add Student
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search students..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        {/* Students Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full border-collapse bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Email</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Enrollment No.</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Join Date</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student) => (
                <tr key={student.id} className="border-t hover:bg-gray-50">
                  <td className="p-4 text-sm font-medium text-gray-900">{student.name}</td>
                  <td className="p-4 text-sm text-gray-600">{student.email}</td>
                  <td className="p-4 text-sm text-gray-600">{student.enrollmentNo}</td>
                  <td className="p-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{student.joinDate}</td>
                  <td className="p-4">
                    <Button variant="ghost" size="sm" className="p-2">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;