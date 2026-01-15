import { ClientDto } from './i-user-data';

export interface ILogin {
    userName: string;
    password: string;
    token: string;
    clientDto: ClientDto;
}
