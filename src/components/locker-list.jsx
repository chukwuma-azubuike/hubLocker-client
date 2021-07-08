import React from "react";
import singleLockerCount from "../dbExtraction/single-locker-count";

function LockerList(props) {
    return (
        <div className='locker-list' style={{
            padding: '15px', justifyContent: 'space-around',
            background: 'rgb(236, 236, 236)', alignItems: 'center',
            color: 'black', display: 'flex', margin: '10px'
        }} >
            <span>{props.lockerFound.dimension}</span>
            <span>{props.lockerFound.price}</span>
            <span>1N For First Rent</span>
            {/* {console.log(props.cityId)} */}
            <span>{`${singleLockerCount(props.lockerFound.location, props.cityId)} Available`}</span>
            <button type='button'
                style={{
                    background: 'rgb(99, 177, 54)',
                    color: 'white', border: 'none',
                    fontWeight: 'bold', padding: '10px 40px'
                }} >Rent Now</button>
        </div>
    )
}

export default LockerList;