import React from 'react';
import PropTypes from 'prop-types';
import './address.scss';

const Address = ({address, onDelete, onUpdate}) => {
    return (
        <table className="table">
            <thead className="table-header">
                <tr className="table-header-th">
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {address.map((adres, index) => (
                    <tr key={adres.id} className="table-body-tb">
                        <td>{index + 1}</td>
                        <td>{adres.firstName}</td>
                        <td>{adres.lastName}</td>
                        <td>{adres.email}</td>
                        <td>{adres.gender}</td>
                        <td>
                            <button className="btn btn-edit" onClick={(e) => onUpdate(adres.id)}>
                                Edit
                            </button>
                            <button className="btn btn-delete" onClick={() => onDelete(adres.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Address.propTypes = {
    address: PropTypes.object,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
};

export default Address;
