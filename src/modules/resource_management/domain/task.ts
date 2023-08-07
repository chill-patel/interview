import { Resource } from "./resource";
import { TaskState, TaskType } from "./task_type";

class Task {
    state: TaskState;
    constructor(public type: TaskType, public startTime: number, public endTime: number, public resourceAllocated: Resource[]) {
        this.state = TaskState.STARTED;
    }

}

export { Task }