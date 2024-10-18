// src/App.js
import React from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Login from './components/Login';
import Signup from './components/Signup';
import { DataProvider } from './context/dataContext';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Start />
        <Login />
        <Signup />
        <Quiz />
        <Result />
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
