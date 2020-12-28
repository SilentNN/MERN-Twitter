if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
}

// module.exports = {
//     mongoURI: 'mongodb+srv://dev:kWF1NsClmy4f94Oc@cluster0.gesk1.mongodb.net/<dbname>?retryWrites=true&w=majority',
//         //Make sure this is your own unique string
//     secretOrKey: '6c&&U@75L6R^Eq'
// }