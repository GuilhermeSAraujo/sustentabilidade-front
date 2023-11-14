import axios from "axios";
import { ISignIn, ISignUp, UserGetResult } from "../../models/user";

class UserService {
    create = async (data: ISignUp) => {
        await axios.post("http://localhost:9999/api/user/register", data);
    };

    auth = async (data: ISignIn): Promise<UserGetResult> => {
        const { data: user } = await axios.post<UserGetResult>("http://localhost:9999/api/user/authenticate", data);
        return user;
    }
};

export default new UserService();
