export type Type 
    = StringConstructor 
    | NumberConstructor 
    | BooleanConstructor 
    | ArrayConstructor 
    | ObjectConstructor 
    | null 
    | undefined 
    | number 
    | string 
    | boolean

export interface Schema {
    [key: string]: Type
}

type ObjectType<T extends Type> =
    T extends StringConstructor ? string :
    T extends NumberConstructor ? number :
    T extends BooleanConstructor ? boolean :
    T extends ArrayConstructor ? Array<any> :
    T extends ObjectConstructor ? object :
    T

export type TypeOf<S extends Schema> = {
    [key in keyof S]: ObjectType<S[key]>
}

/**
 * A pretty crude implementation of shape cheking. 
 * Checks if object is in specified shape
 * Schema is used for shallow shape validation only
 * 
 * Schema supports following type parameters:
 * - String    : for any string
 * - Number    : for any number
 * - Boolean   : for any boolean
 * - Array     : for any array
 * - Object    : for any object
 * - null      : for a null 
 * - undefined : for undefined
 * - <number>  : for specific number value
 * - <string>  : for specific string value
 * - <boolean> : for specific boolean value
 * 
 * This is in no way a type system. Just a simpler, more declarative way of checking object entries
 * NOTE: Can't check for optionals. Maybe should be added later
 * NOTE: Can't perform deep check. Only shallow checks are permitted for now
 * @param obj Object to be tested
 * @param schema Schema to test object against
 * @returns boolean to indicate if object is in shape of scema
 * @author Yaroslav Petryk
 */
export default (obj: any, schema: Schema): boolean => {
    for (let pair of Object.entries(schema)) {
        const [key, type] = pair
        if (type === null && obj[key] !== null) return false
        switch (typeof type) {
            case "undefined":
            case "number":
            case "string":
            case "boolean":
                if (obj[key] !== type) return false
                break;
            case "function":
                const schemaVal = new (type as any)().valueOf()
                if (typeof schemaVal !== typeof obj[key]) return false
        }
    }
    return true
}