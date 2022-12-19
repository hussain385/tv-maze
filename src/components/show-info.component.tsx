// @flow
import React from 'react';
import {Avatar, Box, styled, Typography} from "@mui/material";
import {useAppSelector} from "../redux/hooks";
import {isEmpty} from "lodash";
import {EmptyUI} from "./EmptyUI";

export const StyledInfoBox = styled(Box)(({theme}) => ({
    display: 'flex',
    height: '4.4em',
    [theme.breakpoints.up('xs')]: {
        borderBottom: 'none',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    [theme.breakpoints.up('md')]: {
        borderBottom: '1px solid black',
        flexDirection: 'row',
        height: '4.4em',
        alignItems: 'center',
    },
}));

export const StyledInfoHeadingText = styled(Typography)(() => ({
    fontSize: '16px',
    fontWeight: '600',
    width: '8em'
}));

export const StyledInfoValueText = styled(Typography)(() => ({
    fontSize: '16px',
    color: 'grey'
}));

export const StyledInfoAvatar = styled(Avatar)(() => ({
    marginRight: '1em',
}));

export const ShowInfoComponent = () => {
    const {showDetails} = useAppSelector(state => state.showList)

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            width: {xs: undefined, md: '100%'},
            marginTop: '6em',
            paddingInline: '10vw',
            gap: '3em',
            marginBottom: '4em'
        }}>
            <Box sx={{width: {xs: '100%', md: '40%'}}}>
                <h1>Show Info</h1>
                <Box sx={{
                    display: 'flex',
                    flexDirection: {xs: 'row', md: 'column'},
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                    <StyledInfoBox>
                        <StyledInfoHeadingText>Streamed on</StyledInfoHeadingText>
                        <StyledInfoValueText>{showDetails.streamedOn}</StyledInfoValueText>
                        {isEmpty(showDetails.streamedOn) && (
                            <StyledInfoValueText>Data not available</StyledInfoValueText>
                        )}
                    </StyledInfoBox>
                    <StyledInfoBox>
                        <StyledInfoHeadingText>Schedule</StyledInfoHeadingText>
                        {showDetails.schedule.map((value: string, key: number) => (
                            <StyledInfoValueText
                                key={key}>{value}{key + 1 === showDetails.schedule.length ? '' : ', '}</StyledInfoValueText>
                        ))}
                        {isEmpty(showDetails.schedule) && (
                            <StyledInfoValueText>Data not available</StyledInfoValueText>
                        )}
                    </StyledInfoBox>
                    <StyledInfoBox>
                        <StyledInfoHeadingText>Status</StyledInfoHeadingText>
                        <StyledInfoValueText>{showDetails.statuses}</StyledInfoValueText>
                        {isEmpty(showDetails.statuses) && (
                            <StyledInfoValueText>Data not available</StyledInfoValueText>
                        )}
                    </StyledInfoBox>
                    <StyledInfoBox>
                        <StyledInfoHeadingText>Genres</StyledInfoHeadingText>
                        {showDetails.genres.map((value: string, key: number) => (
                            <StyledInfoValueText
                                key={key}>{value}{key + 1 === showDetails.genres.length ? '' : ','}&nbsp;</StyledInfoValueText>
                        ))}
                        {isEmpty(showDetails.genres) && (
                            <StyledInfoValueText>Data not available</StyledInfoValueText>
                        )}
                    </StyledInfoBox>
                </Box>
            </Box>
            <Box sx={{width: {xs: '100%', md: '40%'}}}>
                <h1>Starring</h1>
                <Box sx={{maxHeight: {xs: 'auto', md: '18em'}, overflowY: 'auto'}}>
                    {showDetails.cast.map((value: any, key: number) => (
                        <StyledInfoBox sx={{flexDirection: 'row !important'}} key={key}>
                            <StyledInfoAvatar src={value.castPicture}/>
                            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
                                <StyledInfoHeadingText sx={{width: '12em'}}>{value.name}</StyledInfoHeadingText>
                                <StyledInfoValueText>{value.characterName}</StyledInfoValueText>
                            </Box>
                        </StyledInfoBox>
                    ))}
                    {isEmpty(showDetails.cast) && (
                        <Box sx={{height: '18em'}}>
                            <EmptyUI text={"Cast info not available"}/>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};
