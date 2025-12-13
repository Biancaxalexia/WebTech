//Exemplu
const { Op } = require("sequelize");
const Employee = require("../models/employee");

const router = require("express").Router();

router
  .route("/employees")
  .get(async (req, res) => {
    // const { minSalary } = req.query;
    //Exercitiu
    //const { name } = req.query;
    //const { sorted } = req.query;

    const { simplified } = req.query;

    try {
      const employees = await Employee.findAll({
        attributes: simplified ? {exclude: 'id'} : undefined,
       /*where: minSalary ? { salary: { [Op.gt]: minSalary } }
             : name ? {  [Op.or]: 
        [
            { firstName: { [Op.like]: `%${name}%` } },
            { lastName: { [Op.like]: `%${name}%` } },
        ],
        }: undefined,*/
    //Exercitiu
    order: sorted ? [[sorted, "ASC"]] : undefined,
  });
      return res.status(200).json(employees);
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    //console.log("req.body :>> ", req.body);
    try {
      const newEmployee = await Employee.create(req.body);
      return res.status(200).json(newEmployee);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

router
  .route("/employees/:id")
  .get(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);

      if (employee) {
        return res.status(200).json(employee);
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} does not exists` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .put(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);

      if (employee) {
        return res.status(200).json(await employee.update(req.body));
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} does not exists` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  //Exercitiu
  .delete(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);

      if (employee) {
        await employee.destroy();
        return res
          .status(200)
          .json({ message: `Employee with id ${req.params.id} was deleted` });
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} does not exists` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  });

module.exports = router;
