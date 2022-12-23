import {handleLogin} from '../utils/loginMethods'

const Homepage = () => {

    return (
        <div>
            <a href="http://localhost:3001/login" className="loginButton">
                <p>Authorize via Spotify</p>
            </a>
        </div>
    )

}



export default Homepage
