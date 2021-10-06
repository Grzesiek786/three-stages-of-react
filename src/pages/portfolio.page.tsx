import Heading from '@components/heading/heading.component';
import SectionCard from '@components/card/card.component';
import React from 'react';
import './home.page.scss';
import Contacts from '@components/contacts/contacts.component';

const PortfolioPage = () => {
    return (
        <div>
            <Heading />
            <SectionCard />
            <Contacts />
        </div>
    );
};

export default PortfolioPage;
