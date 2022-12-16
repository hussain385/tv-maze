// @flow
import React from 'react';
import {ShowCardsComponent} from "../components/show-cards.component";
import {HomeHeaderComponent} from "../components/home-header.component";

export const Home = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <HomeHeaderComponent />
            <ShowCardsComponent />
        </div>
    );
};
