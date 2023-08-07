import { Resource } from "./modules/resource_management/domain/resource";
import { ResourceManager } from "./modules/resource_management/domain/resource_manager";
import { ResourceType } from "./modules/resource_management/domain/resource_type";
import { TaskManger } from "./modules/resource_management/domain/task_manager";
import { TaskType } from "./modules/resource_management/domain/task_type";
import { ResourceManagerImpl } from "./modules/resource_management/infra/resource_manager_impl";
import { TaskManagerImpl } from "./modules/resource_management/infra/task_manager";

class ResourceTest {

    createResource(price: number = 100, core: number = 8): Resource {
        return new Resource(ResourceType.SERVER_INSTANCE, 'm1', price, true, core)
    }
    assignResourceToTask() {
        const resourceManager: ResourceManager = ResourceManagerImpl.Instance;
        // create resource
        resourceManager.addResource(this.createResource())
        // Available resources
        console.log(resourceManager.getAvailableResource())

        const taskManger: TaskManger = new TaskManagerImpl(resourceManager);
        // allocate resource
        taskManger.allocateResource(TaskType.DB_CREATE, [this.createResource()])

        // Check for allocated resources
        const taskListForDBCreate = taskManger.getAllocatedTask(TaskType.DB_CREATE)
        const taskListUploadInstance = taskManger.getAllocatedTask(TaskType.DATA_UPLOAD_TO_INSTANCE)
        console.log(taskListForDBCreate)
        console.log(taskListUploadInstance)
    }


}


// Create resource
const resourceTest = new ResourceTest();
resourceTest.assignResourceToTask()