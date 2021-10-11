import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './forms.scss';

const Forms = ({onAdd}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const genders = ['Male', 'Genderqueer', 'Female', 'Polygender', 'Genderfluid', 'Agender'];
    const [selectedGender, setSelectedGender] = useState('Male');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!firstName) return;
        if (!lastName) return;
        if (!email) return;
        if (!selectedGender) return;
        const gender = selectedGender;

        onAdd({firstName, lastName, email, gender});

        setFirstName('');
        setLastName('');
        setEmail('');
        setSelectedGender('');
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form">
                <div className="form-control">
                    <label htmlFor="">First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="">Last Name</label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="">Gender</label>
                    <select
                        onChange={(e) => setSelectedGender(e.target.value)}
                        value={selectedGender}>
                        {genders.map((gender, index) => (
                            <option key={index}>{gender}</option>
                        ))}
                    </select>
                </div>
                {/* <div className="form-control">
                    <label htmlFor="">Gender</label>
                    <input
                        type="text"
                        placeholder="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </div> */}
            </div>

            <input className="btn btn-submit" type="submit" value="Add Address" />
        </form>
    );
};

Forms.propTypes = {
    onAdd: PropTypes.func,
};

export default Forms;
