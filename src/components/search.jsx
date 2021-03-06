import bg from '../images/bg.jpg';

function Search(props) {
    return (
        <div style={{
            backgroundImage: `url(${bg})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat',
            height: '250px', padding: '50px 15px'
        }} >
            <form>
                <label>
                    <h1>Find a Locker</h1>
                    <input placeholder='Enter City or State'
                        style={{
                            boxSizing: 'border-box', background: 'rgba(255, 255, 255, 0.581)',
                            height: '60px', padding: '20px', border: 'none', width: '45%', fontSize: '20px'
                        }}
                        onChange={props.handleSearch} />
                </label>
                <button style={{
                    position: 'relative', width: '160px', color: 'white', border: 'none',
                    right: '180px', padding: '10px', background: 'rgb(226, 93, 40)'

                }}
                    type='button' >Find Locker</button>
            </form>
        </div>
    )
}

export default Search;