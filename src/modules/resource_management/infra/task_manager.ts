import { Resource } from "../domain/resource";
import { ResourceManager } from "../domain/resource_manager";
import { Task } from "../domain/task";
import { TaskManger } from "../domain/task_manager";
import { TaskType } from "../domain/task_type";

class TaskManagerImpl implements TaskManger {
    taskList: Task[] = []
    constructor(private resourceManager: ResourceManager) {
    }

    findClosestToExactMatch(arr: number[], target: number) {
        if (arr.length === 0) {
            return 0
        }
        return arr.reduce((closest, current) => {
            const currentDifference = Math.abs(current - target);
            const closestDifference = Math.abs(closest - target);
            if (currentDifference < closestDifference) {
                return current;
            }
            return closest;
        });
    }



    allocateResource<T>(taskType: TaskType, resourceList: Resource[]): void {
        const availableResources = this.resourceManager.getAvailableResource();
        const availablePriceList = availableResources.map(resource => resource.pricing);
        const availableCpuCore = availableResources.map(resource => resource.cpuCore);
        const finalResourceList = [];
        for (const resource of resourceList) {
            const closetCpu = this.findClosestToExactMatch(availableCpuCore, resource.cpuCore);
            const closetPrice = this.findClosestToExactMatch(availablePriceList, resource.pricing);
            let finalResource
            if (closetCpu > closetPrice) {
                // use price
                finalResource = availableResources[availablePriceList.indexOf(closetPrice)]
            } else {
                // use CPU
                finalResource = availableResources[availableCpuCore.indexOf(closetCpu)]
            }
            if (finalResource != null) {
                finalResource.availability = false;
                finalResourceList.push(finalResource)
            }

        }

        if (finalResourceList.length > 0) {
            this.taskList.push(new Task(taskType, new Date().getTime(), new Date().getTime() + 60 * 1000, finalResourceList))

        } else {
            console.log('No resource found');
        }
    }
    getAllocatedTask<T>(taskName: TaskType): Task[] {
        return this.taskList.filter((task) => {
            return task.type === taskName;
        })
    }
}

export { TaskManagerImpl }