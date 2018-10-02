export class Task {
    public task_type_code: string;
    public entity_id: string;
    public output_queue: string;

    constructor(type: string) {
        this.entity_id = null;
        this.task_type_code = null;
        this.output_queue = type;
    }
}