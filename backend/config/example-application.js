module.exports = {
    google: {
        clientID: '358663697169-cebmqlglr75tttqmsl4m71mjr9442cek.apps.googleusercontent.com',
        clientSecret: 'NlZ8emzrRpPP4IJM4Pwkkre5',
        callbackURL: "/api/auth/google/redirect"
    },
    facebook: {
        clientID: 'xx',
        clientSecret: 'xx',
        callbackURL: "/api/auth/facebook/redirect"
    },
    jwt: {
        expiresIn: '1d',
        secret: 'secret'
    },
    mongodb: {
        URI: 'mongodb://test:test123@ds111425.mlab.com:11425/auth-react-redux'
    },
    client: {
        url: 'http://localhost:3000'
    }
};