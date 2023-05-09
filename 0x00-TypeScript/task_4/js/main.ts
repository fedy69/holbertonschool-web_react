import { Cpp } from "./subjects/Cpp";
import { Java } from "./js/subjects/Java";
import { React } from "./js/subjects/React";
import { Teacher } from "./js/subjects/Teacher";

const cpp = new Cpp();
export const cTeacher: Teacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 10 };
cpp.setTeacher(cTeacher);

console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Java();
java.setTeacher(cTeacher);

console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const react = new React();
react.setTeacher(cTeacher);

console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());