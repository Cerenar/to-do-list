export default function task() {

}

export function createTask (name, desc, priority, dueDate) {
    this.name = name;
    this.desc = desc;
    this.priority = priority;
    this.dueDate = dueDate;
    return { name, desc, priority, dueDate };
}