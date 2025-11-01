import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from './appStore';
import "@/shared/index.css";
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)