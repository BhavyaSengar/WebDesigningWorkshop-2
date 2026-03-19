// let jsonString=`{"name":"Bhavya","age":25}`;
// let obj=JSON.parse(jsonString);
// console.log(obj);


let student={
    name:"Rahul",
    age:21,
    course:"CSE"
};

for(let key in student){
    console.log(key+" : "+student[key]);
}