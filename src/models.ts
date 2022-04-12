type Review = {
    name: string,
    comment: string,
    time: string
}

export interface ICamp {
    img: string,
    title: string,
    desc: string,
    subBy?: string,
    reviews?: Review[]
}
