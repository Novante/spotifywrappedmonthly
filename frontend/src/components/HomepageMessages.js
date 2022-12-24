export const WelcomeMessage = () => {
    return (
        <div className="nameWrapper">
            <div className="nameHeader" id="nameHeader">
                Welcome.
            </div>
        </div>)
}

export const LoginMessage = () => {
    return (
        <div className="loginMessageWrapper">
            <div className="loginMessage">
                Please begin by authorizing with your Spotify account.
            </div>
        </div>
    )
}

export const AuthorizeSpotify = () => {
    return (
        <div className="spotifyLoginButton">
            {<a href="http://localhost:3001/login" className="loginButton" onClick={() => localStorage.setItem('authed', 'true')
            }>
                <p>Authorize via Spotify</p>
            </a>}

        </div>

    )
}

