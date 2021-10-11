import React from 'react';
import PropTypes from 'prop-types';
import './address.scss';

const Address = ({address}) => {
    return (
        <table className="table">
            <thead className="table-header">
                <tr className="table-header-th">
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Ip_adress</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {address.map((adres, index) => (
                    <tr key={index} className="table-body-tb">
                        <td>{index + 1}</td>
                        <td>{adres.first_name}</td>
                        <td>{adres.last_name}</td>
                        <td>{adres.email}</td>
                        <td>{adres.gender}</td>
                        <td>{adres.ip_address}</td>
                        <td>
                            <button className="btn btn-edit">Edit</button>
                            <button className="btn btn-delete">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Address.propTypes = {
    address: PropTypes.object,
};

export default Address;
