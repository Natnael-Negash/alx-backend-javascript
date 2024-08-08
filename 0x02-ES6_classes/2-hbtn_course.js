class HolbertonCourse{
    constructor(name,length,students){
        this._name = name;
        this._length = length;
        this._students = students;
    }
    get name(){
        return this._name;
    }
    set name(val){
        if(typeof val !== 'string') {throw new TypeError('Name must be a string');}
        this._name == val;
    }
    get length(){
        return this._length;
    }
    set length(val){
        if(typeof val !== 'number') {throw new TypeError('length must be a Number');}
        this._length == val;
    }
    get students(){
        return this.students
    }
    set students(val){
        if (!Array.isArray(val))  {throw new TypeError('students must be a string');}
        this._students == val;
    }
}
