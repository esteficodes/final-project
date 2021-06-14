import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import listEndpoints from "express-list-endpoints";

dotenv.config();

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/finalProject";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const port = process.env.PORT || 9000;
const app = express();

const resourceSchema = new mongoose.Schema({
  name: String,
  language: String,
  type: String,
  free: Boolean,
  online: Boolean,
  description: String,
  url: String,
});

const Resource = mongoose.model("Resource", resourceSchema);

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

//ENDPOINT TO DISPLAY ALL ENDPOINTS

app.get("/", (req, res) => {
  res.send(listEndpoints(app));
});

//GET ALL RESOURCES
app.get("/resources", async (req, res) => {
  const allResources = await Resource.find().sort({ name: 1 }).exec();
  res.json(allResources);
});



//POST A RESOURCE
app.post("/resources", async (req, res) => {
  try {
    const Resource = await new Resource(req.body).save();
    res.json(Resource);
  } catch (error) {
    if (error.code === 11000) {
      res
        .status(400)
        .json({ error: "Duplicated value", fields: error.keyValue });
    }
    res.status(400).json(error);
  }
});

//GET BY NAME OF RESOURCE
app.get("/resources/:name", async (req, res) => {
  const { name } = req.params;

  try {
    const singleResource = await Resource.findOne({
      name: { $regex: "\\b" + name + "\\b", $options: "i" },
    });
    res.json(singleResource);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Oops! Something went wrong", details: error });
  }
});

//GET BY TYPE OF RESOURCE
app.get("/resources/type/:type", async (req, res) => {
  const { type } = req.params;

  try {
    const resourcesType = await Resource.find({
      type: { $regex: "\\b" + type + "\\b", $options: "i" },
    });
    res.json(resourcesType);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Oops! Something went wrong", details: error });
  }
});

//GET BY LANGUAGE
app.get("/resources/language/:language", async (req, res) => {
  const { language } = req.params;

  try {
    const resourcesLanguage = await Resource.find({
      language: { $regex: "\\b" + language + "\\b", $options: "i" },
    });
    res.json(resourcesLanguage);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Oops! Something went wrong", details: error });
  }
});

//GET BY IS IT FREE OF CHARGE /GET BY IS IT ONLINE
app.get("/resources/", async (res, req) => {
  const { name, free, online } = req.query;

  if (name) {
    const resources = await Resource.find({
      name: {
        $regex: new RegExp(name, "i"),
      },
    });
    res.json(resources);
  }

  if (online) {
    const resources = await Resource.find({
      online: true,
    });
    res.json(resources);
  }

  if (free) {
    const resources = await Resource.find({
      free: true,
    });
    res.json(resources);
  }
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
