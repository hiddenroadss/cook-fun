export class Node {
    value: any;
    next: Node | null;
    position: {x: number; y: number};
    constructor(value: any, position: {x: number; y: number}, next: Node | null = null) {
        this.value = value;
        this.position = position;
        this.next = next;
    }
}