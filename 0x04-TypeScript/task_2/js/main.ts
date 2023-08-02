export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workFromHome(): string {
    return "Working from home";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

export const createEmployee = function createEitherTeacherOrDirector(salary: number | string) {
  if (typeof salary === "number" && salary < 500) return new Teacher();
  if (typeof salary === "string" && parseInt(salary) >= 500) {
    return new Director();
  }
};

export const isDirector = function checkIfFunctionisTypeisDirector(
  employee: any
): employee is Director {
  return typeof employee.workDirectorTasks() === "function";
};
//Or
//export function isDirector(employee: (Director | Teacher)) {
//  return employee instanceof Director;
//}

type Subjects = `Math` | `History`;

const executeWork = function (employee: any) {
  if (isDirector(employee)) {
    return "Getting to director tasks";
  }
  return "Getting to work";
};

const teachClass = function (todayClass: Subjects) {
  return todayClass === "Math" ? "Teaching Math" : "Teaching History";
};

