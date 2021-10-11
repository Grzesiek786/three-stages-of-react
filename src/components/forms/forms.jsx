import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Forms = ({onAdd}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [genders, setGenders] = useState([
        'Male',
        'Genderqueer',
        'Female',
        'Polygender',
        'Genderfluid',
        'Agender',
    ]);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!firstName) return;
        if (!lastName) return;
        if (!email) return;

        onAdd({firstName, lastName, email, genders});
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
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
                <label htmlFor="">First Name</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="">Gender</label>
                <select placeholder="Genders">
                    {genders.map((gender, index) => (
                        <option
                            key={index}
                            value={gender}
                            onChange={(e) => setGenders(e.target.value)}>
                            {gender}
                        </option>
                    ))}
                </select>
            </div>
            <input type="submit" value="Add address" />
        </form>
    );
};

Forms.propTypes = {
    onAdd: PropTypes.obj,
};

export default Forms;
