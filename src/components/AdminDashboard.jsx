import React, { useState, useEffect } from 'react';

const AdminDashboard = ({ onLogout }) => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedForm, setSelectedForm] = useState(null);
  const [showFormDetails, setShowFormDetails] = useState(false);
  const [showMedicalModal, setShowMedicalModal] = useState(false);
  const [selectedConditions, setSelectedConditions] = useState({});
  const [selectedMentalConditions, setSelectedMentalConditions] = useState({});
  const [selectedMedications, setSelectedMedications] = useState({});
  const [smokingHistory, setSmokingHistory] = useState({
    dailyAmount: '',
    type: '',
    timeToFirstSmoke: '',
    difficultWhereForbidden: '',
    hardestToQuit: '',
    smokeMoreMorning: '',
    smokeWhenIll: ''
  });
  const [aboutYou, setAboutYou] = useState({
    yearsSmoked: '',
    smokeCannabis: '',
    haveChildren: '',
    liveWithSmokers: '',
    useHomeOxygen: ''
  });
  const [fagerstromScore, setFagerstromScore] = useState(0);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'admin@quitsmoke.com',
          password: 'admin123'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setForms(data.forms || []);
      } else {
        setError('Failed to fetch forms');
      }
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteForm = async (formId) => {
    if (!window.confirm('Are you sure you want to delete this form?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/admin/form/${formId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'admin@quitsmoke.com',
          password: 'admin123'
        }),
      });

      if (response.ok) {
        setForms(forms.filter(form => form._id !== formId));
        if (selectedForm && selectedForm._id === formId) {
          setSelectedForm(null);
          setShowFormDetails(false);
        }
      } else {
        alert('Failed to delete form');
      }
    } catch {
      alert('Network error');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Medical conditions list (based on provided image)
  const medicalConditions = [
    'Acid Reflux', 'Alzheimers', 'Angina', 'Arthritis', 'Atrial Fibrillation', 'Autoimmune disease', 'Blood Pressure', 'Bowel Prolapse', 'Brain Injury', 'Bronchitis', 'Cancer', 'Cardiac Disease', 'Cataracts', 'Central Nervous System disorder', 'Cerebrospinal Fluid Leak (CSF Leak)', 'CHD', 'Chest Problems', 'Chronic Bronchitis', 'Contact with TB', 'COPD', "Crohn's Disease", 'Currently being prescribed statins to lower cholesterol', 'Deep Vein Thrombosis', 'Dementia', 'Diabetes Insipidus', 'Diabetes Type 1', 'Diabetes Type 2', 'Did Not Disclose', 'Diverticulosis', 'Dyslexia', 'Dyspraxia', 'Eating Disorder', 'Eczema', 'Emphysema', 'Endocrine disorder', 'Epilepsy', 'Fibromyalgia', 'Gynaecological problems', 'Haematological disorder', 'Hearing Impairment', 'Heart Attack', 'Heart Blockage', 'Heart Disease', 'Heart Failure', 'Heart Problems', 'Hepatitis C', 'Hernia', 'High Blood Cholesterol', 'High Blood Pressure', 'HIV/ Aids', 'Hypermobility', 'Hypertension', 'Idiopathic Intracranial Hypertension (IIH)', 'Infectious Hepatitis A', 'Inflammatory bowel disease', 'Inflammatory bowel Syndrome (IBS)', 'Liver Disease', 'Lung Cancer', 'Lymphoedema', 'Manic-Depressive Disorder', 'Migraine', 'Multiple Sclerosis (MS)', 'Musculoskeletal Disorder', 'No Medical Conditions', 'Not stated on referral', 'Osteoarthritis', 'Osteoporosis', 'Other', 'Other stomach problems', "Parkinson's Disease", 'peripheral arterial disease', 'Pneumonia', 'Polycystic Ovary Syndrome', 'Psoriasis', 'Reaction To NRT', 'Respiratory Disease', 'Respiratory Problems', "Reynaud's Disease", 'Rheumatoid Arthritis', 'Sciatic Arthritis', 'Sciatica', 'Serum Hepatitis B', 'Skin Conditions', 'Sleep Apnoea', 'Stomach Ulcer', 'Stroke', 'Thromboembolic disorder', 'Thyroid Disease', 'Thyroid: Overactive', 'Tinnitus', 'Transient Ischemic Attack (Mini Stroke)', 'Turner Syndrome', 'Under/Overactive Thyroid'
  ];

  const toggleCondition = (name) => {
    setSelectedConditions((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  // Mental health conditions list (based on provided image)
  const mentalHealthConditions = [
    'ADHD', 'Agoraphobia', 'Anxiety', 'Autism', 'Bipolar Disorder',
    'Borderline Personality Disorder', 'Complex PTSD', 'Depression',
    'Depression - Mild to Mod', 'Dissociative Disorder', 'Emotional Instability',
    'Emotionally Unstable Personality Disorder (EUPD)', 'Night Terrors',
    'Obsessive Compulsive Disorder (OCD)', 'Panic Attacks',
    'Paranoid Personality Disorder', 'Paranoid Schizophrenia',
    'Personality Disorder', 'Post Traumatic Stress Disorder (PTSD)',
    'Psychosis', 'Schizoaffective Disorder', 'Schizophrenia'
  ];

  const toggleMentalCondition = (name) => {
    setSelectedMentalConditions((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  // Current medication list (based on provided image)
  const currentMedications = [
    'ADHD meds','Amantadine','Aminophylline','Amytriptyline','Analgesics','Anti Epileptics','Anti malarials','Anti-arrhythmic',
    'Antivirals','Atomoxetine','Beta Blockers','Bronchodilators','Carbamazepine','Chemotherapy','Chlorpromazine','Citalopram',
    'Duloxetine','Famotidine','Flecainide','Fluoxetine','Fluphenazine','Furosemide','Gabapentin','Galantamine',
    'Lorazepam','MAOI\'s','Modobemide','Nitrates','Nitrazepam','Non steroidal anti-inflammatory','Not Listed','Olanzapine',
    'Ramipril','Ranitidine','Risperidone','Sertraline','Statins','Steroids','Tamoxifen','Theophylline'
  ];

  const toggleMedication = (name) => {
    setSelectedMedications((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  // Smoking history options and score mapping (Fagerström Test)
  const dailyAmountOptions = ['Up to 10', '11 - 20', '21 - 30', '31+'];
  const typeOptions = ['Cigarette', 'Roll Up', 'Vape', 'Cigar', 'Pipe', 'Other'];
  const timeToFirstOptions = ['within 5 minutes', '6 - 30 minutes', '31 - 60 minutes', 'over 60 minutes'];
  const yesNoOptions = ['Yes', 'No'];
  const hardestToQuitOptions = ['Morning', 'Any of the others'];

  const scoreMappings = {
    timeToFirstSmoke: {
      'within 5 minutes': 3,
      '6 - 30 minutes': 2,
      '31 - 60 minutes': 1,
      'over 60 minutes': 0
    },
    dailyAmount: {
      'Up to 10': 0,
      '11 - 20': 1,
      '21 - 30': 2,
      '31+': 3
    },
    difficultWhereForbidden: {
      Yes: 1,
      No: 0
    },
    hardestToQuit: {
      Morning: 1,
      'Any of the others': 0
    },
    smokeMoreMorning: {
      Yes: 1,
      No: 0
    },
    smokeWhenIll: {
      Yes: 1,
      No: 0
    }
  };

  const computeFagerstromScore = () => {
    let total = 0;
    total += scoreMappings.timeToFirstSmoke[smokingHistory.timeToFirstSmoke] || 0;
    total += scoreMappings.dailyAmount[smokingHistory.dailyAmount] || 0;
    total += scoreMappings.difficultWhereForbidden[smokingHistory.difficultWhereForbidden] || 0;
    total += scoreMappings.hardestToQuit[smokingHistory.hardestToQuit] || 0;
    total += scoreMappings.smokeMoreMorning[smokingHistory.smokeMoreMorning] || 0;
    total += scoreMappings.smokeWhenIll[smokingHistory.smokeWhenIll] || 0;
    setFagerstromScore(total);
  };

  const loadFormData = () => {
    if (!selectedForm) return;

    // Load medical conditions
    const medicalConditionsObj = {};
    if (selectedForm.medicalConditions) {
      selectedForm.medicalConditions.forEach(condition => {
        medicalConditionsObj[condition] = true;
      });
    }
    setSelectedConditions(medicalConditionsObj);

    // Load mental health conditions
    const mentalHealthConditionsObj = {};
    if (selectedForm.mentalHealthConditions) {
      selectedForm.mentalHealthConditions.forEach(condition => {
        mentalHealthConditionsObj[condition] = true;
      });
    }
    setSelectedMentalConditions(mentalHealthConditionsObj);

    // Load current medications
    const currentMedicationsObj = {};
    if (selectedForm.currentMedications) {
      selectedForm.currentMedications.forEach(medication => {
        currentMedicationsObj[medication] = true;
      });
    }
    setSelectedMedications(currentMedicationsObj);

    // Load smoking history
    if (selectedForm.smokingHistory) {
      setSmokingHistory(selectedForm.smokingHistory);
      setFagerstromScore(selectedForm.smokingHistory.fagerstromScore || 0);
    }

    // Load about you
    if (selectedForm.aboutYou) {
      setAboutYou(selectedForm.aboutYou);
    }
  };

  const saveFormData = async () => {
    if (!selectedForm) return;

    try {
      // Convert selected conditions to arrays
      const medicalConditionsArray = Object.keys(selectedConditions).filter(key => selectedConditions[key]);
      const mentalHealthConditionsArray = Object.keys(selectedMentalConditions).filter(key => selectedMentalConditions[key]);
      const currentMedicationsArray = Object.keys(selectedMedications).filter(key => selectedMedications[key]);

      // Update smoking history with computed score
      const updatedSmokingHistory = {
        ...smokingHistory,
        fagerstromScore: fagerstromScore
      };

      const updateData = {
        medicalConditions: medicalConditionsArray,
        mentalHealthConditions: mentalHealthConditionsArray,
        currentMedications: currentMedicationsArray,
        smokingHistory: updatedSmokingHistory,
        aboutYou: aboutYou
      };

      const response = await fetch(`http://localhost:5000/api/admin/form/${selectedForm._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...updateData,
          email: 'admin@quitsmoke.com',
          password: 'admin123'
        }),
      });

      if (response.ok) {
        alert('Form data saved successfully!');
        setShowMedicalModal(false);
        // Refresh the forms list
        fetchForms();
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to save form data');
      }
    } catch (error) {
      console.error('Save form data error:', error);
      alert('Network error. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-fuchsia-50 to-purple-100 p-5">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-200 border-t-fuchsia-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg font-medium">Loading your dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-fuchsia-50 to-purple-100 p-5">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl mb-8 border border-white/50">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 text-lg">Manage form submissions and user data</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Total Forms: {forms.length}
              </div>
            </div>
            <button 
              onClick={onLogout} 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Submissions</p>
              <p className="text-3xl font-bold text-slate-800">{forms.length}</p>
            </div>
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">This Month</p>
              <p className="text-3xl font-bold text-slate-800">
                {forms.filter(form => {
                  const formDate = new Date(form.createdAt);
                  const now = new Date();
                  return formDate.getMonth() === now.getMonth() && formDate.getFullYear() === now.getFullYear();
                }).length}
              </p>
            </div>
            <div className="w-12 h-12 bg-fuchsia-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">With Messages</p>
              <p className="text-3xl font-bold text-slate-800">
                {forms.filter(form => form.message).length}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Success Rate</p>
              <p className="text-3xl font-bold text-slate-800">100%</p>
            </div>
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50/80 backdrop-blur-sm text-red-600 px-6 py-4 rounded-2xl mb-6 text-center border border-red-200/50 shadow-lg">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        </div>
      )}

      {/* Forms Section */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-slate-800">Form Submissions</h2>
            <div className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
              {forms.length} entries
            </div>
          </div>
          
          {forms.length === 0 ? (
            <div className="text-center py-20 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No submissions yet</h3>
              <p className="text-gray-600">Forms will appear here once users start submitting</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {forms.map((form, index) => (
                <div 
                  key={form._id} 
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/90 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-4 pb-4 border-b border-gray-200/50">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors duration-300">
                        {form.firstName} {form.lastName}
                      </h3>
                      <p className="text-gray-500 text-sm">{formatDate(form.createdAt)}</p>
                    </div>
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      <span className="text-sm">{form.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm">{form.phone || 'Not provided'}</span>
                    </div>
                    {form.message && (
                      <div className="flex items-start gap-2 text-gray-600">
                        <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-sm line-clamp-2">{form.message}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setSelectedForm(form);
                        setShowFormDetails(true);
                      }}
                      className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </button>
                    <button
                      onClick={() => {
                        setSelectedForm(form);
                        setShowMedicalModal(true);
                        // Load existing data after a short delay to ensure state is set
                        setTimeout(() => loadFormData(), 100);
                      }}
                      className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-none rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m2-4h.01M12 6a9 9 0 100 18 9 9 0 000-18z" />
                      </svg>
                      More Info
                    </button>
                    <button
                      onClick={() => handleDeleteForm(form._id)}
                      className="flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-none rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Form Details Modal */}
      {showFormDetails && selectedForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-5" onClick={() => setShowFormDetails(false)}>
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-8 border-b border-gray-200/50">
              <div>
                <h2 className="text-3xl font-bold text-slate-800">Form Details</h2>
                <p className="text-gray-600 mt-1">Complete submission information</p>
              </div>
              <button
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors duration-300"
                onClick={() => setShowFormDetails(false)}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <div className="mb-8 pb-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Personal Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium min-w-[80px]">Name:</span>
                    <span className="text-slate-800 font-semibold">{selectedForm.firstName} {selectedForm.lastName}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium min-w-[80px]">Email:</span>
                    <span className="text-slate-800 font-semibold">{selectedForm.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium min-w-[80px]">Phone:</span>
                    <span className="text-slate-800 font-semibold">{selectedForm.phone || 'Not provided'}</span>
                  </div>
                </div>
              </div>

              {selectedForm.message && (
                <div className="mb-8 pb-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Message
                  </h3>
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-slate-800 leading-relaxed">{selectedForm.message}</p>
                  </div>
                </div>
              )}

              <div className="mb-0">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Submission Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium min-w-[100px]">Submitted:</span>
                    <span className="text-slate-800 font-semibold">{formatDate(selectedForm.createdAt)}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium min-w-[100px]">Status:</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                      {selectedForm.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Medical Conditions Modal */}
      {showMedicalModal && selectedForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-5" onClick={() => setShowMedicalModal(false)}>
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-8 border-b border-gray-200/50">
              <div>
                <h2 className="text-3xl font-bold text-slate-800">Medical Conditions</h2>
                <p className="text-gray-600 mt-1">Select all that apply for {selectedForm.firstName} {selectedForm.lastName}</p>
              </div>
              <button
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors duration-300"
                onClick={() => setShowMedicalModal(false)}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Medical Conditions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {medicalConditions.map((cond) => (
                    <label key={cond} className="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-purple-300 transition-colors cursor-pointer bg-white">
                      <input
                        type="checkbox"
                        checked={!!selectedConditions[cond]}
                        onChange={() => toggleCondition(cond)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-slate-800">{cond}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Mental Health Conditions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {mentalHealthConditions.map((cond) => (
                    <label key={cond} className="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors cursor-pointer bg-white">
                      <input
                        type="checkbox"
                        checked={!!selectedMentalConditions[cond]}
                        onChange={() => toggleMentalCondition(cond)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-slate-800">{cond}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Current Medication</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {currentMedications.map((med) => (
                    <label key={med} className="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-fuchsia-300 transition-colors cursor-pointer bg-white">
                      <input
                        type="checkbox"
                        checked={!!selectedMedications[med]}
                        onChange={() => toggleMedication(med)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-fuchsia-600 focus:ring-fuchsia-500"
                      />
                      <span className="text-sm text-slate-800">{med}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Smoking History and About You */}
              <div className="mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="bg-white rounded-xl p-5 border border-gray-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Fagerstrom Score</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <label className="text-sm text-slate-700">Daily Amount Smoked</label>
                        <select value={smokingHistory.dailyAmount} onChange={(e) => setSmokingHistory({ ...smokingHistory, dailyAmount: e.target.value })} className="border rounded-lg px-3 py-2 text-sm">
                          <option value="">Select</option>
                          {dailyAmountOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <label className="text-sm text-slate-700">Type</label>
                        <select value={smokingHistory.type} onChange={(e) => setSmokingHistory({ ...smokingHistory, type: e.target.value })} className="border rounded-lg px-3 py-2 text-sm">
                          <option value="">Select</option>
                          {typeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <label className="text-sm text-slate-700">How soon after waking for 1st smoke?</label>
                        <select value={smokingHistory.timeToFirstSmoke} onChange={(e) => setSmokingHistory({ ...smokingHistory, timeToFirstSmoke: e.target.value })} className="border rounded-lg px-3 py-2 text-sm">
                          <option value="">Select</option>
                          {timeToFirstOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <label className="text-sm text-slate-700">Difficult not to smoke where forbidden?</label>
                        <select value={smokingHistory.difficultWhereForbidden} onChange={(e) => setSmokingHistory({ ...smokingHistory, difficultWhereForbidden: e.target.value })} className="border rounded-lg px-3 py-2 text-sm">
                          <option value="">Select</option>
                          {yesNoOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <label className="text-sm text-slate-700">Hardest smoke to quit?</label>
                        <select value={smokingHistory.hardestToQuit} onChange={(e) => setSmokingHistory({ ...smokingHistory, hardestToQuit: e.target.value })} className="border rounded-lg px-3 py-2 text-sm">
                          <option value="">Select</option>
                          {hardestToQuitOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <label className="text-sm text-slate-700">Smoke more within first hours of waking?</label>
                        <select value={smokingHistory.smokeMoreMorning} onChange={(e) => setSmokingHistory({ ...smokingHistory, smokeMoreMorning: e.target.value })} className="border rounded-lg px-3 py-2 text-sm">
                          <option value="">Select</option>
                          {yesNoOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <label className="text-sm text-slate-700">Smoke when ill in bed?</label>
                        <select value={smokingHistory.smokeWhenIll} onChange={(e) => setSmokingHistory({ ...smokingHistory, smokeWhenIll: e.target.value })} className="border rounded-lg px-3 py-2 text-sm">
                          <option value="">Select</option>
                          {yesNoOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div className="flex items-center gap-3">
                        <button onClick={computeFagerstromScore} className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold">Score Dependence</button>
                        <div className="text-sm text-slate-700">Total Score <span className="font-bold text-blue-700">{fagerstromScore}</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border border-gray-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">About you</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <label className="text-sm text-slate-700">How many years have you smoked?</label>
                        <select value={aboutYou.yearsSmoked} onChange={(e) => setAboutYou({ ...aboutYou, yearsSmoked: e.target.value })} className="border rounded-lg px-3 py-2 text-sm">
                          <option value="">Select</option>
                          {['0 - 5 Years','6 - 10 Years','11 - 20 Years','21 - 30 Years','31 - 40 Years','41+ Years'].map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      {[
                        { key: 'smokeCannabis', label: 'Do you smoke Cannabis?' },
                        { key: 'haveChildren', label: 'Do you have children living with you?' },
                        { key: 'liveWithSmokers', label: 'Do you live with any other smokers?' },
                        { key: 'useHomeOxygen', label: 'Do you use home oxygen?' }
                      ].map(({ key, label }) => (
                        <div key={key} className="flex items-center justify-between gap-4">
                          <label className="text-sm text-slate-700">{label}</label>
                          <select value={aboutYou[key]} onChange={(e) => setAboutYou({ ...aboutYou, [key]: e.target.value })} className="border rounded-lg px-3 py-2 text-sm">
                            <option value="">Select</option>
                            {yesNoOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3">
                <button
                  onClick={() => { setSelectedConditions({}); setSelectedMentalConditions({}); setSelectedMedications({}); setSmokingHistory({ dailyAmount: '', type: '', timeToFirstSmoke: '', difficultWhereForbidden: '', hardestToQuit: '', smokeMoreMorning: '', smokeWhenIll: '' }); setAboutYou({ yearsSmoked: '', smokeCannabis: '', haveChildren: '', liveWithSmokers: '', useHomeOxygen: '' }); setFagerstromScore(0); }}
                  className="px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-slate-700 font-semibold transition"
                >
                  Clear Selection
                </button>
                <button
                  onClick={saveFormData}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white font-semibold shadow"
                >
                  Save & Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
