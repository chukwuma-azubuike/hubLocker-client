function singleLockerCount(data, cityId) {

    let available = [0];

    (data).forEach(element => {
        if (cityId === element.cityId) {
            console.log(`Availability =>>> ${element.availability}`);
            available.push(element.availability);
        }
    });

    let output = available.reduce((a, b) => a + b);

    return output;
}

export default singleLockerCount;