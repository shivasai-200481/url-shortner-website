const { connectToMongoDB } = require('./connect.js')
const {restrictToLoggedInUserOnly} = require('./middlewares/auth.js')
const express = require('express')
const { router } = require('./routes/url.js')
const path = require('path');
const {router:userRoute} = require('./routes/user.js')
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3030;
const {checkAuth} = require('./middlewares/auth.js')  ;
require('dotenv').config();

const { URL } = require('./models/url.js')
app.set('view engine','ejs');
app.set('views',path.resolve('views'));
const {router:staticRoute} = require('./routes/staticRouter.js')

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static('public'));



app.use('/url',restrictToLoggedInUserOnly,router);
app.use('/user',userRoute);
app.use('/',checkAuth,staticRoute);

app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visitedHistory: { timeStamp: Date.now() }
            }
        },
        {
            new: true,
        }
    );


    res.redirect(entry.redirectURL)

})




connectToMongoDB(process.env.MONGODB_URL).then(() => console.log('Mongodb is Connected')).catch((err) => console.log('Error Connecting to Mongodb', err));
app.listen((process.env.PORT), () => console.log(`Server started!`));