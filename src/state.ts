import {
    Reducer,
    createStore,
    combineReducers,
    CombinedState,
    applyMiddleware,
    Dispatch,
} from "redux"
import reduxThunk from "redux-thunk"
import reduxLogger from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"
import jwt_decode from "jwt-decode"
import inShapeOf from "./util/inShapeOf"

const UserdataShape = {
    userid: Number,
    token: String,
    login: String,
}

interface AuthState {
    userid?: number
    token?: string
    login?: string
}

interface LoginAction {
    type: "login"
    login: string
}

interface AuthorizeAction {
    type: "auth"
    token: string
}

interface LogoutAction {
    type: "logout"
}

interface InvalidTokenAction {
    type: "invalidToken"
}

type AuthAction = LoginAction | AuthorizeAction | LogoutAction | InvalidTokenAction

const auth: Reducer<AuthState, AuthAction> = (state, action) => {
    if (state === undefined) {
        const userdata = localStorage.getItem("userdata")
        if (userdata) {
            try {
                const parsed = JSON.parse(userdata)
                if (inShapeOf(parsed, UserdataShape)) return parsed
            } catch {}
        }
        localStorage.removeItem("userdata")
        return {}
    }
    switch (action.type) {
        case "login": {
            return { login: action.login }
        }
        case "auth": {
            const { id } = jwt_decode(action.token)
            const newState = { ...state, userid: id, token: action.token }
            localStorage.setItem("userdata", JSON.stringify(newState))
            return newState
        }
        case "logout": {
            // TODO: Invalidate token
        }
        case "invalidToken": {
            localStorage.removeItem("userdata")
            return {}
        }
    }
    return state
}

type ProductsState = Record<Product["id"], Product>

interface SetProductsAction {
    type: "set-products"
    products: Product[]
}

interface AddProductAction {
    type: "add-product"
    product: Product
}

interface RemoveProductAction {
    type: "remove-product"
    id: ProductID
}

interface ProductChangeAction {
    type: "product-change"
    id: ProductID
    change: ProductChange
}

type ProductsAction =
    | SetProductsAction
    | AddProductAction
    | RemoveProductAction
    | ProductChangeAction

const products: Reducer<ProductsState, ProductsAction> = (state = {}, action) => {
    switch (action.type) {
        case "set-products":
            return action.products.reduce(
                (acc, current) => ({ ...acc, [current.id]: current }),
                {}
            )
        case "add-product":
            return { ...state, [action.product.id]: action.product }
        case "remove-product":
            const clone = { ...state }
            delete clone[action.id]
            return clone
        case "product-change":
            return { ...state, [action.id]: { ...state[action.id], ...action.change } }
    }
    return state
}

type GroupsState = Record<Group["id"], Group>

interface SetGroupsAction {
    type: "set-groups"
    groups: Group[]
}

interface AddGroupAction {
    type: "add-group"
    group: Group
}

interface RemoveGroupAction {
    type: "remove-group"
    id: GroupID
}

type GroupsAction = SetGroupsAction | AddGroupAction | RemoveGroupAction

const groups: Reducer<GroupsState, GroupsAction> = (state = {}, action) => {
    switch (action.type) {
        case "set-groups":
            return action.groups.reduce(
                (acc, current) => ({ ...acc, [current.id]: current }),
                {}
            )
        case "add-group":
            return { ...state, [action.group.id]: action.group }
        case "remove-group":
            const clone = { ...state }
            delete clone[action.id]
            return clone
    }
    return state
}

interface FilterState {
    name?: string
    from?: number
    to?: number
    groups: GroupID[]
}

interface FilterNameAction {
    type: "filter-name"
    name?: string
}

interface FilterFromAction {
    type: "filter-from"
    from?: number
}

interface FilterToAction {
    type: "filter-to"
    to?: number
}

interface FilterAddGroupAction {
    type: "filter-add"
    id: GroupID
}

interface FilterRemoveGroupAction {
    type: "filter-remove"
    id: GroupID
}

type FilterAction =
    | FilterNameAction
    | FilterFromAction
    | FilterToAction
    | FilterAddGroupAction
    | FilterRemoveGroupAction

const filter: Reducer<FilterState, FilterAction> = (state = { groups: [] }, action) => {
    switch (action.type) {
        case "filter-name":
            return { ...state, name: action.name }
        case "filter-from":
            return { ...state, from: action.from }
        case "filter-to":
            return { ...state, to: action.to }
        case "filter-add":
            return { ...state, groups: [...state.groups, action.id] }
        case "filter-remove":
            return { ...state, groups: state.groups.filter(id => id != action.id)}
    }
    return state
}

const composeEnhancers = composeWithDevTools({ trace: true })

export const store = createStore(
    combineReducers({ auth, products, groups, filter }),
    composeEnhancers(applyMiddleware(reduxThunk, reduxLogger))
)
export type StoreType = typeof store
export type StateType = CombinedState<{
    auth: AuthState
    products: ProductsState
    groups: GroupsState
    filter: FilterState
}>
export type ActionType = AuthAction | ProductsAction | GroupsAction | FilterAction
export type DispatchType = Dispatch<ActionType>
