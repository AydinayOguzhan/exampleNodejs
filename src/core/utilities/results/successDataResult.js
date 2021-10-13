class SuccessDataResult{
    constructor(message, data){
        this.success = true;
        this.message = message;
        
        if (data == null) 
            this.data = ""
        else
            this.data = data;
    }
}

module.exports = SuccessDataResult;