// Define a namespace called Subjects
namespace Subjects {
    // Define an interface called Teacher within the Subjects namespace
    export interface Teacher {
        experienceTeachingJava?: number;
    }
}

// Export a class called Java that extends the Subject class
export class Java extends Subject {
    // Implement the getRequirements method that returns a string
    getRequirements(): string {
        return `Here is the list of requirements for Java`;
    }

    // Implement the getAvailableTeacher method that returns a string
    getAvailableTeacher(): string {
        // Check if the teacher has experience teaching Java
        if (this.teacher.experienceTeachingJava) {
            return `Available Teacher: ${this.teacher.firstName}`;
        } else {
            return `No available teacher`;
        }
    }
}