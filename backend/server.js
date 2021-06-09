import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import listEndpoints from 'express-list-endpoints'
import resources from './data/resources.json'

dotenv.config()

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const port = process.env.PORT || 9000
const app = express()

const resourceSchema = new mongoose.Schema({
  name: String,
  language: String,
  type: String,
  free: Boolean,
  online: Boolean,
  description: String,
  url: String
});

const Resource = mongoose.model("Resource", resourceSchema);

const seedDB = () => {
  resources.forEach(item => {
    const newResource = new Resource(item)
    newResource.save()
  })
}

seedDB()

app.get("/resources", async (req, res) => {
  const allResources = await Resource.find()
    .sort({ name: 1 })
    .limit(20)
    .exec();
  res.json(allResources);
});

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


// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

// Start the server
app.listen(port, () => {
    // eslint-disable-next-line
    console.log(`Server running on http://localhost:${port}`)
  })