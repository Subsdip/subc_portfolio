import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../types/store";
import "./Themewrapper.css";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const dark = useSelector((state: RootState) => state.theme.dark);

  useEffect(() => {
    document.body.className = dark ? "dark-mode" : "light-mode";
  }, [dark]);

  return <>{children}</>;
};

export default ThemeWrapper;
