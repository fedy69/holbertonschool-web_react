namespace Subjects {
  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      const { firstName } = this.teacher;
      const { experienceTeachingJava } = this.teacher;
      if (experienceTeachingJava === undefined) {
        return "No available teacher";
      }
      return `Available Teacher: ${firstName}`;
    }
  }
}
