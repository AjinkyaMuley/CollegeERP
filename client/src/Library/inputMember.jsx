import React, { useState } from 'react';

const MemberForm = () => {
  const [formData, setFormData] = useState({
    memberId: '',
    name: '',
    type: '',
    status: '',
    booksIssued: '0',
    maxBooks: '5',  // Default max books limit
    joinDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Clear form after submission
    setFormData({
      memberId: '',
      name: '',
      type: '',
      status: '',
      booksIssued: '0',
      maxBooks: '5',
      joinDate: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add New Member</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Member ID</label>
          <input
            type="text"
            name="memberId"
            value={formData.memberId}
            onChange={handleChange}
            placeholder="e.g., LIB-2024000"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter member name"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select type</option>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
            <option value="Staff">Staff</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Books Issued</label>
            <input
              type="number"
              name="booksIssued"
              value={formData.booksIssued}
              onChange={handleChange}
              min="0"
              max="5"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Max Books</label>
            <input
              type="number"
              value={formData.maxBooks}
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Join Date</label>
          <input
            type="date"
            name="joinDate"
            value={formData.joinDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};

export default MemberForm;