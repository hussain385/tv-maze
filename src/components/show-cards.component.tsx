// @flow
import React from 'react';
import {Box, Rating, Typography} from "@mui/material";
import {BsCardImage} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai"


export const ShowCardsComponent = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '7px', width: '8em'}}>
            <Box sx={{
                backgroundColor: 'lightgrey',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '12em',
            }}>
                <BsCardImage color={'white'} size={30}/>
            </Box>
            <Rating
                name="read-only"
                value={2}
                readOnly
                sx={{
                    fontSize: '16px',
                    '& .MuiRating-iconFilled': {color: 'grey'},
                }}
                icon={<AiFillStar style={{fontSize: "16px"}}/>}
                emptyIcon={<AiFillStar style={{opacity: 0.55, fontSize: "16px"}}/>}
            />
            <Typography sx={{fontSize: '14px'}}>Title</Typography>
        </Box>
    );
};
