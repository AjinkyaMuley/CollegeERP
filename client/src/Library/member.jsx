import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Users, GraduationCap, UserCog, UserCheck, Plus, Eye, Edit, Trash2, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Badge,
} from "@/components/ui/badge";

const MemberManagement = () => {
  const stats = {
    totalMembers: 5,
    studentMembers: 3,
    facultyMembers: 2,
    activeMembers: 2
  };

  const handleNewMember = () => {
    // Handle new member logic
  };

  const handleEdit = (id) => {
    // Handle edit logic
  };

  const handleDelete = (id) => {
    // Handle delete logic
  };

  const handleView = (id) => {
    // Handle view logic
  };

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-3 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="p-3 flex-1 bg-gradient-to-br from-indigo-50 to-white">
                <div className="text-xs font-medium text-indigo-600">Total Members</div>
                <div className="text-xl font-bold text-indigo-700">{stats.totalMembers}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="p-3 flex-1 bg-gradient-to-br from-blue-50 to-white">
                <div className="text-xs font-medium text-blue-600">Student Members</div>
                <div className="text-xl font-bold text-blue-700">{stats.studentMembers}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-3 flex items-center justify-center">
                <UserCog className="h-6 w-6 text-white" />
              </div>
              <div className="p-3 flex-1 bg-gradient-to-br from-amber-50 to-white">
                <div className="text-xs font-medium text-amber-600">Faculty Members</div>
                <div className="text-xl font-bold text-amber-700">{stats.facultyMembers}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-white" />
              </div>
              <div className="p-3 flex-1 bg-gradient-to-br from-green-50 to-white">
                <div className="text-xs font-medium text-green-600">Active Members</div>
                <div className="text-xl font-bold text-green-700">{stats.activeMembers}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Member Management Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Member Management</h2>
          <Button onClick={handleNewMember} className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Plus className="h-4 w-4 mr-2" /> Add Member
          </Button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search members..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="md:col-span-3">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Member Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="faculty">Faculty</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-3">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-2">
            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" /> Reset
            </Button>
          </div>
        </div>

        {/* Members Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full border-collapse bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Member ID</th>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Type</th>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Books Issued</th>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Join Date</th>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">LIB-{2024000 + index}</td>
                  <td className="p-3">Member Name {index + 1}</td>
                  <td className="p-3">
                    <Badge variant="outline" className={index % 4 === 0 ? "text-amber-600" : "text-blue-600"}>
                      {index % 4 === 0 ? 'Faculty' : 'Student'}
                    </Badge>
                  </td>
                  <td className="p-3">
                    <Badge className={`
                      ${index % 3 === 0 ? 'bg-green-100 text-green-700' : ''}
                      ${index % 3 === 1 ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${index % 3 === 2 ? 'bg-red-100 text-red-700' : ''}
                    `}>
                      {index % 3 === 0 ? 'Active' : index % 3 === 1 ? 'Inactive' : 'Suspended'}
                    </Badge>
                  </td>
                  <td className="p-3">{index} / 5</td>
                  <td className="p-3">2024-01-{(index + 1).toString().padStart(2, '0')}</td>
                  <td className="p-3">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 hover:bg-blue-50"
                        onClick={() => handleView(index)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-amber-600 hover:bg-amber-50"
                        onClick={() => handleEdit(index)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:bg-red-50"
                        onClick={() => handleDelete(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
            <span className="font-medium">{stats.totalMembers}</span> results
          </p>
          <nav className="inline-flex -space-x-px rounded-md shadow-sm">
            <Button variant="outline" className="rounded-l-md px-2 py-1">Previous</Button>
            <Button variant="outline" className="bg-indigo-50 text-indigo-600 px-3 py-1">1</Button>
            <Button variant="outline" className="px-3 py-1">2</Button>
            <Button variant="outline" className="px-3 py-1">3</Button>
            <Button variant="outline" className="rounded-r-md px-2 py-1">Next</Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MemberManagement;