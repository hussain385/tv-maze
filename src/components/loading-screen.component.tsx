// @flow
import React from 'react';
import {HomeHeaderComponent} from "./home-header.component";
import {Box, CircularProgress} from "@mui/material";

export const LoadingScreenComponent = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <HomeHeaderComponent/>
            <Box sx={{
                width: '100%',
                height: '-webkit-fill-available',
                backgroundColor: 'rgba(255,255,255,0.58)',
                position: 'absolute',
                top: 0,
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                color: '#878787'
            }}>
                <CircularProgress size={90} color="inherit"/>
            </Box>
        </div>
    );
};
