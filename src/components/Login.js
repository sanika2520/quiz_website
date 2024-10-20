// src/components/Login.js
// import React, { useState } from 'react';
// import { auth } from '../firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';

// const Login = ({ role, goToSignup, goToStart }) => { // Change goToQuiz to goToStart
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//             console.log(`${role} Logged In:`, email);
//             goToStart(); // Navigate to Start page after successful login
//         } catch (err) {
//             setError(err.message); // Set error message if login fails
//         }
//     };

//     return (
//         <section className="text-white text-center bg-dark vh-100">
//             <div className="container h-100">
//                 <div className="row h-100 align-items-center justify-content-center">
//                     <div className="col-lg-6">
//                         <h1 className='fw-bold mb-4'>Login as {role}</h1>
//                         {error && <div className="alert alert-danger">{error}</div>}
//                         <form onSubmit={handleLogin} className="card p-4 bg-secondary">
//                             <div className="mb-3">
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     placeholder="Email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <input
//                                     type="password"
//                                     className="form-control"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit" className="btn btn-light fw-bold w-100">Login</button>
//                             <p className="mt-3 text-light">Don't have an account? <span onClick={goToSignup} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Sign Up</span></p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//             console.log("Student Logged In:", email);
//             navigate('/start'); // Navigate to the Start page
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     return (
//         <section className="text-white text-center bg-dark vh-100">
//             <div className="container h-100">
//                 <div className="row h-100 align-items-center justify-content-center">
//                     <div className="col-lg-6">
//                         <h1 className='fw-bold mb-4'>Student Login</h1>
//                         {error && <div className="alert alert-danger">{error}</div>}
//                         <form onSubmit={handleLogin} className="card p-4 bg-secondary">
//                             <div className="mb-3">
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     placeholder="Email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <input
//                                     type="password"
//                                     className="form-control"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit" className="btn btn-light fw-bold w-100">Login</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Login;


// import React, { useState } from 'react';
// import { auth } from '../firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ role, goToStart }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
    
//     const navigate = useNavigate(); // Hook for navigation

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//             console.log(`${role} Logged In:`, email);
//             goToStart(); // Navigate to Start page after successful login
//         } catch (err) {
//             setError(err.message); // Set error message if login fails
//         }
//     };

//     const goToSignup = () => {
//         navigate('/signup'); // Navigate to the signup page
//     };

//     const goToStart = () =>{
//         navigate('/start');
//     }
//     return (
//         <section className="text-white text-center bg-dark vh-100">
//             <div className="container h-100">
//                 <div className="row h-100 align-items-center justify-content-center">
//                     <div className="col-lg-6">
//                         <h1 className='fw-bold mb-4'>Login{role}</h1>
//                         {error && <div className="alert alert-danger">{error}</div>}
//                         <form onSubmit={handleLogin} className="card p-4 bg-secondary">
//                             <div className="mb-3">
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     placeholder="Email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <input
//                                     type="password"
//                                     className="form-control"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit" className="btn btn-light fw-bold w-100">Login</button>
//                             <p className="mt-3 text-light">
//                                 Don't have an account? 
//                                 <span 
//                                     onClick={goToSignup} 
//                                     style={{ cursor: 'pointer', textDecoration: 'underline' }}>
//                                     Sign Up
//                                 </span>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Login;


// import React, { useState } from 'react';
// import { auth } from '../firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ role, goToStart }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
    
//     const navigate = useNavigate(); // Hook for navigation

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//             console.log(`${role} Logged In:`, email);
//             goToStart(); // Use the goToStart prop directly
//         } catch (err) {
//             setError(err.message); // Set error message if login fails
//         }
//     };

//     const goToSignup = () => {
//         navigate('/signup'); // Navigate to the signup page
//     };

//     return (
//         <section className="text-white text-center bg-dark vh-100">
//             <div className="container h-100">
//                 <div className="row h-100 align-items-center justify-content-center">
//                     <div className="col-lg-6">
//                         <h1 className='fw-bold mb-4'>Login {role}</h1>
//                         {error && <div className="alert alert-danger">{error}</div>}
//                         <form onSubmit={handleLogin} className="card p-4 bg-secondary">
//                             <div className="mb-3">
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     placeholder="Email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <input
//                                     type="password"
//                                     className="form-control"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit" className="btn btn-light fw-bold w-100">Login</button>
//                             <p className="mt-3 text-light">
//                                 Don't have an account? 
//                                 <span 
//                                     onClick={goToSignup} 
//                                     style={{ cursor: 'pointer', textDecoration: 'underline' }}>
//                                     Sign Up
//                                 </span>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log(`User Logged In:`, email);
            navigate('/start'); // Navigate to Start page after successful login
        } catch (err) {
            setError(err.message); // Set error message if login fails
        }
    };

    const goToSignup = () => {
        navigate('/signup'); // Navigate to the signup page
    };

    return (
        <section className="text-white text-center bg-dark vh-100">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <h1 className='fw-bold mb-4'>Login</h1>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleLogin} className="card p-4 bg-secondary">
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-light fw-bold w-100">Login</button>
                            <p className="mt-3 text-light">
                                Don't have an account? 
                                <span 
                                    onClick={goToSignup} 
                                    style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                                    Sign Up
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
