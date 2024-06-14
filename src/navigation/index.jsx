import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from '../App';
import SaveContact from '../web/user/save-contact';

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/save-contact" element={<SaveContact />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
