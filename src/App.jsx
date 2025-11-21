"use client"

import { useState } from "react"

// ============================================
// ICONS
// ============================================
const Icons = {
  Book: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  ),
  VR: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  Award: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  ),
  Users: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),
  Play: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Lock: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  ),
  Check: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Star: (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Upload: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
      />
    </svg>
  ),
  TrendingUp: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  ShoppingCart: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  CreditCard: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  ),
  Bell: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  ),
  ChartBar: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
  X: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Menu: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Wifi: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
      />
    </svg>
  ),
  User: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
  ArrowRight: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  Download: (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  ),
}

// ============================================
// MOCK DATA
// ============================================
const labsData = [
  {
    id: 1,
    title: "5G Network Architecture Lab",
    description: "Hands-on experience with 5G core network components and deployment",
    category: "Telecom",
    difficulty: "Advanced",
    duration: "2 hours",
    type: "premium",
    price: 2500,
    teacher: "Dr. Karim Benzema",
    rating: 4.8,
    students: 342,
    completed: false,
  },
  {
    id: 2,
    title: "Circuit Analysis Basics",
    description: "Learn fundamental circuit theory with interactive simulations",
    category: "Engineering",
    difficulty: "Beginner",
    duration: "1.5 hours",
    type: "free",
    price: 0,
    teacher: "Prof. Amina Touati",
    rating: 4.6,
    students: 1240,
    completed: true,
  },
  {
    id: 3,
    title: "Human Anatomy VR Experience",
    description: "Explore human body systems in immersive 3D environment",
    category: "Medical",
    difficulty: "Intermediate",
    duration: "3 hours",
    type: "free",
    price: 0,
    teacher: "Dr. Leila Mansouri",
    rating: 4.9,
    students: 856,
    completed: false,
  },
  {
    id: 4,
    title: "RF Propagation & Coverage Planning",
    description: "Master radio frequency propagation and network coverage optimization",
    category: "Telecom",
    difficulty: "Advanced",
    duration: "2.5 hours",
    type: "premium",
    price: 3200,
    teacher: "Eng. Youcef Hamidi",
    rating: 4.7,
    students: 198,
    completed: false,
  },
  {
    id: 5,
    title: "Chemistry Lab Safety Protocols",
    description: "Essential safety procedures for chemistry laboratory work",
    category: "Science",
    difficulty: "Beginner",
    duration: "1 hour",
    type: "free",
    price: 0,
    teacher: "Dr. Nassima Boukhari",
    rating: 4.5,
    students: 2100,
    completed: true,
  },
  {
    id: 6,
    title: "IoT Device Programming",
    description: "Program and deploy IoT sensors with hands-on XR guidance",
    category: "Engineering",
    difficulty: "Intermediate",
    duration: "2 hours",
    type: "premium",
    price: 2800,
    teacher: "Prof. Ahmed Larbi",
    rating: 4.8,
    students: 445,
    completed: false,
  },
]

