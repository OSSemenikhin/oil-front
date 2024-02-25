"use client";

import { Store } from "@/app/Store";
import { Provider } from "react-redux";

type TReduxProviderProps = {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: TReduxProviderProps) {
  return (
    <Provider store={Store}>{ children }</Provider>
  );
}
