export const spotifyAuth = () => {

    const baseURL = 'https://accounts.spotify.com/authorize'
    const params = {
        client_id: 'a3db038a062d48738f8bd73a9b5dea5f',
        response_type: 'token',
        redirect_uri: 'http://localhost:3000/callback',
        scope: [
            'user-top-read',
            'user-read-recently-played',
            'user-read-email',
            'user-read-private'
        ]
    }

    let url = baseURL + '?'
    url += 'client_id=' + params.client_id
    url += '&response_type=' + params.response_type
    url += '&redirect_uri=' + params.redirect_uri
    url += '&scope=' + params.scope.join(' ')

    window.location.href = url
}
