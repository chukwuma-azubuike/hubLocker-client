import React, { useState } from 'react';
import LockerList from './locker-list';
import lc from '../images/lc.jpg'

function Result(props) {

    const test = [
        { dimension: '15', pricing: '50cents', availability: '3 available' },
        { dimension: '134', pricing: '250cents', availability: '13 available' },
        { dimension: '34', pricing: '530cents', availability: '8 available' },
        { dimension: '54', pricing: '234cents', availability: '6 available' }
    ];
    return (
        <div>
            <div>
                <div style={{ margin: '0', background: 'rgb(236, 236, 236)', padding: '18px 15px' }} >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>{props.searchCount}</div>
                        <div>
                            <span style={{ marginRight: '20px' }} >Sort By</span>
                            <select>
                                <option>Closest</option>
                                <option>Lowest Price</option>
                                <option>Highest Price</option>
                                <option>Recommended</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex' }} >
                    <div style={{ margin: '15px' }} >
                        <img src={lc} style={{ width: '200px' }} />
                    </div>
                    <div style={{ width: '80%' }} >
                        <div>
                            <div style={{ margin: '15px 10px' }} >
                                <select>
                                    <option>Featured</option>
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                </select>
                            </div>
                            {props.searchResult ?
                                (props.searchResult).map((locker) => <LockerList cityId={props.cityId} lockerFound={locker} />) :
                                props.setSearchResult(false)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result;