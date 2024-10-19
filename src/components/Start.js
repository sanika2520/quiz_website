


// import React, { useContext } from 'react';
// import DataContext from '../context/dataContext';

// const Start = () => {
//     const { startQuiz, showStart } = useContext(DataContext);

//     return (
//         <section className='text-white text-center bg-dark vh-100' style={{ display: showStart ? 'block' : 'none' }}>
//             <div className="container">
//                 <div className="row vh-100 align-items-center justify-content-center">
//                     <div className="col-lg-8">
//                         <h1 className='fw-bold mb-4'>Basic React JS Quiz</h1>
//                         <button onClick={startQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">Start Quiz</button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Start;



// src/components/Start.js
import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Start = ({ goToQuiz }) => {
    const { startQuiz } = useContext(DataContext);

    const handleStartQuiz = () => {
        startQuiz(); // Start the quiz in the context
        goToQuiz(); // Change the current page to quiz
    }

    return (
        <section className='text-white text-center bg-dark vh-100'>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>Basic React JS Quiz</h1>
                        <button onClick={handleStartQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">Start Quiz</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
