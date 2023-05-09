namespace Subjects {
  export class Subject {
    private _teacher: Teacher;

    set teacher(value: Teacher) {
      this._teacher = value;
    }

    get teacher(): Teacher {
      return this._teacher;
    }
  }
}
