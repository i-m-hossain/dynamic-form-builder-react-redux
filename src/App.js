import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Form from "./pages/Form/Form";
import Login from "./pages/Login/Login";
import Preview from "./pages/Preview/Preview";
import Step from "./pages/Preview/Step/Step";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/preview" element={<Preview />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
