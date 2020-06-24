import React from "react"
import { Provider } from "react-redux";
import { MessageProvider } from "./MessageManager";
import { ModalProvider } from "./ModalManager/ModalProvider";
import { StoreType } from "../state";

interface ProvidersProps {
    store: StoreType
}

const Providers: React.FC<ProvidersProps> = ({ store, children }) => (
    <Provider store={store}>
        <MessageProvider>
            <ModalProvider>
                {children}
            </ModalProvider>
        </MessageProvider>
    </Provider>
)

export default Providers