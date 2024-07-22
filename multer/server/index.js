import express, { urlencoded } from "express";
import fileRoute from "./routes/file.js"
import cors from "cors";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("view", path.resolve("./views"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", fileRoute);

app.listen(2000, ()=>{
    console.log(`running on port 2000`);
})