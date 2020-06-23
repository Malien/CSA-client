import { createContext } from "react";

export type MessageDispatcher = (message: string) => void

const MessageContext = createContext<MessageDispatcher>(console.log)

export default MessageContext