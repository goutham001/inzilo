module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200)
            .send("Welcome to Inzilo");
    });
}