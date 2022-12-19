// @flow
import React from 'react';
import {Box, Rating, Typography} from "@mui/material";
import {BsCardImage} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai"
import {IShowInfo} from "../interfaces/showInterfaces";
import {useNavigate} from "react-router-dom";

type propType = {
    show: IShowInfo
}

export const ShowCardsComponent = ({show}: propType) => {
    const navigate = useNavigate()
    return (
        <Box onClick={() => navigate('/show-details', {state: {show_id: show.showId}})}
             sx={{display: 'flex', flexDirection: 'column', gap: '7px', width: '8em', cursor: 'pointer'}}>
            <Box sx={{
                backgroundColor: show.picture ? 'rgba(238,238,238,0.74)' : 'lightgrey',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '12em',
            }}>
                {show.picture ? (
                    <img src={show.picture} alt="cover" style={{width: '100%'}}/>
                ) : (
                    <BsCardImage color={'white'} size={30}/>
                )}
            </Box>
            <Rating
                name="read-only"
                value={show.ratings / 2}
                readOnly
                precision={0.5}
                sx={{
                    fontSize: '16px',
                    '& .MuiRating-iconFilled': {color: 'grey'},
                }}
                // icon={<AiFillStar style={{fontSize: "16px"}}/>}
                emptyIcon={<AiFillStar style={{opacity: 0.55, fontSize: "16px"}}/>}
            />
            <Typography sx={{fontSize: '14px'}}>{show.name}</Typography>
        </Box>
    );
};
