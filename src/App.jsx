import React from 'react';
import BiodataDiri from './components/BiodataDiri';
import StudentRequestForm from './components/StudentRequestForm';
import CampusServiceDashboard from './components/CampusServiceDashboard';
import './styles/custom.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BiodataDiri />
      <StudentRequestForm />
      <CampusServiceDashboard />
    </div>
  );
}

export default App;