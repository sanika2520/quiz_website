
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Start = () => {
//     const navigate = useNavigate();

//     const startQuiz = () => {
//         navigate('/quiz'); // Navigate to the Quiz page
//     };

//     return (
//         <div className="text-center">
//             <h2>Welcome to the Quiz Application!</h2>
//             <button onClick={startQuiz} className="btn btn-primary">
//                 Start Quiz
//             </button>
//         </div>
//     );
// };

// export default Start;


// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DataContext from '../context/dataContext';

// const Start = () => {
//     const { startQuiz } = useContext(DataContext);
//     const navigate = useNavigate(); // Hook for navigation

//     const handleStartQuiz = () => {
//         startQuiz(); // Start the quiz in the context
//         navigate('/quiz'); // Navigate to the quiz page
//     };

//     return (
//         <section className='text-white text-center bg-dark vh-100'>
//             <div className="container">
//                 <div className="row vh-100 align-items-center justify-content-center">
//                     <div className="col-lg-8">
//                         <h1 className='fw-bold mb-4'>Basic React JS Quiz</h1>
//                         <button onClick={handleStartQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">Start Quiz</button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Start;


import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/dataContext';

const Start = () => {
    const { startQuiz } = useContext(DataContext);
    const navigate = useNavigate(); // Hook for navigation

    const handleStartQuiz = () => {
        startQuiz(); // Start the quiz in the context
        navigate('/quiz'); // Navigate to the quiz page
    };

    return (
        <section style={{ backgroundColor: '#343a40', color: 'white', height: '100vh', textAlign: 'center' }}>
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ maxWidth: '600px', width: '100%' }}>
                    <h1 style={{ fontWeight: 'bold', marginBottom: '20px', fontSize: '2.5rem' }}>Basic React JS Quiz</h1>
                    <button 
                        onClick={handleStartQuiz} 
                        style={{ padding: '10px 16px', backgroundColor: '#f8f9fa', color: '#343a40', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Start;
