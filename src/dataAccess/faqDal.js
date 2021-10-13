const faqModel = require("../models/faqModel")

var mysql = require('mysql');
const { object } = require("joi");
const Messages = require("../constants/messages");
const successResult = require("../core/utilities/results/successResult")
const successDataResult = require("../core/utilities/results/successDataResult");
const SuccessDataResult = require("../core/utilities/results/successDataResult");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "faq"
});

class FaqDal {
    getAll() {
        return new Promise((resolve, reject) => {
            con.connect((successResponse)=>{
                con.query("select * from Faq", (err,result)=>{
                    if(err) throw err;
                    resolve(new successDataResult(Messages.getSuccessful, result));
                    console.log(result)
                })
            },(errorResponse)=>{
                reject(errorResponse)
            })
        })
    }

    getOne(id) {
        return new Promise((resolve, reject) => {
            con.connect((successResponse)=>{
                con.query(`select * from Faq where id=${id}`, (err,result)=>{
                    if(err) throw err;
                    const {...data} = result;
                    resolve(new SuccessDataResult(Messages.getSuccessful, data));
                })
            },(errorResponse)=>{
                reject(errorResponse)
            })
        })
    }


    add(faqModel) {
        return new Promise((resolve, reject) => {
            con.connect((successResponse)=>{
                con.query(`insert into faq(question,answer) values("${faqModel.question}", "${faqModel.answer}")`, (err,result)=>{
                    if(err) throw err;
                    resolve(new successResult(Messages.getSuccessful));
                })
            },(errorResponse)=>{
                reject(errorResponse)
            })
        })
    }

    update(faqModel) {
        return new Promise((resolve, reject) => {
            con.connect((successResponse)=>{
                con.query(`update faq set question = "${faqModel.question}", answer = "${faqModel.answer}" 
                where id=${faqModel.id}`, (err,result)=>{
                    if(err) throw err;
                    resolve(new successResult(Messages.getSuccessful));
                })
            },(errorResponse)=>{
                reject(errorResponse)
            })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            con.connect((successResponse)=>{
                con.query(`delete from faq where id=${id}`, (err,result)=>{
                    if(err) throw err;
                    resolve(new successResult(Messages.getSuccessful));
                })
            },(errorResponse)=>{
                reject(errorResponse)
            })
        })
    }
}

module.exports = FaqDal;