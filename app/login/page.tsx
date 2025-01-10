'use client';

import Ui from './ui/Ui';
import { authService } from '../services/login/auth.service';

export default function Login() {
  const handleLogin = authService.login;
  return (
    <>
      <Ui onClick={handleLogin} />
    </>
  );
}
