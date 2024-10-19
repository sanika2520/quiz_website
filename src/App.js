



// import React, { useState } from 'react';
// import Signup from './components/Signup';
// import Login from './components/Login';
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
//         setCurrentPage('login');
//     };

//     const goToStudentLogin = () => {
//         setUserRole('Student');
//         setCurrentPage('login');
//     };

//     const goToLogin = () => setCurrentPage('login');
//     const goToSignup = () => setCurrentPage('signup');
//     const goToStart = () => setCurrentPage('start'); // Change to go to Start
//     const goToQuiz = () => setCurrentPage('quiz'); // Change this to 'quiz'

//     return (
//         <DataProvider>
//             {currentPage === 'chooseRole' && <ChooseRole goToAdminLogin={goToAdminLogin} goToStudentLogin={goToStudentLogin} />}
//             {currentPage === 'signup' && <Signup goToLogin={goToLogin} />}
//             {currentPage === 'login' && <Login role={userRole} goToSignup={goToSignup} goToStart={goToStart} />} {/* Pass goToStart */}
//             {currentPage === 'start' && <Start goToQuiz={goToQuiz} />} {/* Pass goToQuiz here */}
//             {currentPage === 'quiz' && <Quiz />} {/* Ensure this is the Quiz component */}
//             {currentPage === 'result' && <Result />}
//         </DataProvider>
//     );
// }

// export default App;



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
//     const goToQuiz = () => setCurrentPage('quiz'); // Change this to 'quiz'

//     return (
//         <DataProvider>
//             {currentPage === 'chooseRole' && <ChooseRole goToAdminLogin={goToAdminLogin} goToStudentLogin={goToStudentLogin} />}
//             {currentPage === 'signup' && <Signup goToLogin={goToLogin} />}
//             {/* Render AdminLogin for Admin role */}
//             {currentPage === 'adminLogin' && <AdminLogin role={userRole} goToStart={goToStart} />} 
//             {/* Render Student Login for Student role */}
//             {currentPage === 'login' && <Login role={userRole} goToSignup={goToSignup} goToStart={goToStart} />}
//             {currentPage === 'start' && <Start goToQuiz={goToQuiz} />} {/* Pass goToQuiz here */}
//             {currentPage === 'quiz' && <Quiz />} {/* Ensure this is the Quiz component */}
//             {currentPage === 'result' && <Result />}
//         </DataProvider>
//     );
// }

// export default App;


import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin'; // Import AdminLogin component
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import ChooseRole from './components/ChooseRole'; // New component
import { DataProvider } from './context/dataContext';

function App() {
    const [currentPage, setCurrentPage] = useState('chooseRole'); // Default to role selection
    const [userRole, setUserRole] = useState(''); // Store the selected role

    const goToAdminLogin = () => {
        setUserRole('Admin');
        setCurrentPage('adminLogin'); // Change to admin login
    };

    const goToStudentLogin = () => {
        setUserRole('Student');
        setCurrentPage('login'); // Student login
    };

    const goToLogin = () => setCurrentPage('login');
    const goToSignup = () => setCurrentPage('signup');
    const goToStart = () => setCurrentPage('start'); // Change to go to Start
    const goToQuiz = () => {
        if (userRole === 'Student') {
            setCurrentPage('quiz'); // Only allow students to access quiz
        }
    }; 

    return (
        <DataProvider>
            {currentPage === 'chooseRole' && <ChooseRole goToAdminLogin={goToAdminLogin} goToStudentLogin={goToStudentLogin} />}
            {currentPage === 'signup' && <Signup goToLogin={goToLogin} />}
            {/* Render AdminLogin for Admin role */}
            {currentPage === 'adminLogin' && <AdminLogin role={userRole} goToStart={goToStart} />} 
            {/* Render Student Login for Student role */}
            {currentPage === 'login' && <Login role={userRole} goToSignup={goToSignup} goToStart={goToStart} />}
            {currentPage === 'start' && <Start goToQuiz={goToQuiz} />} {/* Pass goToQuiz here */}
            {/* Render Quiz only if the user role is Student */}
            {currentPage === 'quiz' && userRole === 'Student' && <Quiz />}
            {currentPage === 'result' && <Result />}
        </DataProvider>
    );
}

export default App;
