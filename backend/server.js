import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import listEndpoints from 'express-list-endpoints' 

dotenv.config()

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/finalProject"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useCreateIndex', true); //added due to deprecation error 26868
mongoose.Promise = Promise


const port = process.env.PORT || 9000
const app = express()

const resourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The message field is mandatory"],
    minlength: 2,
    maxlength: 140,
  },
  language: String,
  type: String,
  free: Boolean,
  online: Boolean,
  description: String,
  url: String
});

const Resource = mongoose.model("Resource", resourceSchema);

app.use(cors());
app.use(express.json());

app.get("/resources", async (req, res) => {
  const allResources = await Resource.find()
    .sort({ name: 1 })
    .limit(20)
    .exec();
  res.json(allResources);
});

app.post("/resources", async (req, res) => {
  try {
    const newResource = await new Resource(req.body).save();
    res.json(newResource);
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