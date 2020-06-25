import React, { useContext, useState, useEffect } from "react"
import "./items-bar.sass"
import FilterTab from "../FilterTab"
import Products from "../Products"
import { MessageContext } from "../MessageManager"
import { createNotifier, API_URL, handleServerError } from "../../util/api"
import { useSelector, useDispatch } from "react-redux"
import { StateType, DispatchType } from "../../state"
import qs from "qs";

const ItemsBar: React.FC = () => {
    const token = useSelector((state: StateType) => state.auth.token)
    const filter = useSelector((state: StateType) => state.filter)
    const dispatch = useDispatch<DispatchType>()
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

    useEffect(() => {
        if (token) {
            fetch(`${API_URL}/api/goods?${qs.stringify(filter, { indices: false })}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })
                .then(res => res.json())
                .then(handleServerError)
                .then(({ products }) => {
                    dispatch({ type: "set-products", products })
                })
                .catch(notifyUser)
        }
    }, [filter])

    return (
        <div className="items-container">
            <FilterTab
                className="items-sticky"
                onProduct={addHandler}
                onFrom={from => dispatch({ type: "filter-from", from })}
                onName={name => dispatch({ type: "filter-name", name })}
                onTo={to => dispatch({ type: "filter-to", to })}
            />
            <Products />
        </div>
    )
}

export default ItemsBar
