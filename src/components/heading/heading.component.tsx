import React from 'react';
import './heading.component.scss';

const Heading = () => {
    return (
        <div>
            <header className="header">
                <img
                    className="logo"
                    src="https://logoeps.com/wp-content/uploads/2014/09/37150-apple-logo-icon-vector-icon-vector-eps.png"
                    alt="Apple Logo"
                />
                <nav className="main-nav">
                    <ul className="main-nav-list">
                        <li>
                            <a href="#" className="main-nav-link">
                                Section 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="main-nav-link">
                                Section 2
                            </a>
                        </li>
                        <li>
                            <a href="#" className="main-nav-link">
                                Section 3
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="section-apple">
                <div className="apple">
                    <div className="apple-text-box">
                        <h1 className="heading-primary">
                            Amerykańskie przedsiebiorstwo informatyczne z siedzibą w Cupertino w
                            Kalifornii
                        </h1>
                        <p className="apple-description">
                            Zajmuje się projektowaniem i produkcją komputerów osobistych i mobilnych
                            oraz oprogramowania i serwisów internetowych. Założona 1 kwietnia 1976
                            przez Steve’a Wozniaka – projektanta, Steve’a Jobsa i przedsiębiorcę
                            Ronalda Wayne’a, aby projektować i sprzedawać kompletne, zmontowane
                            zestawy komputerów osobistych. Od stycznia 1977 działała formalnie jako
                            spółka Apple Computer Inc., a od stycznia 2007 nazwę zmieniono na Apple
                            Inc.
                        </p>
                        <a
                            className="btn"
                            href="https://pl.wikipedia.org/wiki/Apple_(przedsi%C4%99biorstwo)">
                            Wiecej o Apple
                        </a>
                    </div>
                    <div className="apple-img-box">
                        <img
                            className="apple-img"
                            src="https://i.ebayimg.com/images/g/-WMAAOSw6aRfV21E/s-l1600.png"
                            alt="Apple Macbooks"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Heading;
