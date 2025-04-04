
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Set default font size
document.documentElement.style.setProperty('--font-size-base', '16px');

createRoot(document.getElementById("root")!).render(<App />);
