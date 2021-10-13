const express = require("express");
const router = express.Router();

const service = require("../business/faqService")
const serviceInstance = new service();
const faqModel = require("../models/faqModel")


//read all
router.get("/", async (req, res, next) => {
    const result = await serviceInstance.getAll();
    console.log("api")
    res.json(result);
});

//read one
router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    const result = await serviceInstance.getOne(id);
    res.json(result);
});

//create one
router.post("/", async (req, res, next) => {
    const { question, answer } = req.body;
    const model = new faqModel();
    model.question = question;
    model.answer = answer;
    const result = await serviceInstance.add(model);
    res.json(result);
});

//update one
router.put("/", async (req, res, next) => {
    const { id, question, answer } = req.body;
    const model = new faqModel();
    model.id = id;
    model.question = question;
    model.answer = answer;
    const result = await serviceInstance.update(model);
    res.json(result);
});

//delete one 
router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    const result = await serviceInstance.delete(id);
    res.json(result);
});

module.exports = router;