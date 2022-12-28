import express from 'express'
import querystring from 'querystring'
import cors from 'cors'
import reqExpress from 'request'

const app = express()

const port = 3001

app.use(cors())

app.get('/login', (req, res) => {

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: 'ffd6a605a1f34869988b79ef09d521e9',
            scope: 'user-top-read user-read-currently-playing user-read-playback-state streaming',
            redirect_uri: 'http://localhost:3001/callback',
        }));
})

app.get('/callback', (req, res) => {
    let access_token
    let authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: req.query.code,
                redirect_uri: 'http://localhost:3001/callback',
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer('ffd6a605a1f34869988b79ef09d521e9' + ':' + 'ea88943fb227464faf2a527cb8400972').toString('base64'))
            },
            json: true
        }

    reqExpress.post('https://accounts.spotify.com/api/token', authOptions, function(error, request, body){
        res.redirect(`http://localhost:3000/?token=${body.access_token}`)
    })
})

app.get('/getinfo/', async (req, res) => {
    let token = req.query.token

    const artistList = await fetch('https://api.spotify.com/v1/me/top/artists?limit=50', {
        method: 'get',
        headers: new Headers({
            'Authorization': `Bearer ${token}`
        })
    })
    const json = await artistList.json()

    res.send(json)

})

app.get('/getrelatedartists/', async(req,res) => {
    let token = req.query.token
    let artistId = req.query.artistId

        let tempArr = []
        const artistList = await fetch(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${token}`
            })
        })
        const json = await artistList.json()
        console.log(json.artists)

        for (let i = 0; i < json.artists.length; i++) {
            if (json.artists[i].images[2].height === 160 && json.artists[i].images[2].width === 160) {
                tempArr.push(json.artists[i])
            }
        }

        console.log(tempArr)

        console.log(json.artists[0].name)

        res.send(tempArr)


})

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})
