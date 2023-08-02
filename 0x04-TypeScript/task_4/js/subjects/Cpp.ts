import {Subject} from './Subject';

namespace Subjects {
	export interface Teacher {
		experienceTeachingC: number;
		}
	class Cpp extends Subject {
	getRequirement() {
	return 'Here is the list of requirement for Cpp';
	}

	getAvailableTeacher () {
	return this.experienceTeachingC > 0 ? `Available Teacher: ${this.firstName}` : 'No available Teacher';
	}
	}
}
