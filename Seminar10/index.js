//Exemplu
//Express initialisation
const express = require("express");
const app = express();
const port = 3000;

//Sequelize initialisation
const sequelize = require("./sequelize");

//Import created models
const University = require("./models/university");
const Student = require("./models/student");
const Course = require("./models/course");
const { noExtendRight } = require("sequelize/dist/lib/operators");

//Express middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//Define entities relationship
University.hasMany(Student);
University.hasMany(Course);
Student.belongsToMany(Course, {through: "enrollements"});
Course.belongsToMany(Student, {through: "enrollements"});

//Kickstart the Express aplication
app.listen(port, () => {
  console.log("The server is running on http://localhost:" + port);
});

//Create a middleware to handle 500 status errors
app.use((err, req, res, next) => {
  console.error("[ERROR]:" + err);
  res.status(500).json({ message: "500 - Server Error" });
});

//Create a special GET endpoint so that when it's called it'll sync our database with the models
app.get("/create", async (req, res, next) => {
  try {
    await sequelize.sync({ force: true });
    res.status(201).json({ message: "Database created with the models." });
  } catch (err) {
    next(err);
  }
});

//GET all the universities from the database
app.get("/universities", async (req, res, next) => {
  try {
    const universities = await University.findAll();
    res.status(200).json(universities);
  } catch (err) {
    next(err);
  }
});

//POST a new university to the database
app.post("/university", async (req, res, next) => {
  try {
    await University.create(req.body);
    res.status(201).json({ message: "University Created!" });
  } catch (err) {
    next(err);
  }
});

// GET all students
app.get("/students", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (err) {
    next(err);
  }
});

//POST a new student into a university
app.post("/universities/:universityId/students", async (req, res, next) => {
  try {
    const university = await University.findByPk(req.params.universityId);
    if (university) {
      const student = new Student(req.body);
      student.universityId = university.id;
      await student.save();
      res.status(201).json({ message: 'Student crated!'});
    } else {
      res.status(404).json({ message: '404 - University Not Found'});
    }
  } catch (err) {
    next(err);
  }
});

//Exercitiu
//GET all the students from a university
app.get("/universities/:universityId/students", async (req, res, next) => {
  try {
    const university = await University.findByPk(req.params.universityId, {
      include: [Student]
    });
    if (university) {
      res.status(200).json(university.students);
    } else {
      res.status(404).json({ message: '404 - University Not Found!'});
    }
  } catch(err) {
    next(err);
  }
});

//PUT in order to update a student from a university
app.put("/universities/:universityId/students/:studentId", async (req, res, next) => {
  try {
    const university = await University.findByPk(req.params.universityId);
    if (university) {
      const stundents = await university.getStudents({ id: req.params.studentId });
      const student = stundents.shift();
      if (student) {
        student.studentFullName = req.body.fullName;
        student.studentStatus = req.body.status;
        await student.save();
        res.status(202).json({ message: 'Student updated!' });
      } else {
        res.status(404).json({ message: '404 - Student Not Found!'});
      }
    } else {
      res.status(404).json({ message: '404 - University Not Found!'});
    }
  } catch (err) {
    next(err);
  }
});

//Exercitiu
//GET a student by id from a university by id
app.get('/universities/:universityId/students/:studentId', async (req, res, next) => {
  try {
    const university = await University.findByPk(req.params.universityId)
    if (university) {
      const students = await university.getStudents({ id: req.params.studentId })
      const student = students.shift()
      if (student) {
        res.status(202).json(student)
      } else {
        res.status(404).json({ message: '404 - Student Not Found!' })
      }
    } else {
      res.status(404).json({ message: '404 - University Not Found!' })
    }
  } catch (err) {
    next(err);
  }
});

//Exercitiu
//DELETE a student from a university
app.delete('/universities/:universityId/students/:studentId', async (req, res, next) => {
  try {
    const university = await University.findByPk(req.params.universityId)
    if (university) {
      const students = await university.getStudents({ id: req.params.studentId })
      const student = students.shift()
      if (student) {
        await student.destroy()
        res.status(202).json({ message: 'Student deleted!'})
      } else {
        res.status(404).json({ message: '404 - Student Not Found' })
      }
    } else {
      res.status(404).json({ message: '404 - University Not Found!' })
    }
  } catch (err) {
    next(err);
  }
});

