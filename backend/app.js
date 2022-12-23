import express from 'express'
import querystring from 'querystring'
import cors from 'cors'

const app = express()

const port = 3001

app.use(cors())

app.get('/login', (req, res) => {

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: 'ffd6a605a1f34869988b79ef09d521e9',
            redirect_uri: 'http://localhost:3000/',
        }));
})

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})
