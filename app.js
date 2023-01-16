import express from "express";
import session from "express-session";
import flash from 'req-flash'
import homeRouter from "./components/home/homeRouter.js";
import dashboarRouter from "./components/dashborad/dashboardRouter.js";
import loginRuter from './components/login/loginRouter.js'

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/assets", express.static("assets"));
app.use("/public", express.static("node_modules/tinymce"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Konfigurasi session
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "k4mv n@n74",
    name: "secretName",
    cookie: {
      sameSite: true,
      maxAge: null,
    },
  })
);
app.use(flash());

//app router
app.use("/", homeRouter);
app.use("/dashboard", dashboarRouter);
app.use('/login', loginRuter)

//app listen
app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
});
