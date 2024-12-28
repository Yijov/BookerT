import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { CoreStore, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";

export const CoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={CoreStore}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
