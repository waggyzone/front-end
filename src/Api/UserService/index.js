import { apiClient } from "../../helpers/apiClient";


class UserService {

    findAllUser = () => apiClient.get(`/user/all`);

}

export default new UserService();