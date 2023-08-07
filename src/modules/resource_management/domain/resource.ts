import { ResourceType } from "./resource_type";

class Resource {

    constructor(public resourceType: ResourceType, public name: string, public pricing: number, public availability: boolean, public cpuCore: number) {

    }

    isAvailable(): boolean {
        return this.availability;
    }

    isEquals(resource: Resource) {
        if (this.availability) {
            return resource.name == this.name && resource.resourceType == this.resourceType;

        }
        return false;
    }

    partialMatch(resource: Partial<Resource>) {
        if (this.availability) {
            return resource.name == this.name || resource.resourceType || this.resourceType;

        }
        return false;
    }
}

export { Resource }