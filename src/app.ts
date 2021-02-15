import 'dotenv/config';
import './helpers/connectDatabase';
import express from 'express';
import cookieParser from 'cookie-parser';

import { cors, morgan } from './middleware';
import { authentication, stripe, secured, home, contact, products } from './routes';
import githubroute from './routes/authentication/github';

const app = express();

//- Middleware -//

app.use([express.json(), cors, morgan, cookieParser()]);

//- Routes -//

app.use('/api/authentication', authentication);
app.use('/api/contact', contact);
app.use('/api/payment', stripe);
app.use('/api/secured', secured);
app.use('/', home);
app.use('/api/crud/admin/products', products);
app.use(githubroute);

//- Server -//

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`app listening on port: ${PORT}.`));
