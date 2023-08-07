
import { Resource } from './resource';
import { Task } from './task';
import { TaskType } from './task_type';

interface TaskManger {
    allocateResource<T>(taskName: TaskType, resource: Resource[]): void;
    getAllocatedTask<T>(taskName: TaskType): Task[];
}

export { TaskManger }