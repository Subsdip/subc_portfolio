import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home.tsx'
import {store} from './types/store.ts';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
          <Provider store={store}>
          <Home />
        </Provider>
    </StrictMode>,
)
