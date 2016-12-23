let express = require('express'),
    app = express(),
    bp = require('body-parser'),
    path = require('path'),
    port = process.env.port || 8010;

app.use(bp.json());

app.use(express.static(path.join(__dirname, "bower_components")));
app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "client/assets")));

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
})
