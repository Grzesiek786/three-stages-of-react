import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({address, onClose, onSubmit}) => {
    // <-- Dodano dwa callbacki by moc komunikowac sie z rodzicem
    // const [close, setClose] = useState(false); <--- usunięte ponieważ chcemy zrobić dumb component
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const genders = ['Male', 'Genderqueer', 'Female', 'Polygender', 'Genderfluid', 'Agender'];
    const [selectedGender, setSelectedGender] = useState('Male');

    const submit = (e) => {
        e.preventDefault();

        onSubmit({
            firstName,
            lastName,
            email,
            selectedGender,
        });
    };

    // const submit = () => {

    //     onSubmit({firstName, lastName, email, selectedGender});
    // };
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    {/*Modyfikacja uzycia metody z props*/}
                    &times;
                </span>
                <form className="add-form">
                    <div className="form">
                        <div className="form-control">
                            <label htmlFor="">First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={(address.firstName = firstName)}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={(address.lastName = lastName)}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={(address.email = email)}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Gender</label>
                            <select onChange={(e) => setSelectedGender(e.target.value)} value="">
                                {genders.map((gender, index) => (
                                    <option key={index}>{gender}</option>
                                ))}
                                {/* <option>{gender}</option> */}
                            </select>
                        </div>
                    </div>

                    <input
                        className="btn btn-save"
                        type="button"
                        value="Save Data"
                        onClick={() => {
                            onSubmit(submit);
                        }}
                    />
                    <input
                        className="btn btn-cancel"
                        type="button"
                        value="Cancel"
                        onClick={onClose}
                    />
                </form>
            </div>
        </div>
    );
};

Modal.propTypes = {
    address: PropTypes.object,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
};

export default Modal;
