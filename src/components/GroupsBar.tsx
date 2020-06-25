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
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(handleServerError)
                .then(({ groups }) => {
                    dispatch({ type: "set-groups", groups })
                })
                .catch(notifyUser)
        }
    }, [token])

    const addHandler = (name: string) => {
        fetch(`${API_URL}/api/group`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
        })
            .then(res => res.json())
            .then(handleServerError)
            .then(({ group }) => {
                dispatch({ type: "add-group", group })
            })
            .catch(notifyUser)
    }

    const deleteHandler = (id: GroupID) => {
        fetch(`${API_URL}/api/group/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(handleServerError)
            .then(() => {
                dispatch({ type: "remove-group", id })
            })
            .catch(notifyUser)
    }

    return <GroupsList groups={groups} onAdd={addHandler} onDelete={deleteHandler} />
}

export default GroupsBar
