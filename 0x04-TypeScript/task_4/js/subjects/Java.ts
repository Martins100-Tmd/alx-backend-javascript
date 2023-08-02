namespace Subjects {
export interface Teacher {
experienceTeachingJava?: number;
}

class JavaClass {
getRequirement() {
return 'Here is the list of requirement for Java';
}

getAvailableTeacher () {
return this.experienceTeachingJava > 0 ? `Available Teacher: ${this.firstName}` : 'No available teacher';
}
}
}
