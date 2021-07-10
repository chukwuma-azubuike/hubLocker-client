function lockerCount(data) {

    const availabilityArray = [];

    data.cityId && (data.data).forEach(element => {
        (element.location).forEach(element => {
            data.cityId === element.cityId &&
                availabilityArray.push(element.availability);
        });
    });

    data.stateId && (data.data).forEach(element => {
        element.tags.includes(data.stateId) &&
            (element.location).forEach(element => {
                availabilityArray.push(element.availability);
            });
    });

    return availabilityArray.reduce((a, b) => a + b);
}

export default lockerCount;