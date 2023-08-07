Problem:
 - RM

Features:
1. Resource Management
    - Resources should be categorized based on their CPU configurations to ensure efficient allocation.
    - The system should maintain a real-time inventory of available resources, including their current status (idle, busy, etc.), location, and other relevant information.
    - 
2. Data Center Management:
    - Data centers should be represented as distinct locations where resources are physically stored.
    - Resources within a data center should be organized and managed separately to facilitate efficient resource allocation within the same geographical area.

1. SERVER_INSTANCE
    - CPU configuration, 
    - pricing,
    - availability status,
    - data center location
2. task requirements

### design a system for tracking and allocating SERVER_INSTANCE resources effectively based on availability and task requirements. Here's an outline of the system:

Data Center
    - Resource


Input
 Task Submission:
 - When a task is submitted to the system, it should include the task's minimum required CPU configuration and the number of instances needed. 
 - The system should determine whether the required resources are available in the specified data center based on the CPU configuration.
 - If sufficient resources are available, the task is assigned to the available instances. If not, the system should either reject the task or find alternatives.


   1. CPU configuration,  number of instances
   2. resources are available in the specified data center 
   3. If response not availble then reject or find alternative

single/multiple SERVER_INSTANCE type of resources.

 minimum cpu configuration requirement need to be passed.



 Usecase
 resources (add,delete)
 avaibleresources() filter (resorseType, spec filter)
 seeALLAlocatedResponse

 