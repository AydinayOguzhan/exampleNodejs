const dal = require("../dataAccess/faqDal")
const faqModel = require("../models/faqModel")
const Joi = require('joi');
const errorResult = require("../core/utilities/results/errorResult")

const addSchema = Joi.object({
    question: Joi.string().min(5).required(),
    answer: Joi.string().required()
})

const updateSchema = Joi.object({
    id:Joi.number().required(),
    question: Joi.string().min(5).required(),
    answer: Joi.string().required()
})

class FaqService{

    constructor(){
        this.dalInstance = new dal();
    }

    async getAll(){
        const result = await this.dalInstance.getAll();
        return result;
    }

    async getOne(id){
        const result = await this.dalInstance.getOne(id);
        return result;
    }

    async add(faqModel){
        const value = addSchema.validate(faqModel);
        if (value.error != null) {
            return new errorResult(value.error.message);
        }
        const result = await this.dalInstance.add(faqModel);
        return result;
    }

    async update(faqModel){
        const value = updateSchema.validate(faqModel);
        if (value.error != null) {
            return new errorResult(value.error.message);
        }
        const result = await this.dalInstance.update(faqModel);
        return result;
    }

    async delete(id){
        const result = await this.dalInstance.delete(id);
        return result;
    }
}

module.exports = FaqService;
