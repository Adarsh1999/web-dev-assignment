const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const cors = require("cors");
const app = express();

// connect to mongodb with database name "postmanapi"
//   useNewUrlParser: true,

//   useUnifiedTopology: true,
// }).then(() => {
//   console.log("Connected to database!");
// }).catch((err) => {console.log(err)});



const connection_url ="mongodb+srv://d@cluster0.z1pxy0g.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected....");
});





app.use(express.json());
app.use(cors());
app.get("/api/user", (req, res, next) => {
  res.send("Hello My name is Adarsh and this is assignment 8!");
});
app.post("/user/create", (req, res) => {
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then(() => {
      res.status(201).json({
        message: "User added successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

app.get("/user/getAll", (req, res, next) => {
  User.find()
    .select(["-fullName"])
    .then((documents) => {
      res.status(200).json({
        message: "Users fetched successfully!",
        users: documents,
      });
    });
});

app.delete("/user/delete", (req, res, next) => {
  if (req.body.email) {
    User.find({ email: req.body.email }, (err, user) => {
      if (user.length > 0) {
        User.deleteOne({ email: req.body.email }).then((result) => {
          console.log(result);
          res.status(200).json({ message: "Sucessful : User deleted!" });
        });
      } else {
        res.status(200).json({ message: "Error : User not found!" });
      }
    });
  } else {
    res.status(200).json({ message: "Error : Email not provided!" });
  }
});

app.put("/user/edit", (req, res, next) => {
  if (req.body.email) {
    User.find({ email: req.body.email }, (err, user) => {
      if (user.length > 0) {
        const newUser = new User({
          _id: user[0]._id,
          fullName: req.body.fullName,
          email: req.body.email,
          password: req.body.password,
        });
        User.findOneAndUpdate({ email: req.body.email }, newUser, {
          runValidators: true,
        })
          .then((result) => {
            console.log(result);
            res.status(200).json({ message: "Success : User updated!" });
          })
          .catch((err) => {
            res.status(500).json({
              message: err.message,
            });
          });
      } else {
        res.status(200).json({ message: "Error : User not found! Please don't edit the email" });
      }
    });
  } else {
    res.status(200).json({ message: "Error : Email not provided! User can only be updated using Email" });
  }
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
