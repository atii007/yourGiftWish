import { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { ThemeSettingsProvider } from "./ThemeSettingsProvider";
import { ToastContainer } from "react-toastify";

export const ProviderTree = ({ children }: { children: ReactNode }) => {
  const appFont = "Poppins";
  return (
    <StoreProvider>
      <ToastContainer/>
        <ThemeSettingsProvider font={appFont}>{children}</ThemeSettingsProvider>
    </StoreProvider>
  );
};
