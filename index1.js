// const cars = async () => {
//   const response = await fetch(
//     " https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=11459"
//   );
//   const jsonData = await response.json();

//   console.log(jsonData);
// };
// cars();
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let myPerson = new Person("John", 30, "male");
console.log(myPerson);
