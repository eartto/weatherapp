import City from '../models/city';


const getCities = () => {
    const cities = City.find({})
        .catch(error => {
            throw new Error(error as string);
        });
    return cities;
};

const addCity = (cityName: string) => {
    const cityToAdd = new City({
        city: cityName
    });
    cityToAdd.save().catch(error => {
        throw new Error(error as string);
    });
    return cityToAdd;
};

const popCity = async () => {
    try {
        return await City.findOneAndDelete({}, { "_id": 1 });
    } catch (error) {
        throw new Error(error as string);
    }
};

export default { getCities, addCity, popCity };