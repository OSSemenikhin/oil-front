"use client";

import { store } from "@/app/store";
import { Provider } from "react-redux";

type TReduxProviderProps = {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: TReduxProviderProps) {
  return (
    <Provider store={store}>{ children }</Provider>
  );
}
