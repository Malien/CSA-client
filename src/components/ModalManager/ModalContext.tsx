import { createContext } from "react"

export type ModalDispatcher = (modal: (((dismiss: () => void) => JSX.Element) | JSX.Element), persistent?: boolean) => () => void

const ModalContext = createContext<ModalDispatcher>(() => () => {})

export default ModalContext
