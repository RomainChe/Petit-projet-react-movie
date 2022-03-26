import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homes from './pages/Homes';
import UserList from './pages/UserList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/coup-de-coeur" element={<UserList />} />
        <Route path="*" element={<Homes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;