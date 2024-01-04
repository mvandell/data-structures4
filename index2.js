//PART 2
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
}

const linkedList = new LinkedList();
const node = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
node.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function reverseList(head) {
    
}