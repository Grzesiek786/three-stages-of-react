import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({address}) => {
    const [close, setClose] = useState(false);
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setClose(!close)}>
                    &times;
                </span>
                <form className="add-form">
                    <div className="form">
                        <div className="form-control">
                            <label htmlFor="">First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={address.firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={address.lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={address.email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Gender</label>
                            <select onChange={(e) => e.target.value} value="">
                                {/* {address.gender.map((gender, index) => (
                                    <option key={index}>{gender}</option>
                                ))} */}
                            </select>
                        </div>
                    </div>

                    <input className="btn btn-save" type="button" value="Save Data" />
                    <input
                        className="btn btn-cancel"
                        type="button"
                        value="Cancel"
                        onClick={() => setClose(!close)}
                    />
                </form>
            </div>
        </div>
    );
};

Modal.propTypes = {
    address: PropTypes.object,
    showModal: PropTypes.func,
};

export default Modal;
