import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  Settings, 
  Save, 
  Edit, 
  Plus, 
  Trash2, 
  EyeOff,
  Building,
  Users,
  FileText,
  Upload,
  Image
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const AdminDashboard = ({ data, onDataUpdate }) => {
  const [editingData, setEditingData] = useState(JSON.parse(JSON.stringify(data)));
  const [activeTab, setActiveTab] = useState('business');
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    onDataUpdate(editingData);
    localStorage.setItem('siteData', JSON.stringify(editingData));
    toast({
      title: "Changes Saved!",
      description: "Your website has been updated successfully.",
      duration: 3000,
    });
  };

  const handleBusinessUpdate = (field, value) => {
    setEditingData(prev => ({
      ...prev,
      business: {
        ...prev.business,
        [field]: value
      }
    }));
  };

  const handleImageUpload = (field, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        handleBusinessUpdate(field, base64);
        toast({
          title: "Image Uploaded!",
          description: "Your image has been uploaded successfully.",
          duration: 3000,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAttorneyImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        handleAttorneyUpdate(index, 'image', base64);
        toast({
          title: "Attorney Photo Uploaded!",
          description: "The photo has been uploaded successfully.",
          duration: 3000,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePracticeAreaUpdate = (index, field, value) => {
    const newPracticeAreas = [...editingData.practiceAreas];
    newPracticeAreas[index] = {
      ...newPracticeAreas[index],
      [field]: value
    };
    setEditingData(prev => ({
      ...prev,
      practiceAreas: newPracticeAreas
    }));
  };

  const addPracticeArea = () => {
    setEditingData(prev => ({
      ...prev,
      practiceAreas: [
        ...prev.practiceAreas,
        {
          title: "New Practice Area",
          description: "Description for new practice area",
          url: "/new-practice-area"
        }
      ]
    }));
  };

  const removePracticeArea = (index) => {
    setEditingData(prev => ({
      ...prev,
      practiceAreas: prev.practiceAreas.filter((_, i) => i !== index)
    }));
  };

  if (!isVisible) {
    return (
      <Button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white z-50 rounded-full p-3 shadow-lg"
      >
        <Settings className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Website Admin Dashboard</h2>
          <div className="flex space-x-2">
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
            <Button
              onClick={() => setIsVisible(false)}
              variant="outline"
            >
              <EyeOff className="h-4 w-4 mr-2" />
              Close
            </Button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r p-4">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('business')}
                className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                  activeTab === 'business' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
              >
                <Building className="h-4 w-4 mr-3" />
                Business Info
              </button>
              <button
                onClick={() => setActiveTab('practice')}
                className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                  activeTab === 'practice' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
              >
                <FileText className="h-4 w-4 mr-3" />
                Practice Areas
              </button>
              <button
                onClick={() => setActiveTab('attorneys')}
                className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                  activeTab === 'attorneys' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
              >
                <Users className="h-4 w-4 mr-3" />
                Attorneys
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Business Info Tab */}
            {activeTab === 'business' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Business Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Business Name</label>
                    <Input
                      value={editingData.business.name}
                      onChange={(e) => handleBusinessUpdate('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      value={editingData.business.phone}
                      onChange={(e) => handleBusinessUpdate('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      value={editingData.business.email}
                      onChange={(e) => handleBusinessUpdate('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Established</label>
                    <Input
                      value={editingData.business.established}
                      onChange={(e) => handleBusinessUpdate('established', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tagline</label>
                  <Input
                    value={editingData.business.tagline}
                    onChange={(e) => handleBusinessUpdate('tagline', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Address</label>
                  <Input
                    value={editingData.business.address}
                    onChange={(e) => handleBusinessUpdate('address', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Input
                    value={editingData.business.location}
                    onChange={(e) => handleBusinessUpdate('location', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    value={editingData.business.description}
                    onChange={(e) => handleBusinessUpdate('description', e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Practice Areas Tab */}
            {activeTab === 'practice' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Practice Areas</h3>
                  <Button onClick={addPracticeArea} className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Practice Area
                  </Button>
                </div>

                <div className="space-y-4">
                  {editingData.practiceAreas.map((area, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium">Practice Area {index + 1}</h4>
                        <Button
                          onClick={() => removePracticeArea(index)}
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Title</label>
                          <Input
                            value={area.title}
                            onChange={(e) => handlePracticeAreaUpdate(index, 'title', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">URL</label>
                          <Input
                            value={area.url}
                            onChange={(e) => handlePracticeAreaUpdate(index, 'url', e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <Textarea
                          value={area.description}
                          onChange={(e) => handlePracticeAreaUpdate(index, 'description', e.target.value)}
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Attorneys Tab */}
            {activeTab === 'attorneys' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Attorneys</h3>
                <p className="text-gray-600">Attorney management coming soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;