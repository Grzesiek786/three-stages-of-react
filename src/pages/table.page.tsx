import Address from '@components/address/address';
import Forms from '@components/forms/forms';
import Header from '@components/header/header';
import React, {useState, useEffect} from 'react';
import './home.page.scss';

const TablePage = () => {
    const [showForm, setShowForm] = useState(true);
    const [showModal, setShowModal] = useState(true);
    const [address, setAddress] = useState<any[]>([]);

    useEffect(() => {
        const getAddress = async () => {
            const addressesFromServer = await fetchAddresses();
            setAddress(addressesFromServer);
        };

        getAddress();
    }, []);

    // FetchAddress
    const fetchAddresses = async () => {
        try {
            const res = await fetch('http://localhost:5000/data');
            const data = await res.json();

            return data;
        } catch (err) {
            console.error('Fetch failed', err);
        }
    };

    const fetchAddress = async (id: number) => {
        const res = await fetch(`http://localhost:5000/data/${id}`);
        const data = await res.json();

        return data;
    };

    // Add Address
    const addAddress = async (addres: any) => {
        const res = await fetch(`http://localhost:5000/data`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(addres),
        });

        const data = await res.json();
        setAddress([...address, data]);
    };

    // Update address
    const updAddress = async (address: any) => {
        const id = address.id;
        const firstName = address.firstName;
        const lastName = address.lastName;
        const email = address.email;
        const gender = address.gender;
        if (firstName && lastName && email && gender) {
            const res = await fetch(`http://localhost:5000/data/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({firstName, lastName, email, gender}),
            });
            const data = await res.json();
            console.log(data);
        }
    };

    // Delete address
    const deleteAddress = async (id: number) => {
        const accepted = confirm('Are you sure');
        if (accepted) {
            await fetch(`http://localhost:5000/data/${id}`, {
                method: 'DELETE',
            });
            setAddress(address.filter((adres) => adres.id !== id));
        }
    };

    return (
        <div className="container">
            <Header onAddForm={() => setShowForm(!showForm)} show={showForm} />
            {showForm && <Forms onAdd={addAddress} />}
            <Address
                address={address}
                onDelete={deleteAddress}
                onUpdate={updAddress}
                modalShow={() => setShowModal(!showModal)}
                modal={showModal}
            />
        </div>
    );
};

export default TablePage;
