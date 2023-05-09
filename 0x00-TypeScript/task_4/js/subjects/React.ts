namespace Subjects {
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      const { firstName } = this.teacher;
      const { experienceTeachingReact } = this.teacher;
      if (experienceTeachingReact === undefined) {
        return "No available teacher";
      }
      return `Available Teacher: ${firstName}`;
    }
  }
}
