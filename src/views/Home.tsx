// @flow
import React, {useEffect} from 'react';
import {ShowCardsComponent} from "../components/show-cards.component";
import {HomeHeaderComponent} from "../components/home-header.component";
import {useGetShowListByDateQuery} from "../redux/apis/showsInfoApi"
import {Box} from "@mui/material";
import {showToast, ToastTypes} from "../utils";
import {isEmpty, isNull, isUndefined} from "lodash";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {showTodayDateInfo} from "../redux/actions";
import {EmptyUI} from "../components/EmptyUI";
import {IShowInfo} from "../interfaces/showInterfaces";
import {LoadingScreenComponent} from "../components/loading-screen.component";
import moment from "moment";

export const Home = () => {
    const dispatch = useAppDispatch()
    const {showInfo} = useAppSelector(state => state.showList)
    const {
        data,
        isLoading,
        error
    } = useGetShowListByDateQuery(`web?date=${moment().format('YYYY-MM-DD')}&country=US`, {refetchOnMountOrArgChange: true})

    useEffect(() => {
        if (!isUndefined(error)) {
            const message = error as any;
            showToast(message.error, ToastTypes.ERROR);
        }
    }, [error]);

    useEffect(() => {
        if (!isUndefined(data)) {
            dispatch(showTodayDateInfo(data.map((value: any) => {
                return ({
                    name: value._embedded.show.name,
                    ratings: isNull(value.rating.average) ? 0 : value.rating.average,
                    picture: value._embedded.show.image.original,
                    showId: value._embedded.show.id,
                })
            })))
        }
    }, [data]);

    if (isLoading) {
        return (
            <LoadingScreenComponent />
        )
    }

    if (isEmpty(showInfo)) {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <HomeHeaderComponent/>
                <div style={{marginTop: '3em'}}>
                    <EmptyUI text={"No shows found"}/>
                </div>
            </div>
        )
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <HomeHeaderComponent/>
            <Box sx={{marginTop: {xs: '1em', md:'-10em'}, paddingInline: '10vw', marginBottom: '3em'}}>
                <h1 style={{fontWeight: '500'}}>Last Added Shows</h1>
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '1em', justifyContent: {xs: 'center', md: 'flex-start'}, alignItems: 'flex-start'}}>
                    {showInfo.map((value: IShowInfo, key: number) => (
                        <ShowCardsComponent show={value} key={key}/>
                    ))}
                </Box>
            </Box>
        </div>
    );
};
