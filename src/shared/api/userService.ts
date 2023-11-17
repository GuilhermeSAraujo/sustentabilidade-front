import axios from "axios";
import { ISignIn, ISignUp, UserGetResult } from "../../models/user";

class UserService {
    create = async (data: ISignUp) => {
        await axios.post("http://localhost:9999/api/user/register", data, {
            timeout: 5000,
        });
    };

    auth = async (data: ISignIn): Promise<UserGetResult> => {
        const { data: user } = await axios.post<UserGetResult>("http://localhost:9999/api/user/authenticate", data, {
            timeout: 5000,
        });
        return user;
    }
};

export default new UserService();