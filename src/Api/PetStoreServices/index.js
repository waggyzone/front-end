import { apiClient } from "../../helpers/apiClient";



class PetStoreService {
    findAllPets = () => apiClient.get('/pet-details/theertha');
}
export default new PetStoreService();