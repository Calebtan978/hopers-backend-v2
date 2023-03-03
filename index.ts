import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './src/app';
import main from './src/logic';
// const port = config.port;
dotenv.config();

const port = process.env.PORT || 5000;
// const mongooseURI = process.env.MONGOOSE_URI;
const mongooseURI = process.env.MONGODB_URI;

mongoose
    .connect(mongooseURI)
    .then(() => {
        console.log('Connected to MongoDB');
        main();
        app.listen(port, () => {
            console.log(`Listening to port ${port}`);
            // main();
        });
    })
    .catch((err) => {
        console.log('err: ', err);
    });
