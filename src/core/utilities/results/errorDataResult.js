class ErrorDataResult{
    constructor(message, data){
        this.success = false;
        this.message = message;
        
        if (data == null) 
        this.data = ""
        else
        this.data = data;
    }
}

module.exports = ErrorDataResult;