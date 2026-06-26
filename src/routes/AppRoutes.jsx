import { Route,Routes,Navigate} from "react-router-dom";
import Registration from "../pages/Register";
import Categories from "../pages/Categories";
import Dashboard from "../pages/Dashboard";
import Movies from "../pages/Movies";

function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Registration/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    );
}

export default AppRoutes;