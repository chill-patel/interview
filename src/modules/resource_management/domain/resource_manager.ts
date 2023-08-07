import { Resource } from './resource';
import { ResourceType } from './resource_type';
interface ResourceManager {
    addResource(resource: Resource): void;
    deleteResource(resource: Resource): void;
    getAvailableResourceByFilter(filter: Partial<Resource>): Resource[];
    getAllocatedResource(resourceType: ResourceType): Resource[];
    getAvailableResource(): Resource[];

}



export { ResourceManager }