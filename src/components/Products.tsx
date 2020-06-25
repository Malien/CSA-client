import React, { useContext, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { StateType, DispatchType } from "../state"
import { createNotifier, handleServerError, API_URL } from "../util/api"
import { MessageContext } from "./MessageManager"
import ProductGrid from "./ProductGrid"

const Products: React.FC = () => {
    const token = useSelector((state: StateType) => state.auth.token)
    const dispatch = useDispatch<DispatchType>()
    const products = Object.values(useSelector((state: StateType) => state.products))
    const stderr = useContext(MessageContext)

    const notifyUser = createNotifier(stderr)

    useEffect(() => {
        if (token) {
            fetch(`${API_URL}/api/goods`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(handleServerError)
                .then(({ products }) => {
                    dispatch({ type: "set-products", products })
                })
                .catch(notifyUser)
        }
    }, [token])

    const deleteHandler = (id: ProductID) => {
        if (token) {
            fetch(`${API_URL}/api/good/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(handleServerError)
                .then(() => {
                    dispatch({ type: "remove-product", id })
                })
        } else stderr("You must be logged in to add products")
    }

    const changeHandler = <T extends any>(
        toProductChange: (value: T) => ProductChange
    ) => (id: ProductID, change: T) => {
        if (token) {
            const productChange = toProductChange(change)
            fetch(`${API_URL}/api/good/${id}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productChange),
            })
                .then(res => res.json())
                .then(handleServerError)
                .then(() => {
                    dispatch({ type: "product-change", id, change: productChange })
                })
                .catch(notifyUser)
        } else stderr("You must be logged in to add products")
    }

    return (
        <ProductGrid
            products={products}
            onDelete={deleteHandler}
            onNameChange={changeHandler(name => ({ name }))}
            onCountChange={changeHandler(count => ({ count }))}
            onPriceChange={changeHandler(price => ({ price }))}
        />
    )
}

export default Products
