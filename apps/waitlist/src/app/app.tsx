// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

import Waitlist from '../pages/waitlist';
import { SignUp } from '../pages/sign-up';
import { Preloader } from '../public/views/preloader/preloader';
import { ConfirmationPage } from '../pages/confirmation-page';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Preloader />} />
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/confirmation-page" element={<ConfirmationPage />} />
    </Routes>
  );
}

export default App;
