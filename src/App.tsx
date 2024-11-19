import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProfileSettings from './components/ProfileSettings';

export default function App() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem={activeItem} onItemSelect={setActiveItem} />
      <div className="pl-60">
        <Header />
        <main className="p-8">
          <ProfileSettings />
        </main>
      </div>
    </div>
  );
}