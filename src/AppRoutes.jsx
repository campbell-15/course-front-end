import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentDetails from "./components/StudentDetails";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<StudentDetails />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;