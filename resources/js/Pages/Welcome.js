import { InertiaLink } from "@inertiajs/inertia-react"
import React from "react"

const Home=()=>{
    return(
        <div>
            Welcome <InertiaLink href='/'>goto home page</InertiaLink>   <InertiaLink href='user'>goto User page</InertiaLink>
        </div>
    )
}
export default Home