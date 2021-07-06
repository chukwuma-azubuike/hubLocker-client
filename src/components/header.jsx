import React from 'react';

function Header() {
    return (
        <nav style={{ display: 'flex', padding: '20px', justifyContent: 'space-between', background: 'rgb(204, 157, 56)' }} >
            <div style={{ background: 'black', height: '50px', width: '10%', color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center' }} >
                <div style={{ margin: 'auto', display: '' }} >HUBLOCKER</div>
                {/* <img src='' /> */}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '40%' }} >
                <span><a href=''>Home</a></span>
                <span><a href=''>Find a Locker</a></span>
                <span><a href=''>Size Guide</a></span>
                <span><a href=''>Locations</a></span>
                <span><a href=''>Help Centre</a></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '25%' }} >
                <a href='' ><span>My Account</span></a>
                <a href='' ><span>080-188-0872</span></a>
                <button type='button' style={{
                    padding: '12px', borderRadius: '24px', fontSize: '12px', width:'120px',
                    background: 'rgb(145, 138, 75)', border: 'none', color: 'white'
                }} >PAY YOUR BILL</button>
            </div>
        </nav>
    )
}

export default Header;