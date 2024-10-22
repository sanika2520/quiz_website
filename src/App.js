// import React, { useState } from 'react';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import AdminLogin from './components/AdminLogin'; // Import AdminLogin component
// import Start from './components/Start';
// import Quiz from './components/Quiz';
// import Result from './components/Result';
// import ChooseRole from './components/ChooseRole'; // New component
// import { DataProvider } from './context/dataContext';

// function App() {
//     const [currentPage, setCurrentPage] = useState('chooseRole'); // Default to role selection
//     const [userRole, setUserRole] = useState(''); // Store the selected role

//     const goToAdminLogin = () => {
//         setUserRole('Admin');
//         setCurrentPage('adminLogin'); // Change to admin login
//     };

//     const goToStudentLogin = () => {
//         setUserRole('Student');
//         setCurrentPage('login'); // Student login
//     };

//     const goToLogin = () => setCurrentPage('login');
//     const goToSignup = () => setCurrentPage('signup');
//     const goToStart = () => setCurrentPage('start'); // Change to go to Start
//     const goToQuiz = () => {
//         if (userRole === 'Student') {
//             setCurrentPage('quiz'); // Only allow students to access quiz
//         }
//     }; 

//     return (
//         <DataProvider>
//             {currentPage === 'chooseRole' && <ChooseRole goToAdminLogin={goToAdminLogin} goToStudentLogin={goToStudentLogin} />}
//             {currentPage === 'signup' && <Signup goToLogin={goToLogin} />}
//             {/* Render AdminLogin for Admin role */}
//             {currentPage === 'adminLogin' && <AdminLogin role={userRole} goToStart={goToStart} />} 
//             {/* Render Student Login for Student role */}
//             {currentPage === 'login' && <Login role={userRole} goToSignup={goToSignup} goToStart={goToStart} />}
//             {currentPage === 'start' && <Start goToQuiz={goToQuiz} />} {/* Pass goToQuiz here */}
//             {/* Render Quiz only if the user role is Student */}
//             {currentPage === 'quiz' && userRole === 'Student' && <Quiz />}
//             {currentPage === 'result' && <Result />}
//         </DataProvider>
//     );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import AdminLogin from './components/AdminLogin';
// import Start from './components/Start';
// import Quiz from './components/Quiz';
// import Result from './components/Result';
// import ChooseRole from './components/ChooseRole';
// import { DataProvider } from './context/dataContext';

// function App() {
//     return (
//         <DataProvider>
//             <Router>
//                 <Routes>
//                     {/* Default Route to Choose Role */}
//                     <Route path="/" element={<ChooseRole />} />
                    
//                     {/* Admin login route */}
//                     <Route path="/admin-login" element={<AdminLogin />} />
                    
//                     {/* Student login route */}
//                     <Route path="/login" element={<Login />} />
                    
//                     {/* Signup route */}
//                     <Route path="/signup" element={<Signup />} />
                    
//                     {/* Start page (after login) */}
//                     <Route path="/start" element={<Start />} />
                    
//                     {/* Quiz page */}
//                     <Route path="/quiz" element={<Quiz />} />
                    
//                     {/* Result page */}
//                     <Route path="/result" element={<Result />} />
//                 </Routes>
//             </Router>
//         </DataProvider>
//     );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ChooseRole from './components/ChooseRole';
// import AdminLogin from './components/AdminLogin';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Start from './components/Start';
// import Quiz from './components/Quiz';
// import Result from './components/Result';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<ChooseRole />} />
//                 <Route path="/admin-login" element={<AdminLogin />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/start" element={<Start />} />
//                 <Route path="/quiz" element={<Quiz />} />
//                 <Route path="/result" element={<Result />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ChooseRole from './components/ChooseRole';
// import AdminLogin from './components/AdminLogin';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Start from './components/Start';
// import Quiz from './components/Quiz';
// import Result from './components/Result';
// import UploadQue from './components/UploadQue';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<ChooseRole />} />
//                 <Route path="/admin-login" element={<AdminLogin />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/start" element={<Start />} />
//                 <Route path="/quiz" element={<Quiz />} />
//                 <Route path="/result" element={<Result />} />
//                 <Route path="/upload-question" element={<UploadQue/>}/>
//             </Routes>
//         </Router>
//     );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChooseRole from './components/ChooseRole';
import AdminLogin from './components/AdminLogin';
import Login from './components/Login';
import Signup from './components/Signup';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import UploadQue from './components/UploadQue';
import { DataProvider } from './context/dataContext'; // Wrap everything in DataProvider

function App() {
    return (
        <DataProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<ChooseRole />} />
                    <Route path="/admin-login" element={<AdminLogin />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/start" element={<Start />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/upload-question" element={<UploadQue/>} />
                </Routes>
            </Router>
        </DataProvider>
    );
}

export default App;