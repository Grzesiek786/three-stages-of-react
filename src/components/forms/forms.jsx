import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './forms.scss';

const Forms = ({onAdd}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!firstName) return;
        if (!lastName) return;
        if (!email) return;
        if (!gender) return;

        onAdd({firstName, lastName, email, gender});

        setFirstName('');
        setLastName('');
        setEmail('');
        setGender('');
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
                <input
                    type="text"
                    placeholder="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
            </div>

            <input type="submit" value="Add Address" />
        </form>
    );
};

Forms.propTypes = {
    onAdd: PropTypes.obj,
};

export default Forms;
