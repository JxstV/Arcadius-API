const app = require('./app');
const PORT = 1710;
app.listen(PORT, err => {
    if (err) throw err
    console.log(`> it's alive on http://arcadius.wiki.gd:${PORT}`)
});
