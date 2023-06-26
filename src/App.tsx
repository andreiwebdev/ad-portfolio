import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "@fontsource/raleway";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
        </>
    );
};

export default App;
