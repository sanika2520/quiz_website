// //src/components/Result.js
// import React, { useContext } from 'react';
// import DataContext from '../context/dataContext';

// const Result = () => {
//     const { showResult, quizs, marks, startOver }  = useContext(DataContext);
//     return (
//         <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
//             <div className="container">
//                 <div className="row vh-100 align-items-center justify-content-center">
//                     <div className="col-lg-6">
//                         <div className={`text-light text-center p-5 rounded ${marks > (quizs.length * 5 / 2) ? 'bg-success' : 'bg-danger'}`}>
//                             <h1 className='mb-2 fw-bold'>{marks > (quizs.length * 5 / 2) ? 'Awesome!' : 'Oops!'}</h1>
//                             <h3 className='mb-3 fw-bold'>Your score is {marks} out of {quizs.length * 5}</h3>

//                             <button onClick={startOver} className='btn py-2 px-4 btn-light fw-bold d-inline'>Start Over</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Result;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Result = () => {
//     const navigate = useNavigate();

//     const goToStart = () => {
//         navigate('/start'); // Navigate back to the Start page
//     };

//     return (
//         <div>
//             <h2>Your Quiz Results</h2>
//             {/* Display the user's results here */}

//             <button onClick={goToStart} className="btn btn-primary">
//                 Go to Start
//             </button>
//         </div>
//     );
// };

// export default Result;


// // src/components/Result.js
// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DataContext from '../context/dataContext';

// const Result = () => {
//     const { marks, quizs } = useContext(DataContext); // Get marks and quizs from context
//     const navigate = useNavigate();

//     const goToStart = () => {
//         navigate('/start'); // Navigate back to the Start page
//     };

//     return (
//         <div className="container text-center">
//             <h2>Your Quiz Results</h2>
//             <p>You scored {marks} out of {quizs.length } points!</p> {/* Assuming 5 points per question */}
//             <button onClick={goToStart} className="btn btn-primary">
//                 Go to Start
//             </button>
//         </div>
//     );
// };

// export default Result;


// // src/components/Result.js
// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DataContext from '../context/dataContext';

// const Result = () => {
//     const { marks, quizs } = useContext(DataContext); // Get marks and quizs from context
//     const navigate = useNavigate();

//     const goToStart = () => {
//         navigate('/start'); // Navigate back to the Start page
//     };

//     return (
//         <section className="bg-dark text-white vh-100">
//             <div className="container">
//                 <div className="row vh-100 align-items-center justify-content-center">
//                     <div className="col-lg-8">
//                         <div className="card p-4" style={{ background: '#3d3d3d', borderColor: '#646464' }}>
//                             <h2 className="text-center mb-4" style={{ color: '#60d600' }}>
//                                 Your Quiz Results
//                             </h2>
//                             <p className="text-center mb-3" style={{ fontSize: '1.2rem' }}>
//                                 You scored <span style={{ fontWeight: 'bold' }}>{marks}</span> out of{' '}
//                                 <span style={{ fontWeight: 'bold' }}>{quizs.length }</span> points!
//                             </p> {/* Assuming 5 points per question */}

//                             <button onClick={goToStart} className="btn py-2 w-100 bg-primary text-light fw-bold">
//                                 Go to Start
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Result;


// // src/components/Result.js
// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DataContext from '../context/dataContext';

// const Result = () => {
//     const { marks, quizs } = useContext(DataContext); // Get marks and quizs from context
//     const navigate = useNavigate();

//     const goToStart = () => {
//         navigate('/start'); // Navigate back to the Start page
//     };

//     return (
//         <section className="bg-dark text-white vh-100">
//             <div className="container">
//                 <div className="row vh-100 align-items-center justify-content-center">
//                     <div className="col-lg-8">
//                         <div className="card p-4" style={{ background: '#3d3d3d', borderColor: '#646464', color: 'white' }}>
//                             <h2 className="text-center mb-4" style={{ color: '#ffffff' }}>
//                                 Your Quiz Results
//                             </h2>
//                             <p className="text-center mb-3" style={{ fontSize: '1.2rem', color: '#ffffff' }}>
//                                 You scored <span style={{ fontWeight: 'bold', color: '#ffffff' }}>{marks}</span> out of{' '}
//                                 <span style={{ fontWeight: 'bold', color: '#ffffff' }}>{quizs.length}</span> points!
//                             </p>

//                             <button onClick={goToStart} className="btn py-2 w-100 bg-primary text-light fw-bold">
//                                 Go to Start
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Result;


// src/components/Result.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/dataContext';

const Result = () => {
    const { marks, quizs } = useContext(DataContext); // Get marks and quizs from context
    const navigate = useNavigate();

    const goToStart = () => {
        navigate('/start'); // Navigate back to the Start page
    };

    return (
        <section style={{ backgroundColor: '#333', color: 'white', minHeight: '100vh' }}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{ padding: '20px', backgroundColor: '#444', borderRadius: '10px', color: 'white' }}>
                        <h2 style={{ marginBottom: '20px', color: '#ffffff' }}>
                            Your Quiz Results
                        </h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#ffffff' }}>
                            You scored <span style={{ fontWeight: 'bold', color: '#ffffff' }}>{marks}</span> out of{' '}
                            <span style={{ fontWeight: 'bold', color: '#ffffff' }}>{quizs.length}</span> points!
                        </p>

                        <button
                            onClick={goToStart}
                            style={{
                                padding: '10px',
                                width: '100%',
                                backgroundColor: '#007bff',
                                color: 'white',
                                fontWeight: 'bold',
                                border: 'none',
                                borderRadius: '5px',
                            }}
                        >
                            Go to Start
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;
