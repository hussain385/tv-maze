// @flow
import * as React from 'react';
import {Box, Rating} from "@mui/material";
import {BsCardImage} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import {useAppSelector} from "../redux/hooks";

export const ShowDetailsHeaderComponent = () => {
    const {showDetails} = useAppSelector(state => state.showList)

    return (
        <div style={{backgroundColor: '#eee', minHeight: '45vh', paddingInline: '10vw', display: 'flex', alignItems: 'center'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                height: '100%',
            }}>
                <h1>TV Bland</h1>
                <Box sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    gap: {xs: '1em', md: '2em'},
                    marginBottom: {xs: '2em', md: '-3em'},
                    marginTop: '2em'
                }}>
                    <Box sx={{
                        backgroundColor: 'lightgrey',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: {xs: 'auto', md: '20em'},
                        width: {xs: '100%', md: '13em'}
                    }}>
                        {showDetails?.picture ? (
                            <img src={showDetails.picture} alt="cover" style={{width: '100%'}}/>
                        ) : (
                            <BsCardImage color={'white'} size={50}/>
                        )}
                    </Box>
                    <Box sx={{width: {xs: '100%', md: '50%'}}}>
                        <Box sx={{display: 'flex', gap: '0.6em', alignItems: 'center'}}>
                            <Rating
                                name="read-only"
                                value={showDetails.ratings / 2}
                                readOnly
                                precision={0.5}
                                sx={{
                                    fontSize: '1.5em',
                                    height: 'fit-content',
                                    '& .MuiRating-iconFilled': {color: 'grey'},
                                }}
                                emptyIcon={<AiFillStar style={{opacity: 0.55, fontSize: "inherit"}}/>}
                            />
                            <p style={{margin: 0}}>{showDetails.ratings / 2}/5</p>
                        </Box>
                        <h1>{showDetails.name}</h1>
                        {showDetails.description.replaceAll('<p>', '').replaceAll('</p>', '').replaceAll('<b>', '').replaceAll('</b>', '')}
                    </Box>
                </Box>
            </Box>
        </div>
    );
};
