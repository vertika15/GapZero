import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import StudentDashboard from './pages/StudentDashboard.jsx'
import TeacherDashboard from './pages/TeacherDashboard.jsx'
import AdminPanel from './pages/AdminPanel.jsx'
import Course from './pages/Course.jsx'
import Assessment from './pages/Assessment.jsx'
import GapAnalysis from './pages/GapAnalysis.jsx'
import LearningPath from './pages/LearningPath.jsx'
import Profile from './pages/Profile.jsx'
import Onboarding from './pages/Onboarding.jsx'
import LessonViewer from './pages/LessonViewer.jsx'
import TutorChat from './pages/TutorChat.jsx'
import DailyPlan from './pages/DailyPlan.jsx'
import Progress from './pages/Progress.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neon-animated text-white">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/admin" element={<AdminPanel />} />
          <Route path="/course" element={<Course />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/gap-analysis" element={<GapAnalysis />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/lessons" element={<LessonViewer />} />
          <Route path="/tutor" element={<TutorChat />} />
          <Route path="/daily" element={<DailyPlan />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
