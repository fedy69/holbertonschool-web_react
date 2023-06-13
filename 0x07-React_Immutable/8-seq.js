import { Seq } from 'immutable';

const printBestStudents = (object) => {
  const seq = Seq(object);

  const getStudent = seq.filter((value) => value.score > 70);

  const students = getStudent
    .map((student) => ({
      ...student,
      firstName: formatName(student.firstName),
      lastName: formatName(student.lastName)
    }))
    .toJS();

  console.log(students);
};

const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

export default printBestStudents;
