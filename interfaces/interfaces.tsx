export interface IData {
    id: number,
    img: any,
    location: string,
    locationFull: string,
    name: string,
    duration: string,
    price: number,
    resume: string,
    imgBanner: any ,
    galery: IGalery[] 
}

export interface IGalery {
    id: number,
    img: any,
    name: string,
    resume: string,
}