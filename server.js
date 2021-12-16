import { join } from 'path';
require('dotenv').config();
import express, { json, urlencoded, static } from 'express';
import session, { Store } from 'express-session';
import { create } from 'express-handlebars';
import routes from './controllers';
import helpers from './utils/helpers';
import sequelize, { sync } from './config/connection';
const SequelizeStore = require('connect-session-sequelize')(Store);
import _ from 'underscore';
import morgan from "morgan-body";

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = create({ helpers }); // .create({ helpers })

const sesh = {
    secret: 'CHANGEME',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sesh));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(static(join(__dirname, 'public')));

morgan(app);

app.use(routes);

sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
