// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    FullTimeEmployee: boolean;
    yearsOfExperience?: number;  // Optional property
    location: string;
    [propName: string]: any;  // Allow additional properties
}

// Extend Teacher interface to create Directors interface
interface Directors extends Teacher {
    numberOfReports: number;
}

// Define a function type for printing teacher information
interface PrintTeacherFunc {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
export const printTeacher: PrintTeacherFunc = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};

// Introduce a language feature for composable objects without relying on inheritance
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
    firstName: string;
    lastName: string;
}

// Define the constructor interface for StudentClass
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Implement the StudentClass using the interface
export class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return `Currently working`;
    }

    displayName(): string {
        return this.firstName;
    }
}
