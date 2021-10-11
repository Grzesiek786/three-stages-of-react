import Address from '@components/address/address';
import Forms from '@components/forms/forms';
import Header from '@components/header/header';
import React, {useState} from 'react';
import './home.page.scss';

const TablePage = () => {
    const [showForm, setShowForm] = useState(true);
    const [address, setAddress] = useState([
        {
            id: 1,
            firstName: 'Lil',
            lastName: 'Ouchterlony',
            email: 'louchterlony0@digg.com',
            gender: 'Male',
        },
        {
            id: 2,
            firstName: 'Horacio',
            lastName: 'Kaygill',
            email: 'hkaygill1@patch.com',
            gender: 'Genderqueer',
        },
        {
            id: 3,
            firstName: 'Ninon',
            lastName: 'Harsent',
            email: 'nharsent2@about.me',
            gender: 'Female',
        },
        {
            id: 4,
            firstName: 'Carlin',
            lastName: 'Sundin',
            email: 'csundin3@gmpg.org',
            gender: 'Polygender',
        },
        {
            id: 5,
            firstName: 'Mordy',
            lastName: 'Tyce',
            email: 'mtyce4@networkadvertising.org',
            gender: 'Polygender',
        },
        {
            id: 6,
            firstName: 'Pip',
            lastName: 'Kersting',
            email: 'pkersting5@cam.ac.uk',
            gender: 'Female',
        },
        {
            id: 7,
            firstName: 'Theressa',
            lastName: 'Nortcliffe',
            email: 'tnortcliffe6@ft.com',
            gender: 'Genderfluid',
        },
        {
            id: 8,
            firstName: 'Hilton',
            lastName: 'Kippin',
            email: 'hkippin7@yale.edu',
            gender: 'Male',
        },
        {
            id: 9,
            firstName: 'Gusti',
            lastName: 'Bullerwell',
            email: 'gbullerwell8@buzzfeed.com',
            gender: 'Agender',
        },
        {
            id: 10,
            firstName: 'Orsola',
            lastName: 'Crossley',
            email: 'ocrossley9@umn.edu',
            gender: 'Agender',
        },
    ]);

    // Add Address
    const addAddress = (addres: any) => {
        console.log(addres);
        // setAddress([...address, id]);
    };
    return (
        <div className="container">
            <Header onAddForm={() => setShowForm(!showForm)} show={showForm} />
            {showForm && <Forms onAdd={addAddress} />}
            <Address address={address} />
        </div>
    );
};

export default TablePage;
