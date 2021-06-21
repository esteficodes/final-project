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
mongoose.set('useCreateIndex', true);
mongoose.Promise = Promise;

//USER MODEL
const User = mongoose.model('User', {
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
})

//RESOURCES MODEL
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

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization')

  try {
    const user = await User.findOne({ accessToken })
    if (user) {
      next()
    } else {
      res.status(401).json({ success: false, message: 'not authorized '})
    }
  } catch (error) {
    res.status(400).json({ success: false, message: 'invalid request', error })
  }
}

const port = process.env.PORT || 8080;
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//STARTS DEFINING ROUTES
app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

//SIGNUP
app.post('/signup', async (req, res) => {
  const { username, password } = req.body

  try {
    const salt = bcrypt.genSaltSync()

    const newUser = await new User({
      username,
      password: bcrypt.hashSync(password, salt)
    }).save()

    res.json({
      success: true,
      userID: newUser._id,
      username: newUser.username,
      accessToken: newUser.accessToken
    })
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid request', error })
  }
})

//AUTHENTICATE USER
app.post('/signin', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username })

    if (user && bcrypt.compareSync(password, user.password)) {
      res.json({
        success: true,
        userID: user._id,
        username: user.username,
        accessToken: user.accessToken
      })
    } else {
      res.status(401).json({ success: false, message: 'Not authorized' })
    }
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid request', error })
  }
})

//MAIN ENDPOINT - LOGGED-IN USERS
app.get('main', authenticateUser)
app.get('/main', async (req, res) => {
  const main = await Resource.find()
  res.json(main)
})

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

//GET BY ID OF RESOURCE

app.get("/resources/:_id", async (req, res) => {
  const { _id } = req.params;

  try {
    const oneResource = await Resource.findById(_id);
    res.json(oneResource);
  } catch (error) {
    res.status(400).json({ error: "Something went wrong", details: error });
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
