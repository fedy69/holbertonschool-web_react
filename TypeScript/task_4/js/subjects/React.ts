namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
}
export class React extends Subject {

    getReequirements(): string {
        return `Here is the list of requirements for React`;
    }
    getAvailableTeacher(): string {
        if(this.teacher.experienceTeachingC) { return `Available Teacher: ${this.teacher.firstName}`; }
    else { return `No available teacher`; }
    }
}