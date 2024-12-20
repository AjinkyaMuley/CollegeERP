import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, DollarSign, Calendar, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const PaymentPage = () => {
  const stats = {
    totalRecords: 0,
    paidRecords: 0,
    unpaidRecords: 0,
    today: "0/0/0"
  };

  const paymentData = [
    { 
      id: 1, 
      studentName: "Alex Johnson", 
      amount: 5000, 
      dueDate: "2024-11-15", 
      status: "Paid",
      paymentDate: "2024-11-01",
      paymentMethod: "Credit Card"
    },
    { 
      id: 2, 
      studentName: "Maria Garcia", 
      amount: 4500, 
      dueDate: "2024-11-20", 
      status: "Unpaid",
      paymentDate: "-",
      paymentMethod: "Pending"
    },
    { 
      id: 3, 
      studentName: "James Wilson", 
      amount: 5500, 
      dueDate: "2024-11-10", 
      status: "Paid",
      paymentDate: "2024-10-31",
      paymentMethod: "Bank Transfer"
    }
  ];

  const handleNewPayment = () => {
    // Handle new payment logic
  };

  const handleViewDetails = (id) => {
    // Handle view details logic
  };

  const handleMarkAsPaid = (id) => {
    // Handle mark as paid logic
  };

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 flex-1 bg-gradient-to-br from-purple-50 to-white">
                <div className="text-sm font-medium text-purple-600">Total Records</div>
                <div className="flex items-baseline mt-1">
                  <div className="text-2xl font-bold text-purple-700">{stats.totalRecords}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 flex-1 bg-gradient-to-br from-green-50 to-white">
                <div className="text-sm font-medium text-green-600">Paid Records</div>
                <div className="flex items-baseline mt-1">
                  <div className="text-2xl font-bold text-green-700">{stats.paidRecords}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 flex-1 bg-gradient-to-br from-red-50 to-white">
                <div className="text-sm font-medium text-red-600">Unpaid Records</div>
                <div className="flex items-baseline mt-1">
                  <div className="text-2xl font-bold text-red-700">{stats.unpaidRecords}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 flex-1 bg-gradient-to-br from-blue-50 to-white">
                <div className="text-sm font-medium text-blue-600">Today</div>
                <div className="flex items-baseline mt-1">
                  <div className="text-2xl font-bold text-blue-700">{stats.today}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment List Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Payment Records</h2>
          <div className="space-x-4">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Export Records
            </Button>
            <Button onClick={handleNewPayment} className="bg-purple-600 hover:bg-purple-700 text-white">
              + New Payment
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search payments..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="md:col-span-2">
            <select className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">All Status</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <select className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Payment Method</option>
              <option value="card">Credit Card</option>
              <option value="bank">Bank Transfer</option>
              <option value="cash">Cash</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <input
              type="date"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="md:col-span-2">
            <Button variant="outline" className="w-full">
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Payments Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full border-collapse bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Student Name</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Amount</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Due Date</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Payment Date</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Payment Method</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paymentData.map((payment) => (
                <tr key={payment.id} className="border-t hover:bg-gray-50">
                  <td className="p-4 text-sm font-medium text-gray-900">{payment.studentName}</td>
                  <td className="p-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {payment.amount.toLocaleString()}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{payment.dueDate}</td>
                  <td className="p-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 w-fit ${
                      payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {payment.status === 'Paid' ? <CheckCircle className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                      {payment.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{payment.paymentDate}</td>
                  <td className="p-4 text-sm text-gray-600">{payment.paymentMethod}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-purple-600 hover:bg-purple-50"
                        onClick={() => handleViewDetails(payment.id)}
                      >
                        View
                      </Button>
                      {payment.status === 'Unpaid' && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-green-600 hover:bg-green-50"
                          onClick={() => handleMarkAsPaid(payment.id)}
                        >
                          Mark as Paid
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <Button variant="outline">Previous</Button>
            <Button variant="outline">Next</Button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of{' '}
                <span className="font-medium">3</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <Button variant="outline" className="rounded-l-md">Previous</Button>
                <Button variant="outline" className="bg-purple-50 text-purple-600">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline" className="rounded-r-md">Next</Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;