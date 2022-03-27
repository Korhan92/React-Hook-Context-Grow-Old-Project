import React, { useState } from "react";
const myContext = React.createContext()


export function MyProvider(props) {
    const [user, setUser] = useState({ name: "Korhan", age: 29 })
    function growOlder(params) {
        setUser({ name: "Korhan", age: user.age + 1 })
    }
    console.log(props.children)
    return (
        <myContext.Provider value={{ user, growOlder }}>
            {props.children}
        </myContext.Provider>
    )
}

export default myContext