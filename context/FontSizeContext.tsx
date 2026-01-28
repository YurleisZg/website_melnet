"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const FontSizeContext = createContext({
  fontSize: 16,
  increase: () => {},
  decrease: () => {},
  reset: () => {}
});

export const FontSizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-base', `${fontSize}px`);
  }, [fontSize]);

  const increase = () => setFontSize(prev => (prev < 24 ? prev + 2 : prev)); 
  const decrease = () => setFontSize(prev => (prev > 12 ? prev - 2 : prev));
  const reset = () => setFontSize(16);

  return (
    <FontSizeContext.Provider value={{ fontSize, increase, decrease, reset }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);