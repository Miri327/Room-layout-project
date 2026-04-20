import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/Home";
import { Users } from "../Components/Users";



export const Routing = () => {
    return <>
        <Routes>
            <Route path='home' element={<Home></Home>}></Route>
            <Route path='users' element={<Users></Users>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes>
    </>
}
