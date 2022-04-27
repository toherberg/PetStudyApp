import { Photo } from "./photo";

 export interface Member {
        id: number;
        username: string;
        photoUrl: string;
        age: number;
        knownAs: string;
        created: Date;
        lastActive: Date;
        specialization: string;
        introduction: string;
        lookingFor: string;
        interests: string;
        city: string;
        country: string;
        photos: Photo[];
    }


    