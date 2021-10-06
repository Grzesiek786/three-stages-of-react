import React from 'react';
import './contacts.component.scss';

const Contacts = () => {
    return (
        <div>
            <section className="section-contact">
                <div className="contact">
                    <form action="#" className="form">
                        <h2 className="secondary-heading">Contact</h2>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Full name"
                                id="name"
                                required
                            />
                            <label htmlFor="name" className="form-label">
                                Full name
                            </label>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-input"
                                placeholder="Email address"
                                id="email"
                                required
                            />
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-area"
                                name="textArea"
                                id="textArea"></textarea>
                        </div>
                        <button className="btn" type="submit">
                            Wyślij
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contacts;