//GET the list of courses
application.get('/universities/:universityId/courses', async (request, response, next) => {
  try {
    const university = await University.findByPk(request.params.universityId);
    if (university) {
      const courses = await university.getCourses();
      if (courses.length > 0) {
        response.json(courses);
      } else {
        response.sendStatus(204);
      }
    } else {
      response.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//GET a course by id
application.get('/university/:universityId/courses/:courseId', async (request, response, next) => {
  try {
    const university = await University.findByPk(request.params.universityId);
    if (university) {
      const courses = await university.getCourses({id: request.params.courseId});
      const course = courses.shift();
      if (course) {
        response.json(course);
      } else {
        response.sendStatus(404);
      }
    } else {
      response.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//POST a new course
application.post('/universities/:universityId/courses', async (request, response, next) => {
  try {
    const university = await University.findByPk(request.params.universityId);
    if (university) {
      const course = await Course.create(request.body);
      university.addCourse(course);
      await university.save();
      response.status(201).location(course.id).send();
    } else {
      response.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//PUT to update a course
application.put('/universities/:universityId/courses/:courseId', async (request, response, next) => {
  try {
    const university = await University.findByPk(request.params.universityId);
    if (university) {
      const courses = await university.getCourses({id: request.params.courseId});
      const course = courses.shift();
      if (course) {
        await course.update(request.body);
        response.sendStatus(204);
      } else {
        response.sendStatus(404);
      }
    } else {
      response.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//DELETE a course
application.delete('/universities/:universityId/courses/:courseId', async (request, response, next) => {
  try {
    const university = await University.findByPk(request.params.universityId);
    if (university) {
      const courses = await university.getCourses({id: request.params.courseId});
      const course = courses.shift();
      if (course) {
        await course.destroy();
        response.sendStatus(204);
      } else {
        response.sendStatus(404);
      }
    } else {
      response.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//GET the list of enrolled students to a course
application.get('/universities/:universityId/courses/:courseId/enrollements', async (request, response, next) => {
  try {
    const university = await University.findByPk(request.params.universityId);
    if (university) {
      const courses = await university.getCourses({id: request.params.courseId});
      const course = courses.shift();
      if (course) {
        const students = await course.getStudents({attributes: ['id']});
        if (students.length > 0) {
          response.json(students);
        } else {
          response.sendStatus(204);
        }
      } else {
        response.sendStatus(404);
      }
    } else {
      response.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//POST to enroll a student to a course
application.post('/universities/:universityId/courses/:courseId/enrollements/:studentId', async (request, response, next) => {
  try {
    const university = await University.findByPk(request.params.universityId);
    if (university) {
      const courses = await university.getCourses({id: request.params.courseId});
      const course = courses.shift();
      const students = await university.getStudents({id: request.params.studentId});
      const student = students.shift();
      if (course && student) {
        course.addStudent(student);
        course.save();
        response.sendStatus(204);
      } else {
        response.sendStatus(400);
      }
    } else {
      response.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//DELETE student enrollement to a course
 application.delete('/universities/:universityId/courses/:courseId/enrollements/:studentId', async (request, response, next) => {
  try {
    const university = await University.findByPk(request.params.universityId);
    if (university) {
      const courses = await university.getCourses({id: request.params.courseId});
      const course = courses.shift();
      const students = await university.getStudents({id: request.params.studentId});
      const student = students.shift();
      if (student && course) {
        course.removeStudent(student);
        course.save();
        response.sendStatus(204);
      } else {
        response.sendStatus(404);
      }
    } else {
      response.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//Exercitiu
//GET student enrollements to courses
application.get('/universities/:universityId/students/:studentId/enrollements', async (request, response, next) => {
  try {
    const university = await University.findByPk(request.params.universityId);
    if (university) {
      const students = await university.getStudents({id: request.params.studentId});
      const student = students.shift();
      if (student) {
        const courses = await student.getCourses({attributes: ['id']});
        if (courses.length > 0) {
          response.json(courses);
        } else {
          response.sendStatus(204);
        }
      } else {
        response.sendStatus(404);
      }
    } else {
      response.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//Data import
application.post('/', async (request, response, next) => {
  try {
    const registry = {};
    for (let u of request.body) {
      const university = await University.create(u);
      for (let s of u.students) {
        const student = await Student.create(s);
        registry[s.key] = student;
        university.addStudent(student);
      }
      for (let c of u.courses) {
        const course = await Course.create(c);
        registry[c.key] = course;
        university.addCourse(course);
      }
      for (let e of u.enrollements) {
        registry[e.courseKey].addStudent(registry[e.studentKey]);
        await registry[e.courseKey].save();
      }
      await university.save();
    }
    response.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

//Exercitiu
//Data export
application.get('/', async (request, response, next) => {
  try {
    const result = [];
    for (let u of await University.findAll()) {
      const university = {
        name: u.name,
        students: [],
        courses: [],
        enrollements: []
      };
      for (let c of await u.getCourses()) {
        university.courses.push({
          key: c.id,
          name: c.name
        });
        for (let s of await c.getStudents()) {
          university.enrollements.push({
            courseKey: c.id,
            studentKey: s.id
          });
        }
      }
      for (let s of await u.getStudents()) {
        university.students.push({
          key: s.id,
          firstName: s.firstName,
          lastName: s.lastName
        });
      }
      result.push(university);
    }
    if (result.length > 0) {
      response.json(result);
    } else {
      response.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
});