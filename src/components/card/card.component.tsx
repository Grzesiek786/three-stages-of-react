import React from 'react';
import './card.component.scss';

const SectionCard = () => {
    return (
        <div>
            <div className="section-card">
                <div className="card card-one">
                    <img
                        src="https://icare.eu/pl/wp-content/uploads/2020/10/62-Apple-MacBook-Pro-16-inch-2020-Space-Gray-iCare-Store.png"
                        className="card-img"
                        alt="Macbook Pro"
                    />
                    <div className="cards">
                        <p className="cards-title">Macbook Air</p>
                        <ul className="cards-items">
                            <li className="cards-items-item">14 cali</li>
                            <li className="cards-items-item">Procesor Apple M1</li>
                            <li className="cards-items-item">Pamięć Ram 8GB</li>
                            <li className="cards-items-item">3000 zł</li>
                        </ul>
                        <button className="btn">Kup</button>
                    </div>
                </div>
                <div className="card">
                    <img
                        src="https://icare.eu/pl/wp-content/uploads/2020/10/62-Apple-MacBook-Pro-16-inch-2020-Space-Gray-iCare-Store.png"
                        className="card-img"
                        alt="Macbook Pro"
                    />
                    <div className="cards">
                        <p className="cards-title">Macbook Pro</p>
                        <ul className="cards-items">
                            <li className="cards-items-item">13 cali</li>
                            <li className="cards-items-item">Procesor Apple M1X</li>
                            <li className="cards-items-item">Pamięć Ram 16GB</li>
                            <li className="cards-items-item">4000 zł</li>
                        </ul>
                        <button className="btn">Kup</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SectionCard;
