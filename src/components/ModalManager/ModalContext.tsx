import React, { createContext, useState, useRef } from "react"
import classnames from "classnames"

export type ModalDispatcher = (modal: (((dismiss: () => void) => JSX.Element) | JSX.Element), persistent?: boolean) => () => void

const ModalContext = createContext<ModalDispatcher>(() => () => {})

export default ModalContext
