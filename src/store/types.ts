export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';


export interface PersonData {
    id: number;
    name: string;
    age: number;
    height: number;
    weight: number;
    proportion: string;
    place: string;
    price: number;
    line: string;
    phone: string;
    slogan: string;
    detail: string;
    status: number;
    top_star: number;
    img: string[];
    id_affiliation: number;
}

export interface PersonState {
    data: PersonData[] | null
    loading: boolean
    error: string
}

export interface PersonError {
    cod: string
    message: string
}