export interface IShowInfo {
    name: string
    ratings: number
    picture: string
    showId: number
}

export interface IShowDetail {
    name: string
    genres: string[]
    statuses: string
    streamedOn: string
    schedule: string[]
    ratings: number
    picture: string
    showId: number
    description: string
    cast: {
        name: string,
        castPicture: string,
        characterName: string
    }[]
}
