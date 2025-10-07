const Header = () => {
    const hour = new Date().getHours();
    const openHours = 9;
    const closeHour = 21;

    const isOpen = hour >= openHours && hour <= closeHour;

    return (
        <header className="header">
            <h1>Electronics Store</h1>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/catalog/">Catalog</a>
                    </li>
                    <li>
                        <a href="/about/">About Us</a>
                    </li>
                    <li>
                        <a href="/contact/">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="working-hours">
                {isOpen ? (
                    <p>
                        We are currently open. Hours: {openHours}:00 -{" "}
                        {closeHour}:00
                    </p>
                ) : (
                    <p>
                        We are currently closed. Our hours are {openHours}:00 -{" "}
                        {closeHour}:00.
                    </p>
                )}
            </div>
        </header>
    );
};

export default Header;
