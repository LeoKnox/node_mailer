app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');

app.use(bodyParser.json());
app.use(bodyParser.urlendcoded({extended: false}));

app.get('/', function(req, res) {
    res.render('index');
});