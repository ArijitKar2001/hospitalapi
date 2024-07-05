import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

// Initialized app using express
const app = express();

// Initialized PORT
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/", (req, res) => {
  res.json({
    Registration: {
      "Doctor Registration [POST]": "/api/register/doctor",
      "Patient Registration [POST]": "/api/register/patient",
    },
    Login: {
      "Doctor Login [GET]": "/api/login/doctor/:id",
    },
  });
});

// Listening on PORT
app.listen(PORT, () => {
  console.log("Server is listening on port :", PORT);
});
