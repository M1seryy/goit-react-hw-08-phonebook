import React from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import Auth from './Header/auth/Auth';

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route
            path="/contacts"
            element={
              <>
                <ContactForm />
                <h1>Contacts</h1>
                <Filter />
                <ContactList />
              </>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
