import { Deserializable } from "./deserializable.model"

export class Employee implements Deserializable {
    employee: {
    id: string;
    name: string;
    password: string;
    email: string;
    phoneNumber: number;
    location: string;
    linkdin: string;
    skills: string;
    about: string;
    faceBook: string;
    instagram: string;
    profilePicture: string;
    twiter: string;
    };
    sessionToken: string;

    deserialize(input: any) {
        Object.assign(this, input)
        return this;
    }
}
