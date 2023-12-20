class Student {
    constructor(name) {
        this._name = name;
    }
    getName(name) { return this._name; }

    setName(name) { this._name = name };
}
std_one = new Student("Akbar");
std_one.setName("Jamali")
console.log(std_one.getName());

class Error {
    constructor(type, message, code) {
        this._type = type;
        this._message = message;
        this._code = code;
    }
    // get
    getTypeError(type) {
        return this._type;
    }
    getMessageError(message) {
        return this._message;
    }
    getCodeError(code) {
        return this._code;
    }

    // set
    setType(newType) {
        this._type = newType;
    }
    setMessage(newMessage) {
        this._message = newMessage;
    }
    setCode(newCode) {
        this._code = newCode;
    }
}

myError = new Error('ValidationError', 'Invalid input', 400);

myError.setType('AuthorizationError');
myError.setMessage('Unauthorized access');
myError.setCode(401);

console.log(myError.getTypeError());
console.log(myError.getMessageError());
console.log(myError.getCodeError());