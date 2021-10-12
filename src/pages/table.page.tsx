import Address from '@components/address/address';
import Forms from '@components/forms/forms';
import Header from '@components/header/header';
import React, {useState, useEffect} from 'react';
import './home.page.scss';

const TablePage = () => {
    const [showForm, setShowForm] = useState(true);
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
        const res = await fetch('http://localhost:5000/data');
        const data = await res.json();

        return data;
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
    const updAddress = async (id: any) => {
        const fetch = await fetchAddress(id);
        console.log({...fetch});
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
            <Address address={address} onDelete={deleteAddress} onUpdate={updAddress} />
        </div>
    );
};

export default TablePage;
