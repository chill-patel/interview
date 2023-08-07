enum TaskType {
    DATA_UPLOAD_TO_INSTANCE,
    DB_CREATE
}


enum TaskState {
    STARTED,
    INPROGRESS,
    COMPLETED
}

export { TaskType, TaskState }
