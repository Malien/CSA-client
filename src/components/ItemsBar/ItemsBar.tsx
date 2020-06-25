import React, { useContext } from "react"
import "./items-bar.sass"
import FilterTab from "../FilterTab"
import Products from "../Products"
import { MessageContext } from "../MessageManager"
import { createNotifier, API_URL, handleServerError } from "../../util/api"
import { useSelector, useDispatch } from "react-redux"
import { StateType } from "../../state"

const ItemsBar: React.FC = () => {
    const token = useSelector((state: StateType) => state.auth.token)
    const dispatch = useDispatch()
    const stderr = useContext(MessageContext)
    const notifyUser = createNotifier(stderr)

    const addHandler = (
        name: string,
        description: string | undefined,
        count: number,
        price: number
    ) => {
        if (token) {
            fetch(`${API_URL}/api/good`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, price, count }),
            })
            .then(res => res.json())
            .then(handleServerError)
            .then(({ product }) => {
                dispatch({ type: "add-product", product })
            })
            .catch(notifyUser)
        } else stderr("You must be logged in to add products")
    }

    return (
        <div className="items-container">
            <FilterTab className="items-sticky" onProduct={addHandler} />
            <Products />
        </div>
    )
}

export default ItemsBar
