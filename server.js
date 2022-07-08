//Packages
require("dotenv").config();
const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();

//DB Connection
const { connectDB } = require("./db/connect");

//DB Sync
const { sync } = require("./db/sync");

//Data Insertion
const dataInsertion = require("./utils/dataInsertion");

//Routers
const authRouter = require("./routes/authRouter");
const itemsRouter = require("./routes/itemsRouter");
const regionsRouter = require("./routes/regionsRouter");
const SKUsRouter = require("./routes/SKUsRouter");
const pelletSizeRouter = require("./routes/pelletSizeRouter");
const packingRouter = require("./routes/packingRouter");
const PriceRouter = require("./routes/PriceRouter");

//Middleware
const { notFoundMiddleware } = require("./middleware/notFound");
const { errorHandlerMiddleware } = require("./middleware/errorHandler");
const authenticateUser = require("./middleware/auth");

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.set("trust proxy", 1);
app.use(rateLimiter({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get("/", (req, res) => {
  res.send(
    `<h1 style="font-style : italic; text-decoration: underline">Heritage Foods Limited</h1><a href="/api-docs" style="font-style : italic; text-decoration: underline">API Documentation</a>`
  );
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/catalog/items", authenticateUser, itemsRouter);
app.use("/api/v1/catalog/regions", authenticateUser, regionsRouter);
app.use("/api/v1/catalog/skus", authenticateUser, SKUsRouter);
app.use("/api/v1/catalog/pellet-size", authenticateUser, pelletSizeRouter);
app.use("/api/v1/catalog/packing", authenticateUser, packingRouter);
app.use("/api/v1/catalog/product-prices", authenticateUser, PriceRouter);

app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;

const syncModels = async () => {
  try {
    await sync();
    await syncData();
  } catch (error) {
    console.log(`Model synchronization failed! ${error}`);
  }
};

const syncData = async () => {
  try {
    await dataInsertion();
  } catch (error) {
    console.log(`Data synchronization failed! ${error}`);
  }
};

const start = async () => {
  try {
    await connectDB();
    await syncModels();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(`Database authentication failed! ${error}`);
  }
};

start();
