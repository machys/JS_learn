class School{
    constructor(name,level,numberOfStudents){
        this._name=name;
        this._level=level;
        this._numberOfStudents=numberOfStudents;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this.level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    numberOfStudents(numOfStudents){
       if (typeof(numOfStudents) === "number"){
            this._numberOfStudents=numOfStudents;
        }else{
            console.log('Invalid input: numberOfStudents must be set to a Number.');
            }
    }
    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers){
        const range = substituteTeachers.length - 1;
       return substituteTeachers[Math.floor(Math.random()*range)];
    }
}

class Primary extends School{
    constructor(name,level,numberOfStudents,pickupPolicy){
        super(name,level,numberOfStudents);
        this._pickupPolicy=pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

class Middle extends School{
    constructor(name,level,numberOfStudents){
        super(name,level,numberOfStudents);
    }

}

class High extends School{
    constructor(name,level,numberOfStudents,sportTeams){
        super(name,level,numberOfStudents);
        this._sportTeams=sportTeams;
    }
    get sportTeams(){
        return this._sportTeams;
    }
}
class SchoolCatalog{
    constructor(obj)
    {
        this._level=obj;
    }
}
/*
const test1 = new School("zapadakov","primary",20);
console.log(test1);
test1.numberOfStudents(120);
//console.log(test1);
//test1.numberOfStudents("karel");
*/

const prim =new Primary("nazev","primary",20,"naka veta")
const mid =new Middle("zase nazev","middle",150)

//const a =School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

//console.log(a);

const high =new High("cosi","high",13,["a","b"])
prim.numberOfStudents("120")
prim.quickFacts();

const catalog = new SchoolCatalog([prim,mid,high]);
//console.log(catalog)
