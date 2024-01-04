//PART 3
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
    removeNode(value) {
        this.head = removeValue(this.head, value);
    }
    displayList(current = this.head) {
        while (current !== null) {
            console.log(current.data + " ");
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.head = new Node(1);
const node2 = new Node(2);
const node3 = new Node(6)
const node4 = new Node(3);
const node5 = new Node(4);
const node6 = new Node(5);
const node7 = new Node(6);
linkedList.head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

const deleteValue = 6;

function removeValue(current, value, previous = null){
    if (current.data === value) {
        if (previous === null) {
            return current.next;
        } else {
            previous.next = current.next;
            return current.next;
        }
        
    }
    current.next = removeValue(current.next, value, current);
    if (current.next === null && current.data === value) {
        previous.next = null;
    }
    return current;
}
linkedList.removeNode(deleteValue);
linkedList.displayList();