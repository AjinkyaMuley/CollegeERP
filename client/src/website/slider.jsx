import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, ImageIcon, Eye, PenSquare, Trash2, CheckCircle, Clock } from 'lucide-react';

const SliderPage = () => {
  const stats = {
    total: 5,
    published: 5,
    unpublished: 0
  };

  const sliderData = [
    {
      id: 1,
      title: "Campus Life",
      image: "/api/placeholder/800/400",
      status: "Published",
      order: 1,
      location: "Home Page",
      publishDate: "2024-11-01"
    },
    {
      id: 2,
      title: "Research Labs",
      image: "/api/placeholder/800/400",
      status: "Published",
      order: 2,
      location: "About Us",
      publishDate: "2024-11-01"
    },
    {
      id: 3,
      title: "Library Building",
      image: "/api/placeholder/800/400",
      status: "Published",
      order: 3,
      location: "Facilities",
      publishDate: "2024-10-31"
    },
    {
      id: 4,
      title: "Sports Complex",
      image: "/api/placeholder/800/400",
      status: "Published",
      order: 4,
      location: "Home Page",
      publishDate: "2024-10-30"
    },
    {
      id: 5,
      title: "Auditorium",
      image: "/api/placeholder/800/400",
      status: "Published",
      order: 5,
      location: "Events",
      publishDate: "2024-10-29"
    }
  ];

  const handleNewSlide = () => {
    // Handle new slide logic
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 flex items-center justify-center">
                <ImageIcon className="h-6 w-6 text-white" />
              </div>
              <div className="p-3 flex-1 bg-gradient-to-br from-purple-50 to-white">
                <div className="text-xs font-medium text-purple-600">Total Slides</div>
                <div className="text-xl font-bold text-purple-700">{stats.total}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="p-3 flex-1 bg-gradient-to-br from-green-50 to-white">
                <div className="text-xs font-medium text-green-600">Published</div>
                <div className="text-xl font-bold text-green-700">{stats.published}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-3 flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="p-3 flex-1 bg-gradient-to-br from-amber-50 to-white">
                <div className="text-xs font-medium text-amber-600">Unpublished</div>
                <div className="text-xl font-bold text-amber-700">{stats.unpublished}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Slider Management Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Slider Management</h2>
          <Button onClick={handleNewSlide} className="bg-purple-600 hover:bg-purple-700 text-white">
            + New Slide
          </Button>
        </div>

        {/* Filters and Search */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search slides..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="md:col-span-3">
            <select className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">All Status</option>
              <option value="published">Published</option>
              <option value="unpublished">Unpublished</option>
            </select>
          </div>
          <div className="md:col-span-3">
            <select className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">All Locations</option>
              <option value="home">Home Page</option>
              <option value="about">About Us</option>
              <option value="facilities">Facilities</option>
              <option value="events">Events</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <Button variant="outline" className="w-full">Reset</Button>
          </div>
        </div>

        {/* Slides Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full border-collapse bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Image</th>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Title</th>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Location</th>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Order</th>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="p-3 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sliderData.map((slide) => (
                <tr key={slide.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">
                    <div className="w-16 h-12 rounded overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="p-3 text-sm font-medium text-gray-900">{slide.title}</td>
                  <td className="p-3 text-sm text-gray-600">
                    <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">
                      {slide.location}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-600">{slide.order}</td>
                  <td className="p-3 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 w-fit ${
                      slide.status === 'Published' ? 'bg-green-100 text-green-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {slide.status === 'Published' ? <CheckCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                      {slide.status}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-600">{slide.publishDate}</td>
                  <td className="p-3">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 hover:bg-blue-50"
                        onClick={() => handleView(slide.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-amber-600 hover:bg-amber-50"
                        onClick={() => handleEdit(slide.id)}
                      >
                        <PenSquare className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:bg-red-50"
                        onClick={() => handleDelete(slide.id)}
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
            <span className="font-medium">5</span> results
          </p>
          <nav className="inline-flex -space-x-px rounded-md shadow-sm">
            <Button variant="outline" className="rounded-l-md px-2 py-1">Previous</Button>
            <Button variant="outline" className="bg-purple-50 text-purple-600 px-3 py-1">1</Button>
            <Button variant="outline" className="px-3 py-1">2</Button>
            <Button variant="outline" className="rounded-r-md px-2 py-1">Next</Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;