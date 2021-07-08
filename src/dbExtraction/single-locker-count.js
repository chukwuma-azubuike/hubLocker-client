function singleLockerCount(data, cityId) {

    let available = [];

    (data).forEach(element => {
        if (cityId === element.cityId) {
            console.log(`Availability =>>> ${element.availability}`)
            available.push(element.availability);
        }
    });

    return available.reduce((a, b) => a + b)
}

export default singleLockerCount;