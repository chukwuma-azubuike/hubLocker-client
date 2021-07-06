import React from 'react';
import LockerList from './locker-list';

function Result(props) {

    const test = [
        { dimension: '15', pricing: '50cents', availability: '3 available' },
        { dimension: '134', pricing: '250cents', availability: '13 available' },
        { dimension: '34', pricing: '530cents', availability: '8 available' },
        { dimension: '54', pricing: '234cents', availability: '6 available' }
    ];
    return (
        <div>
            {/* <div>{props.searchResult.length}</div> */}
            <div>
                <div style={{ display: 'inline-block', margin: '15px' }} >
                    <img src='' />
                </div>
                <div style={{ display: 'inline-block', margin: '15px' }} >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <select>
                            <option>Featured</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                        <select>
                            <option>Closest</option>
                            <option>Lowest Price</option>
                            <option>Highest Price</option>
                            <option>Recommended</option>
                        </select>
                    </div>
                </div>
                <div>
                    {test.map((locker) => {
                        return <LockerList lockerFound={locker} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Result;