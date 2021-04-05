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
        version: "2021-03-25",
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
        features: {emotion : {}},
        text: req.query.text
    });
    return result.then(resp => {
        res.send(resp.result.emotion.document.emotion);
    })
    .catch(err => {
        console.log(err.toString());
    });
});

app.get("/text/sentiment", (req,res) => {
    let i = getNLUInstance();
    let result = i.analyze({
        version: '2021-03-25',
        features: {sentiment : {}},
        text: req.query.text
    });
    return result.then(resp => {
        console.log("sentiment: " + JSON.stringify(resp.result, null, 2));
        res.send(resp.result.sentiment.document.label);
    })
    .catch(err => {
        console.log(err.toString());
    });
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})

