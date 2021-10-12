import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './address.scss';
import Modal from '@components/modal/modal';

const Address = ({address, onDelete, onUpdate}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
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
                                <button
                                    className="btn btn-edit"
                                    onClick={() => {
                                        onUpdate(adres.id);
                                        setShowModal(!showModal);
                                    }}>
                                    Edit
                                </button>
                                <button
                                    className="btn btn-delete"
                                    onClick={() => onDelete(adres.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && <Modal show={showModal} address={address} />}
        </>
    );
};

Address.propTypes = {
    address: PropTypes.object,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    modalShow: PropTypes.func,
    modal: PropTypes.bool,
};

export default Address;
