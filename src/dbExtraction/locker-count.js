function lockerCount(data) {

    const availabilityArray = [];

    (data.data).forEach(element => {
        (element.location).forEach(element => {
            data.cityId === element.cityId &&
                availabilityArray.push(element.availability);
        });
    });

    return availabilityArray.reduce((a, b) => a + b);
}

export default lockerCount;