import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { MyTasks } from './components/MyTasks';
import { Profile } from './components/Profile';
import { Categories } from './components/Categories';
import { Teams } from './components/Teams';
import { AddTask } from './components/AddTask';
import { TaskDetails } from './components/TaskDetails';
import { LandingPage } from './components/LandingPage';
import { Login } from './components/Login';
import { Register } from './components/Register';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const publicPaths = ['/', '/login', '/register'];
  const showNavigation = !publicPaths.includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#1a1e2e]">
      {showNavigation && (
        <>
          <Sidebar />
          <Header />
        </>
      )}
      {children}
    </div>
  );
};

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<MyTasks />} />
          <Route path="/tasks/add" element={<AddTask />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Layout>
    </Router>
  );
};