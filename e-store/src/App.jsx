import { StrictMode, Fragment, useState } from "react";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Fragment>
            <Header />

            <Catalog />

            <Footer />
        </Fragment>
    );
};

export default App;
