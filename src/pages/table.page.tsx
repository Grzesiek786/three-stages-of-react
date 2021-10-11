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
            first_name: 'Lil',
            last_name: 'Ouchterlony',
            email: 'louchterlony0@digg.com',
            gender: 'Male',
        },
        {
            id: 2,
            first_name: 'Horacio',
            last_name: 'Kaygill',
            email: 'hkaygill1@patch.com',
            gender: 'Genderqueer',
        },
        {
            id: 3,
            first_name: 'Ninon',
            last_name: 'Harsent',
            email: 'nharsent2@about.me',
            gender: 'Female',
        },
        {
            id: 4,
            first_name: 'Carlin',
            last_name: 'Sundin',
            email: 'csundin3@gmpg.org',
            gender: 'Polygender',
        },
        {
            id: 5,
            first_name: 'Mordy',
            last_name: 'Tyce',
            email: 'mtyce4@networkadvertising.org',
            gender: 'Polygender',
        },
        {
            id: 6,
            first_name: 'Pip',
            last_name: 'Kersting',
            email: 'pkersting5@cam.ac.uk',
            gender: 'Female',
        },
        {
            id: 7,
            first_name: 'Theressa',
            last_name: 'Nortcliffe',
            email: 'tnortcliffe6@ft.com',
            gender: 'Genderfluid',
        },
        {
            id: 8,
            first_name: 'Hilton',
            last_name: 'Kippin',
            email: 'hkippin7@yale.edu',
            gender: 'Male',
        },
        {
            id: 9,
            first_name: 'Gusti',
            last_name: 'Bullerwell',
            email: 'gbullerwell8@buzzfeed.com',
            gender: 'Agender',
        },
        {
            id: 10,
            first_name: 'Orsola',
            last_name: 'Crossley',
            email: 'ocrossley9@umn.edu',
            gender: 'Agender',
        },
    ]);

    // Add Address
    const addAddress = (id: any) => {
        setAddress([...address, id]);
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
