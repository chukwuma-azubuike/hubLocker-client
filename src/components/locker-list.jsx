import React from "react";
import singleLockerCount from "../dbExtraction/single-locker-count";

function LockerList(props) {
    return (
        <div className='locker-list' style={{
            padding: '15px', justifyContent: 'space-around',
            background: 'rgb(236, 236, 236)', alignItems: 'center',
            color: 'black', display: 'flex', margin: '10px', fontWeight: 'bold'
        }} >
            <span>{`${props.lockerFound.size} ${props.lockerFound.dimension}`}</span>
            <span style={{ width: '35%', margin: 'auto 50px' }}>N{props.lockerFound.price} per Item/mo N15,000 XX no of orders
                Online only price
            </span>
            <span>1N For First Rent</span>
            {/* {console.log(props.cityId)} */}
            <span>{props.cityId ?
                `${singleLockerCount(props.lockerFound.location, props.cityId)} Available` :
                `${singleLockerCount(props.lockerFound.location, props.cityId, props.stateId)} Available`
            }</span>
            <button type='button'
                style={{
                    background: 'rgb(99, 177, 54)',
                    color: 'white', border: 'none', width: '150px',
                    fontWeight: 'bold', padding: '8px 20px'
                }} >Rent Now</button>
        </div>
    )
}

export default LockerList;