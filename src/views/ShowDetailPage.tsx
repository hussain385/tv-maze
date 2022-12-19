// @flow
import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {ShowDetailsHeaderComponent} from "../components/show-details-header.component";
import {ShowInfoComponent} from "../components/show-info.component";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {useGetShowInfoByIdQuery} from "../redux/apis/showsInfoApi";
import {isNull, isUndefined} from "lodash";
import {showToast, ToastTypes} from "../utils";
import {showDetailInfo} from "../redux/actions";
import {HomeHeaderComponent} from "../components/home-header.component";
import {EmptyUI} from "../components/EmptyUI";
import {Box, CircularProgress} from "@mui/material";
import {LoadingScreenComponent} from "../components/loading-screen.component";

export const ShowDetailPage = () => {
    const {state} = useLocation() as any;
    const dispatch = useAppDispatch()
    const {showDetails} = useAppSelector(state => state.showList)
    const {
        data,
        isLoading,
        error
    } = useGetShowInfoByIdQuery(state.show_id, {refetchOnMountOrArgChange: true})

    useEffect(() => {
        if (!isUndefined(error)) {
            const message = error as any;
            showToast(message.error, ToastTypes.ERROR);
        }
    }, [error]);

    useEffect(() => {
        if (!isUndefined(data)) {
            const showDetailInfoVar = data
            console.log(showDetailInfoVar.network)
            dispatch(showDetailInfo({
                name: showDetailInfoVar.name,
                genres: showDetailInfoVar.genres,
                statuses: showDetailInfoVar.status,
                streamedOn: !isNull(showDetailInfoVar.network) ? showDetailInfoVar.network.name : '',
                schedule: showDetailInfoVar.schedule.days,
                ratings: isNull(showDetailInfoVar.rating.average) ? 0 : showDetailInfoVar.rating.average,
                picture: showDetailInfoVar.image.original,
                showId: showDetailInfoVar.id,
                description: showDetailInfoVar.summary,
                cast: showDetailInfoVar._embedded.cast.map((value: any) => ({
                    name: value.person.name,
                    castPicture: isNull(value.person.image) ? '' : value.person.image.medium,
                    characterName: value.character.name
                }))
            }))
        }
    }, [data]);

    if (isLoading) {
        return (
            <LoadingScreenComponent />
        )
    }

    if (isUndefined(showDetails)) {
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
        <div>
            <ShowDetailsHeaderComponent/>
            <ShowInfoComponent/>
        </div>
    );
};
