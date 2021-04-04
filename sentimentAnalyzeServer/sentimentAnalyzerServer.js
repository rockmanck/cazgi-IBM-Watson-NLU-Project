const express = require('express');
const app = new express();
const dotenv = require('dotenv');
dotenv.config();

getNLUInstance = () => {
    let api_key = process.env.API_KEY;
    let api_url = process.env.API_URL;

    const NLUv1 = require('ibm-watson/natural-language-understanding/v1');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const nlu = new NLUv1({
        version: "2020-08-01",
        authenticator: new IamAuthenticator({
            apikey: api_key
        }),
        serviceUrl: api_url
    });
    nlu.analyze()
    return nlu;
}

app.use(express.static('client'))

const cors_app = require('cors');
app.use(cors_app());

app.get("/",(req,res)=>{
    res.render('index.html');
  });

app.get("/url/emotion", (req,res) => {
    return res.send({"happy":"90","sad":"10"});
});

app.get("/url/sentiment", (req,res) => {
    return res.send("url sentiment for "+req.query.url);
});

app.get("/text/emotion", (req,res) => {
    let i = getNLUInstance();
    let result = i.analyze({
        version: '2021-03-25',
        features: 'emotion',
        text: req.query.text
    });
    // console.log(result);
    result.then(resp => {
        console.log("response: " + resp);
    })
    .catch(err => {
        console.log(err.toString());
    });
    return res.send({"happy":"90","sad":"10"});
});

app.get("/text/sentiment", (req,res) => {
    return res.send("text sentiment for "+req.query.text);
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})

