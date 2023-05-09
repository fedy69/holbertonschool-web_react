namespace Subjects {
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      const { firstName } = this.teacher;
      const { experienceTeachingC } = this.teacher;
      if (experienceTeachingC === undefined) {
        return "No available teacher";
      }
      return `Available Teacher: ${firstName}`;
    }
  }
}
