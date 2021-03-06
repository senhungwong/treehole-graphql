import * as mongoose from "mongoose";
import { configs } from "../config/config";

export const connectMongo = () => {
    mongoose.connect(`${configs.database.connection}${configs.database.database}`, { useNewUrlParser: true })
        // tslint:disable-next-line:no-console
        .then(() => console.log(`📦 MongoDB connected`))
        // tslint:disable-next-line:no-console
        .catch(err => console.error(err));
};
