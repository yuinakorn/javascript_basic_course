// การใช้งาน Object และ JSON

// 1. การสร้าง Object แบบปกติ
let person = {
    name: "John",
    age: 30,
    weight: 63,
    height: 1.68
}

console.log(person);

// 1.1 การเข้าถึง object ด้วย dot notation
// console.log(person.name);


// 2. การสร้าง Object แบบใช้ new Object()
let person2 = new Object();
person2.name = "John";
person2.age = 30;
person2.weight = 63;
person2.height = 1.68;

console.log(person2);


// 3. การสร้าง Object แบบใช้ Constructor Function
function Person3(name, age, weight, height) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height * 100;
}

let newPerson = new Person3("John", 30, 63, 1.68);
console.log(newPerson);


// 4. การสร้าง Object แบบใช้ Class
class Person4 {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height * 100;
    }
}

let person4 = new Person4("John", 30, 63, 1.68);
console.log(person4);


////// JSON //////

// 5. การใช้งาน JSON
let person5 = {
    "name": "John",
    "age": 30,
    "weight": 63,
    "height": 1.68
}

console.log(person5);

// 5.1 การเข้าถึง json ด้วย bracket notation
// console.log(person5["name"]);


// 6. การใช้งาน JSON แบบ Array
let persons = [
    {
        "name": "John",
        "age": 30,
        "weight": 63,
        "height": 1.68
    },
    {
        "name": "Jane",
        "age": 25,
        "weight": 55,
        "height": 1.65
    }
]

console.log(persons);


// 7. การใช้งาน JSON แบบ Object ซ้อน Object
let person6 = {
    "name": "John",
    "age": 30,
    "weight": 63,
    "height": 1.68,
    "address": {
        "street": "123/456",
        "city": "Pangnga",
        "country": "Thailand"
    }
}

console.log(person6);

// 8. การใช้งาน JSON แบบ Array ซ้อน Object
let persons2 = [
    {
        "name": "John",
        "age": 30,
        "weight": 63,
        "height": 1.68,
        "address": {
            "street": "123/456",
            "city": "Pangnga",
            "country": "Thailand"
        }
    },
    {
        "name": "Jane",
        "age": 25,
        "weight": 55,
        "height": 1.65,
        "address": {
            "street": "456/789",
            "city": ["Pangnga", "Bangkok", "Chiang Mai"],
            "country": "Thailand"
        }
    }
]

console.log(persons2);


// 9. การแปลง Object เป็น JSON ด้วย JSON.stringify()
let person7 = {
    "name": "John",
    "age": 30,
    "weight": 63,
    "height": 1.68
}

// การแปลง Object เป็น JSON ด้วย JSON.stringify()
// จะได้ข้อมูลในรูปแบบ String
// เหมาะสำหรับการส่งข้อมูลผ่าน API
let json = JSON.stringify(person7);
console.log(json);


// 10. การแปลง JSON เป็น Object ด้วย JSON.parse()
// จะได้ข้อมูลในรูปแบบ Object
// เหมาะสำหรับการเข้าถึงข้อมูลแบบ Object
let person8 = JSON.parse(json);
console.log(person8);


// 11. การแสดงข้อมูล JSON ในรูปแบบ String ด้วย JSON.stringify() แบบมีการจัดรูปแบบข้อมูล
let person10 = {
    "name": "John",
    "age": 30,
    "weight": 63,
    "height": 1.68
}

let json3 = JSON.stringify(person10, null, 4);  // null คือการจัดรูปแบบข้อมูล 4 คือการเว้นช่องว่าง
console.log(json3);