const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const uri = process.env.TEACHER_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const addStudent = (req, res) => {
  const teacherName = req.body.teacher;
  const studentName = req.body.name;
  const grade = req.body.grade;
  const subject = req.body.subject;

  client.connect(async (err) => {
    const collection = client.db("teachers").collection("information");
    try {
      const student = await collection.findOne({ name: studentName });
      if (student) {
        res.send("Student already exists");
      } else {
        collection.update(
          { name: teacherName },
          {
            $push: {
              student_detail: {
                name: studentName,
                subject: subject,
                grade: grade,
              },
            },
          },
          (err) => {
            err ? res.send(err) : res.send("1 student added");
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  });
};

const getStudent = (req, res) => {
  // const teacher_name = req.params

  client.connect(async (err) => {
    const collection = client.db("teachers").collection("information");

    collection
      .find({}, { projection: { student_detail: 1 } })
      .toArray()
      .then((docs) => {
        res.send(docs);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
module.exports.addStudent = addStudent;
module.exports.getStudent = getStudent;
