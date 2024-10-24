// // src/components/UploadQue.js
// import React, { useState } from 'react';
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from '../firebase'; // Import Firestore configuration
// import { useNavigate } from 'react-router-dom'; // For navigation

// const UploadQue = () => {
//     const [question, setQuestion] = useState('');
//     const [options, setOptions] = useState(['', '', '', '']);
//     const [answer, setAnswer] = useState('');
//     const [error, setError] = useState(''); // For error messages
//     const navigate = useNavigate(); // Initialize useNavigate for redirection

//     // Update options array dynamically
//     const handleOptionChange = (index, value) => {
//         const newOptions = [...options];
//         newOptions[index] = value;
//         setOptions(newOptions);
//     };

//     // Upload question to Firestore
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!question || options.some(option => option === '') || !answer) {
//             setError('Please fill in all fields!'); // Set error message
//             return;
//         }

//         try {
//             await addDoc(collection(db, 'quizzes'), {
//                 question: question,
//                 options: options,
//                 answer: answer
//             });

//             // Reset form after successful submission
//             setQuestion('');
//             setOptions(['', '', '', '']);
//             setAnswer('');
//             setError(''); // Clear error

//             alert('Question uploaded successfully!');
//         } catch (error) {
//             console.error('Error uploading question: ', error);
//             setError('Failed to upload question. Please try again.'); // Set error message
//         }
//     };

//     return (
//         <section className='text-white text-center bg-dark vh-100 d-flex align-items-center justify-content-center'>
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-lg-8">
//                         <h1 className='fw-bold mb-4'>Upload Quiz Question</h1>
//                         {error && <div className="alert alert-danger">{error}</div>} {/* Error message */}
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-3">
//                                 <input
//                                     type="text"
//                                     className="form-control text-center"
//                                     value={question}
//                                     onChange={(e) => setQuestion(e.target.value)}
//                                     placeholder="Enter the quiz question"
//                                     required
//                                 />
//                             </div>

//                             <div className="mb-3">
//                                 {options.map((option, index) => (
//                                     <input
//                                         key={index}
//                                         type="text"
//                                         className="form-control text-center mb-2"
//                                         value={option}
//                                         onChange={(e) => handleOptionChange(index, e.target.value)}
//                                         placeholder={`Option ${index + 1}`}
//                                         required
//                                     />
//                                 ))}
//                             </div>

//                             <div className="mb-3">
//                                 <input
//                                     type="text"
//                                     className="form-control text-center"
//                                     value={answer}
//                                     onChange={(e) => setAnswer(e.target.value)}
//                                     placeholder="Enter the correct answer"
//                                     required
//                                 />
//                             </div>

//                             <button type="submit" className="btn px-4 py-2 bg-light text-dark fw-bold">
//                                 Upload Question
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default UploadQue;



// src/components/UploadQue.js
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Import Firestore configuration
import { useNavigate } from 'react-router-dom'; // For navigation

const UploadQue = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(''); // For error messages
    const navigate = useNavigate(); // Initialize useNavigate for redirection

    // Update options array dynamically
    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    // Upload question to Firestore
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!question || options.some(option => option === '') || !answer) {
            setError('Please fill in all fields!'); // Set error message
            return;
        }

        try {
            await addDoc(collection(db, 'quizzes'), {
                question: question,
                options: options,
                answer: answer
            });

            // Reset form after successful submission
            setQuestion('');
            setOptions(['', '', '', '']);
            setAnswer('');
            setError(''); // Clear error

            alert('Question uploaded successfully!');
        } catch (error) {
            console.error('Error uploading question: ', error);
            setError('Failed to upload question. Please try again.'); // Set error message
        }
    };

    return (
        <section style={{ backgroundColor: '#343a40', color: 'white', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '800px' }}>
                <h1 style={{ fontWeight: 'bold', marginBottom: '20px', fontSize: '2.5rem' }}>Upload Quiz Question</h1>
                {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>} {/* Error message */}
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            style={{ width: '100%', padding: '10px', textAlign: 'center' }}
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Enter the quiz question"
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        {options.map((option, index) => (
                            <input
                                key={index}
                                type="text"
                                style={{ width: '100%', padding: '10px', textAlign: 'center', marginBottom: '10px' }}
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                placeholder={`Option ${index + 1}`}
                                required
                            />
                        ))}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            style={{ width: '100%', padding: '10px', textAlign: 'center' }}
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Enter the correct answer"
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        style={{ padding: '10px 16px', backgroundColor: '#f8f9fa', color: '#343a40', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    >
                        Upload Question
                    </button>
                </form>
            </div>
        </section>
    );
};

export default UploadQue;
