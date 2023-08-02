import {Teacher} from './Teacher';

namespace Subjects {
export interface Teacher {
experienceTeachingReact?: number;
}

class ReactClass {
getRequirements() {
return 'Here is the list of requirements';
}

getAvailableTeacher() {
return this.experienceTeachingReact ? `Available Teacher: ${this.firstName}` : 'No available Teacher';
}
}
}