// ============================================
// LOGIN PAGE
// ============================================
const Login = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mb-4">
            <Icons.VR className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">EduXR Platform</h1>
          <p className="text-gray-600">Immersive Learning for Algeria's Future</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => onLogin("student")}
            className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            <Icons.Book className="w-12 h-12 mx-auto mb-3" />
            <div className="font-bold text-lg">Student</div>
            <div className="text-sm opacity-90 mt-1">Access Labs</div>
          </button>

          <button
            onClick={() => onLogin("teacher")}
            className="bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            <Icons.Users className="w-12 h-12 mx-auto mb-3" />
            <div className="font-bold text-lg">Teacher</div>
            <div className="text-sm opacity-90 mt-1">Create & Teach</div>
          </button>

          <button
            onClick={() => onLogin("ministry")}
            className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            <Icons.Award className="w-12 h-12 mx-auto mb-3" />
            <div className="font-bold text-lg">Ministry</div>
            <div className="text-sm opacity-90 mt-1">Admin Portal</div>
          </button>

          <button
            onClick={() => onLogin("djezzy")}
            className="bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white p-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            <Icons.Wifi className="w-12 h-12 mx-auto mb-3" />
            <div className="font-bold text-lg">Djezzy 5G</div>
            <div className="text-sm opacity-90 mt-1">Network Partner</div>
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================
// NAVBAR
// ============================================
const Navbar = ({ userType, currentPage, onNavigate, onLogout }) => {
  const getNavItems = () => {
    switch (userType) {
      case "student":
        return [
          { id: "dashboard", label: "Dashboard" },
          { id: "labs", label: "Labs" },
          { id: "marketplace", label: "Marketplace" },
          { id: "profile", label: "Profile" },
        ]
      case "teacher":
        return [
          { id: "dashboard", label: "Dashboard" },
          { id: "create", label: "Create Lab" },
          { id: "mylabs", label: "My Labs" },
          { id: "earnings", label: "Earnings" },
        ]
      case "ministry":
        return [
          { id: "dashboard", label: "Dashboard" },
          { id: "approval", label: "Approvals" },
          { id: "analytics", label: "Analytics" },
        ]
      case "djezzy":
        return [
          { id: "dashboard", label: "Dashboard" },
          { id: "network", label: "Network Stats" },
          { id: "packages", label: "5G Packages" },
        ]
      default:
        return []
    }
  }

  const getUserColor = () => {
    switch (userType) {
      case "student":
        return "from-blue-600 to-cyan-600"
      case "teacher":
        return "from-purple-600 to-pink-600"
      case "ministry":
        return "from-green-600 to-emerald-600"
      case "djezzy":
        return "from-orange-600 to-red-600"
      default:
        return "from-gray-600 to-gray-700"
    }
  }

  return (
    <nav className={`bg-gradient-to-r ${getUserColor()} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Icons.VR className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">EduXR</span>
            </div>

            <div className="hidden md:flex space-x-2">
              {getNavItems().map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === item.id
                      ? "bg-white bg-opacity-20 text-white"
                      : "text-white text-opacity-80 hover:bg-white hover:bg-opacity-10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white hover:bg-white hover:bg-opacity-10 p-2 rounded-lg">
              <Icons.Bell className="w-6 h-6" />
            </button>
            <button
              onClick={onLogout}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ============================================
// STUDENT DASHBOARD
// ============================================
const StudentDashboard = ({ onSelectLab }) => {
  const stats = {
    completed: 12,
    ongoing: 3,
    badges: 8,
    upcoming: 2,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white mb-6">
          <h1 className="text-3xl font-bold mb-2">Hello, Ahmed!</h1>
          <p className="text-blue-100">Ready for your labs today?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 rounded-lg p-3">
                <Icons.Check className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stats.completed}</div>
                <div className="text-sm text-gray-600">Labs Completed</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 rounded-lg p-3">
                <Icons.Play className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stats.ongoing}</div>
                <div className="text-sm text-gray-600">Ongoing Labs</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-100 rounded-lg p-3">
                <Icons.Award className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stats.badges}</div>
                <div className="text-sm text-gray-600">Skill Badges</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 rounded-lg p-3">
                <Icons.Bell className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stats.upcoming}</div>
                <div className="text-sm text-gray-600">Live Sessions</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Labs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labsData.map((lab) => (
            <div
              key={lab.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div
                className={`h-40 bg-gradient-to-br ${
                  lab.type === "premium" ? "from-purple-500 to-pink-500" : "from-blue-500 to-cyan-500"
                } flex items-center justify-center relative`}
              >
                <Icons.VR className="w-16 h-16 text-white opacity-50" />
                {lab.type === "premium" && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Icons.Lock className="w-3 h-3" />
                    <span>Premium</span>
                  </div>
                )}
                {lab.completed && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Icons.Check className="w-3 h-3" />
                    <span>Completed</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">{lab.title}</h3>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Icons.Star className="w-4 h-4" />
                    <span className="text-sm font-semibold">{lab.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3">{lab.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center space-x-1">
                    <Icons.Users className="w-4 h-4" />
                    <span>{lab.students}</span>
                  </span>
                  <span>{lab.duration}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">{lab.difficulty}</span>
                </div>

                <div className="flex items-center justify-between">
                  {lab.type === "premium" ? (
                    <span className="text-xl font-bold text-purple-600">{lab.price} DA</span>
                  ) : (
                    <span className="text-green-600 font-semibold">Free</span>
                  )}
                  <button
                    onClick={() => onSelectLab(lab)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      lab.type === "premium"
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    {lab.type === "premium" ? "Buy Now" : "Start Lab"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================
// LAB SESSION PAGE
// ============================================
const LabSession = ({ lab, onClose }) => {
  const [progress, setProgress] = useState(0)
  const [showCompletion, setShowCompletion] = useState(false)

  const handleComplete = () => {
    setProgress(100)
    setShowCompletion(true)
    setTimeout(() => {
      onClose()
    }, 3000)
  }

  return (
    <div className="fixed inset-0 bg-gray-900 z-50">
      <div className="bg-black bg-opacity-50 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-white">
          <Icons.VR className="w-8 h-8" />
          <div>
            <h2 className="font-bold text-lg">{lab.title}</h2>
            <p className="text-sm text-gray-300">{lab.teacher}</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white hover:bg-white hover:bg-opacity-10 p-2 rounded-lg">
          <Icons.X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 3D Viewer */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl h-96 flex items-center justify-center text-white">
                <div className="text-center">
                  <Icons.VR className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-xl font-semibold">3D Lab Environment</p>
                  <p className="text-sm text-blue-100 mt-2">WebXR/Unity Viewer Would Load Here</p>
                </div>
              </div>
            </div>

            {/* Lab Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Lab Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Completion</span>
                    <span className="font-bold text-gray-900">{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Tasks</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icons.Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-700">Initial Setup</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icons.Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-700">Equipment Configuration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-gray-300 rounded border-2 border-gray-400"></div>
                      <span className="text-sm text-gray-700">Run Experiment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-gray-300 rounded border-2 border-gray-400"></div>
                      <span className="text-sm text-gray-700">Analyze Results</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleComplete}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mt-4 transition-colors"
                >
                  Complete Lab
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCompletion && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Icons.Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Lab Completed!</h3>
            <p className="text-gray-600 mb-4">You've earned a skill badge</p>
            <div className="bg-yellow-100 rounded-lg p-4 text-center">
              <Icons.Award className="w-8 h-8 text-yellow-600 mx-auto" />
              <p className="text-sm font-semibold text-gray-900 mt-2">XR Expert Badge</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================
// PAYMENT MODAL
// ============================================
const PaymentModal = ({ lab, onClose, onComplete }) => {
  const [cardNumber, setCardNumber] = useState("")

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Secure Payment</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <Icons.X className="w-6 h-6" />
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-600 mb-1">Lab</p>
          <p className="font-bold text-gray-900 mb-3">{lab.title}</p>
          <div className="flex items-center justify-between pt-4 border-t border-purple-200">
            <span className="text-gray-700 font-semibold">Total Amount</span>
            <span className="text-2xl font-bold text-purple-600">{lab.price} DA</span>
          </div>
        </div>

        <form className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Ahmed Benali"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.slice(0, 19))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="CVC"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </form>

        <button
          onClick={() => {
            onComplete(lab)
            onClose()
          }}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
        >
          Pay Now
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">Your payment is secured with 256-bit encryption</p>
      </div>
    </div>
  )
}

// ============================================
// TEACHER DASHBOARD
// ============================================
const TeacherDashboard = () => {
  const stats = {
    labsCreated: 6,
    studentsEnrolled: 4521,
    revenue: 145600,
    avgRating: 4.7,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 text-white mb-6">
          <h1 className="text-3xl font-bold mb-2">Welcome Back, Dr. Karim!</h1>
          <p className="text-purple-100">Manage your labs and track student progress</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 rounded-lg p-3">
                <Icons.Book className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stats.labsCreated}</div>
                <div className="text-sm text-gray-600">Labs Created</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 rounded-lg p-3">
                <Icons.Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stats.studentsEnrolled}</div>
                <div className="text-sm text-gray-600">Students Enrolled</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-100 rounded-lg p-3">
                <Icons.TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stats.revenue.toLocaleString()} DA</div>
                <div className="text-sm text-gray-600">Total Revenue</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 rounded-lg p-3">
                <Icons.Star className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stats.avgRating}</div>
                <div className="text-sm text-gray-600">Avg. Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">My Labs Performance</h2>
            <div className="space-y-4">
              {labsData
                .filter((l) => l.type === "premium")
                .slice(0, 3)
                .map((lab) => (
                  <div key={lab.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{lab.title}</p>
                      <p className="text-sm text-gray-600">{lab.students} students enrolled</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-purple-600">{lab.price * 10} DA</p>
                      <p className="text-sm text-gray-600">{lab.rating} rating</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <Icons.Upload className="w-5 h-5" />
                <span>Create New Lab</span>
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <Icons.Users className="w-5 h-5" />
                <span>View Students</span>
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <Icons.Download className="w-5 h-5" />
                <span>Download Reports</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MINISTRY DASHBOARD
// ============================================
const MinistryDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-8 text-white mb-6">
          <h1 className="text-3xl font-bold mb-2">Ministry Admin Portal</h1>
          <p className="text-green-100">National Education Analytics & Lab Approval</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 rounded-lg p-3">
                <Icons.Book className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">342</div>
                <div className="text-sm text-gray-600">Active Labs</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 rounded-lg p-3">
                <Icons.Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">89.2K</div>
                <div className="text-sm text-gray-600">Total Students</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-100 rounded-lg p-3">
                <Icons.ChartBar className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">94%</div>
                <div className="text-sm text-gray-600">Completion Rate</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 rounded-lg p-3">
                <Icons.Award className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">32.5K</div>
                <div className="text-sm text-gray-600">Badges Awarded</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Pending Lab Approvals</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
                <p className="font-semibold text-gray-900">Advanced Robotics Lab</p>
                <p className="text-sm text-gray-600">Submitted by Prof. Ahmed Larbi</p>
                <button className="mt-2 text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded">
                  Approve
                </button>
              </div>
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
                <p className="font-semibold text-gray-900">Biotech Engineering</p>
                <p className="text-sm text-gray-600">Submitted by Dr. Nassima Boukhari</p>
                <button className="mt-2 text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded">
                  Approve
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">National Metrics</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Engineering Labs</span>
                  <span className="font-bold">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Medical Labs</span>
                  <span className="font-bold">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Telecom Labs</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// DJEZZY 5G DASHBOARD
// ============================================
const DjezzyDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white mb-6">
          <h1 className="text-3xl font-bold mb-2">Djezzy 5G Network Dashboard</h1>
          <p className="text-orange-100">Monitor XR lab streaming & 5G performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 rounded-lg p-3">
                <Icons.Wifi className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">12.4 Gbps</div>
                <div className="text-sm text-gray-600">5G Throughput</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 rounded-lg p-3">
                <Icons.ChartBar className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">3.2ms</div>
                <div className="text-sm text-gray-600">Avg. Latency</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-100 rounded-lg p-3">
                <Icons.Users className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">2,341</div>
                <div className="text-sm text-gray-600">Active Sessions</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 rounded-lg p-3">
                <Icons.TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">+18%</div>
                <div className="text-sm text-gray-600">Weekly Growth</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Network Performance</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>5G Coverage</span>
                  <span className="font-bold">96%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: "96%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Network Uptime</span>
                  <span className="font-bold">99.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "99.8%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Bandwidth Utilization</span>
                  <span className="font-bold">72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "72%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5G Packages</h2>
            <div className="space-y-3">
              <div className="border rounded-lg p-4">
                <p className="font-semibold text-gray-900">EDU 5G Essential</p>
                <p className="text-sm text-gray-600">10 Mbps, 50GB/month</p>
                <p className="text-orange-600 font-bold mt-2">4,990 DA/month</p>
              </div>
              <div className="border border-orange-600 bg-orange-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900">EDU 5G Pro</p>
                <p className="text-sm text-gray-600">50 Mbps, 500GB/month</p>
                <p className="text-orange-600 font-bold mt-2">9,990 DA/month</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="font-semibold text-gray-900">EDU 5G Elite</p>
                <p className="text-sm text-gray-600">100 Mbps, Unlimited</p>
                <p className="text-orange-600 font-bold mt-2">19,990 DA/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// STUDENT PROFILE
// ============================================
const StudentProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-32"></div>
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:space-x-4 -mt-16 mb-6">
              <div className="bg-white rounded-lg p-2 shadow-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Icons.User className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex-1">
                <h1 className="text-3xl font-bold text-gray-900">Ahmed Benali</h1>
                <p className="text-gray-600">Engineering Student • USTHB</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Labs Completed</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Skill Badges</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Total Learning Hours</p>
                <p className="text-2xl font-bold text-gray-900">48</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Certifications</h2>
            <div className="space-y-3">
              {[
                { title: "Circuit Analysis Expert", date: "Nov 2024", icon: "🏆" },
                { title: "5G Technology Fundamentals", date: "Oct 2024", icon: "📡" },
                { title: "IoT Programming Master", date: "Sep 2024", icon: "⚙️" },
              ].map((cert, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{cert.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{cert.title}</p>
                      <p className="text-sm text-gray-600">{cert.date}</p>
                    </div>
                  </div>
                  <Icons.Download className="w-5 h-5 text-blue-600 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Skills Progress</h2>
            <div className="space-y-4">
              {[
                { name: "Circuit Design", progress: 85 },
                { name: "5G Networks", progress: 72 },
                { name: "XR Technology", progress: 65 },
                { name: "IoT Systems", progress: 78 },
              ].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-gray-600">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MAIN APP
// ============================================
export default function App() {
  const [userType, setUserType] = useState(null)
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [selectedLab, setSelectedLab] = useState(null)
  const [showPayment, setShowPayment] = useState(false)
  const [purchasedLabs, setPurchasedLabs] = useState([])

  const handleSelectLab = (lab) => {
    if (lab.type === "premium" && !purchasedLabs.includes(lab.id)) {
      setShowPayment(true)
      setSelectedLab(lab)
    } else {
      setSelectedLab(lab)
    }
  }

  const handlePaymentComplete = (lab) => {
    setPurchasedLabs([...purchasedLabs, lab.id])
    setSelectedLab(lab)
  }

  const renderPage = () => {
    if (!userType) {
      return <Login onLogin={setUserType} />
    }

    switch (currentPage) {
      case "dashboard":
        if (userType === "student") return <StudentDashboard onSelectLab={handleSelectLab} />
        if (userType === "teacher") return <TeacherDashboard />
        if (userType === "ministry") return <MinistryDashboard />
        if (userType === "djezzy") return <DjezzyDashboard />
        break
      case "profile":
        return <StudentProfile />
      default:
        return <StudentDashboard onSelectLab={handleSelectLab} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {userType && (
        <Navbar
          userType={userType}
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          onLogout={() => setUserType(null)}
        />
      )}
      {renderPage()}
      {selectedLab && !showPayment && <LabSession lab={selectedLab} onClose={() => setSelectedLab(null)} />}
      {showPayment && selectedLab && (
        <PaymentModal
          lab={selectedLab}
          onClose={() => setShowPayment(false)}
          onComplete={(lab) => {
            handlePaymentComplete(lab)
            setShowPayment(false)
          }}
        />
      )}
    </div>
  )
}
