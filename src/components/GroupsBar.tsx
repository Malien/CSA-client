import React, { useContext, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { StateType, DispatchType } from "../state"
import { createNotifier, handleServerError, API_URL } from "../util/api"
import { MessageContext } from "./MessageManager"
import GroupsList from "./GroupsList"

const GroupsBar: React.FC = () => {
    const groups = Object.values(useSelector((state: StateType) => state.groups))
    const token = useSelector((state: StateType) => state.auth.token)
    const dispatch = useDispatch<DispatchType>()
    const stderr = useContext(MessageContext)
    const notifyUser = createNotifier(stderr)

    useEffect(() => {
        if (token) {
            fetch(`${API_URL}/api/groups`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(handleServerError)
                .then(({ groups }) => {
                    dispatch({ type: "set-groups", groups })
                })
                .catch(notifyUser)
        }
    }, [token])

    return <GroupsList groups={groups} />
}

export default GroupsBar
