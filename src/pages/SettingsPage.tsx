
import React from 'react';
import Settings from '@/components/Settings';

const SettingsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 pb-24 max-w-md">
      <header className="mb-8 text-center">
        <h1 className="text-3xl-dynamic font-bold mb-2 transition-theme">Settings</h1>
        <p className="text-base-dynamic text-muted-foreground transition-theme">
          Customize your app experience
        </p>
      </header>
      <Settings />
    </div>
  );
};

export default SettingsPage;
