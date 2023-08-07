import { Resource } from "../domain/resource";
import { ResourceManager } from "../domain/resource_manager";
import { ResourceType } from "../domain/resource_type";

class ResourceManagerImpl implements ResourceManager {
    private static _instance: ResourceManagerImpl;

    private constructor() {
    }

    resourceList: Resource[] = [];
    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    addResource<T>(resource: Resource): void {
        this.resourceList.push(resource);
    }
    deleteResource<T>(resource: Resource): void {
        const deleteIndex = this.resourceList.findIndex((_res) => {
            return _res.isEquals(resource);
        })
        if (deleteIndex > -1) {
            this.resourceList.splice(deleteIndex, 1)
        } else {
            console.log('No item found to be mark deleted');
        }
    }
    getAvailableResourceByFilter(filter: Partial<Resource>): Resource[] {
        return this.resourceList.filter((res => {
            return res.partialMatch(filter);
        }))
    }
    getAllocatedResource<T>(resourceType: ResourceType): Resource[] {
        return this.resourceList.filter((res => {
            return res.resourceType == resourceType && res.isAvailable()
        }))
    }

    getAvailableResource(): Resource[] {
        return this.resourceList.filter((res => {
            return res.isAvailable()
        }))
    }
}

export { ResourceManagerImpl }