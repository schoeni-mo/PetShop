
export interface IPet {
    petId : number,
    picture : string,
    type : string,
    name : string,
    dateOfBirth : string,
    gender : string,
    chip : IChip

}

export interface IChip {
    chipId : number,
    type : string
}


export interface IPage {
    pageNo: number,
    pageSize : number
}

export interface IResponse {
    content: IPet[],
    totalElements : number
}