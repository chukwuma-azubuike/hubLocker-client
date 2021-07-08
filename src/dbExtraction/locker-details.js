//Locker Model
class LockerInfo {
    constructor(name, size, dimension, price, firstRent, isAvailable) {
        this.name = name;
        this.size = size;
        this.dimension = dimension;
        this.price = price;
        this.firstRent = firstRent;
        this.isAvailable = isAvailable;
    }
}

//Extract locker info 
function lockerInfo(data) {

    const lockerInfoArray = [];

    (data.data).forEach(element => {
        const { _id, name, size, dimension, price, firstRent, isAvailable } = element;
        let item = new LockerInfo(name, size, dimension, price, firstRent, isAvailable);
        lockerInfoArray.push(item);
    });

    return lockerInfoArray;

}

export default lockerInfo;