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

  const handleAttorneyUpdate = (index, field, value) => {
    const newAttorneys = [...editingData.attorneys];
    newAttorneys[index] = {
      ...newAttorneys[index],
      [field]: value
    };
    setEditingData(prev => ({
      ...prev,
      attorneys: newAttorneys
    }));
  };

  const addAttorney = () => {
    setEditingData(prev => ({
      ...prev,
      attorneys: [
        ...prev.attorneys,
        {
          name: "New Attorney",
          position: "Associate",
          experience: "Description of experience",
          image: "/api/placeholder/300/400"
        }
      ]
    }));
  };

  const removeAttorney = (index) => {
    setEditingData(prev => ({
      ...prev,
      attorneys: prev.attorneys.filter((_, i) => i !== index)
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
                Business Info & Logo
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
                Attorneys & Photos
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                  activeTab === 'content' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
              >
                <Edit className="h-4 w-4 mr-3" />
                Website Content
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Business Info Tab */}
            {activeTab === 'business' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Business Information & Logo</h3>
                
                {/* Logo Upload */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-md font-medium mb-4">Company Logo</h4>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                      {editingData.business.logo ? (
                        <img src={editingData.business.logo} alt="Logo" className="max-w-full max-h-full object-contain" />
                      ) : (
                        <span className="text-gray-500 text-sm">No logo</span>
                      )}
                    </div>
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload('logo', e)}
                        className="hidden"
                        id="logo-upload"
                      />
                      <label htmlFor="logo-upload">
                        <Button
                          as="span"
                          variant="outline"
                          className="cursor-pointer"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Logo
                        </Button>
                      </label>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
                    </div>
                  </div>
                </div>
                
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
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Attorneys & Photos</h3>
                  <Button onClick={addAttorney} className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Attorney
                  </Button>
                </div>

                <div className="space-y-4">
                  {editingData.attorneys.map((attorney, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium">{attorney.name}</h4>
                        <Button
                          onClick={() => removeAttorney(index)}
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Photo Upload */}
                      <div className="mb-4 p-4 bg-white rounded border">
                        <label className="block text-sm font-medium mb-2">Attorney Photo</label>
                        <div className="flex items-center space-x-4">
                          <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                            {attorney.image && attorney.image.startsWith('data:') ? (
                              <img src={attorney.image} alt={attorney.name} className="w-full h-full object-cover" />
                            ) : (
                              <Image className="h-8 w-8 text-gray-400" />
                            )}
                          </div>
                          <div>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleAttorneyImageUpload(index, e)}
                              className="hidden"
                              id={`attorney-photo-${index}`}
                            />
                            <label htmlFor={`attorney-photo-${index}`}>
                              <Button
                                as="span"
                                variant="outline"
                                size="sm"
                                className="cursor-pointer"
                              >
                                <Upload className="h-4 w-4 mr-2" />
                                Upload Photo
                              </Button>
                            </label>
                            <p className="text-xs text-gray-500 mt-1">Professional headshot recommended</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Name</label>
                          <Input
                            value={attorney.name}
                            onChange={(e) => handleAttorneyUpdate(index, 'name', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Position</label>
                          <Input
                            value={attorney.position}
                            onChange={(e) => handleAttorneyUpdate(index, 'position', e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Experience Description</label>
                        <Textarea
                          value={attorney.experience}
                          onChange={(e) => handleAttorneyUpdate(index, 'experience', e.target.value)}
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content Tab */}
            {activeTab === 'content' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Website Content & Text</h3>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">💡 How to Edit Text on Your Website</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use the "Business Info" tab to edit main content</li>
                    <li>• Use "Practice Areas" tab to edit your services</li>
                    <li>• Use "Attorneys" tab to edit team information</li>
                    <li>• Click "Save Changes" to update your live website</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">📸 How to Add Pictures</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Go to "Business Info" tab to upload your company logo</li>
                    <li>• Go to "Attorneys" tab to upload attorney photos</li>
                    <li>• Click the "Upload" buttons and select your images</li>
                    <li>• Images should be JPG or PNG format, under 2MB</li>
                    <li>• Professional headshots work best for attorneys</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">✅ Tips for Best Results</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Keep descriptions clear and professional</li>
                    <li>• Use high-quality images for best appearance</li>
                    <li>• Test your changes on both desktop and mobile</li>
                    <li>• Save your changes regularly</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;