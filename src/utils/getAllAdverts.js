import { fetchAllAdverts } from "../redux/operations";

const getAllAdverts = async () => {
    try {
        const data = await fetchAllAdverts();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching adverts: ", error.message);
        throw error;
    }
}


export default getAllAdverts