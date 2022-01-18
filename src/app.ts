import * as dotenv from "dotenv";
dotenv.config({ path: '/.env' });
import express, { Application, Request, Response } from "express";
import cors from"cors";
import routeList from "./routes/v1/index"
import {createConnection } from "typeorm"

createConnection().then(connection => {
    const app:Application = express();
    app.use(express.json());
    app.use(cors());

    // route declaration
    app.use(routeList)

    app.listen(4070, () => {
        console.log(`app listening on port 4070`);
    })
    console.log("Connected to database successfully...")
    // here you can start to work with your entities
}).catch(error => console.log(error));

