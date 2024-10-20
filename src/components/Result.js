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


import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = () => {
    const navigate = useNavigate();

    const goToStart = () => {
        navigate('/start'); // Navigate back to the Start page
    };

    return (
        <div>
            <h2>Your Quiz Results</h2>
            {/* Display the user's results here */}

            <button onClick={goToStart} className="btn btn-primary">
                Go to Start
            </button>
        </div>
    );
};

export default Result;
