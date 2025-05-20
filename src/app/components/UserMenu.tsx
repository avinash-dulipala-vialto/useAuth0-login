'use client';

import { useEffect } from 'react';

type Props = {
  name: string;
};

export default function UserMenu({ name }: Props) {
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === 'logout') {
        window.location.href = '/auth/logout';
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.setItem('logout', Date.now().toString());
    window.location.href = '/auth/logout';
  };

  return (
    <main>
    <h1>Welcome, {name ?? 'User'}!</h1>
      <button className="logout" onClick={handleLogout}>Log out</button>
    </main>
  );
}