import { ISignUp, ISignIn } from "../../models/user";
import axios from "axios";

class UserService {
    create = async (data : ISignUp) => {
        await axios.post("http://localhost:9999/api/user/register", data);
    };

    auth = async (data : ISignIn) => {
        await axios.post("http://localhost:9999/api/user/authenticate", data);
    }
};

export default new UserService();
