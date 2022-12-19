// @flow
import React from 'react';
import {Box} from "@mui/material";

export const HomeHeaderComponent = () => {
    return (
        <div style={{backgroundColor: '#eee', height: '60vh', paddingInline: '10vw'}}>
            <Box sx={{width: {xs: '100%', md: '50%'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
                <h1>TV Bland</h1>
                <h1 style={{fontWeight: '400', color: 'grey'}}>TV Show and web series database.{'\n'}Create personalised schedules. Epidsodes quide, cast, crew and
                    character information.</h1>
            </Box>
        </div>
    );
};
