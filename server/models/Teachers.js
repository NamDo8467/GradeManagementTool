const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const uri = process.env.TEACHER_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getTeacher = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  client.connect(async (err) => {
    const collection = client.db("teachers").collection("information");
    try {
      const teacher = await collection.findOne({ email: email });

      //Check if username exists
      if (!teacher) {
        return res.send({ message: "Email is wrong", type: "email error" });
      }

      //Check if the password is correct
      const validate_password = await bcrypt.compare(
        password,
        teacher.password
      );
      if (!validate_password)
        return res.send({
          message: "Invalid password",
          type: "password error",
        });

      const token = jwt.sign(
        { email: teacher.email },
        process.env.TOKEN_SECRET
      );
      res.header("auth-token", token).send(token);
    } catch (error) {
      res.send(error);
    }
  });
};

const addTeacher = async (req, res) => {
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password, 10);
  const name = req.body.name;

  client.connect((err) => {
    const collection = client.db("teachers").collection("information");
    collection.insertOne(
      {
        name: name,
        email: email,
        password: password,
        student_detail: [],
      },
      (err) => {
        err ? res.send(err) : res.send("1 teacher added");
      }
    );
  });
};
module.exports.getTeacher = getTeacher;
module.exports.addTeacher = addTeacher;
