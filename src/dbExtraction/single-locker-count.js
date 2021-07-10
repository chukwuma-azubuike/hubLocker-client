function singleLockerCount(data, cityId, stateId) {

    if (cityId) {
        let available = [0];

        (data).forEach(element => {
            if (cityId === element.cityId) {
                available.push(element.availability);
            }
        });
        return available.reduce((a, b) => a + b)
    }


    // let availableInState;

    if (stateId) {

        let getLockerInStateUrl = `http://localhost:5000/api/state/${stateId}`;
        let cityArray = [];

        function getLockerInState() {
            return fetch(getLockerInStateUrl)
                .then(res => res.json())
                .then(res => res.forEach(item => {
                    item.stateId == stateId &&
                        data.forEach(retrieve => {
                            if (item._id === retrieve.cityId) {
                                cityArray.push(retrieve.availability)
                            }
                        })
                }))
                .then(res => (cityArray.reduce((a, b) => a + b)))
                .catch(err => console.log(err))
        }

        console.log(getLockerInState().then());

        return getLockerInState();
    }

}

export default singleLockerCount;