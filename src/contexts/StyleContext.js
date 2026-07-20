import { createContext } from "react";

const StyleContext = createContext({
  isDark: false,
  changeTheme: () => {}
});

export const StyleProvider = StyleContext.Provider;
export default StyleContext;
