import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import BaseLayout from './layouts/BaseLayout';
import { store } from './appStore';
import "@/shared/index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)