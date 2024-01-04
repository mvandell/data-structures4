//PART 2
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const node = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
node.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const oldHead = node.data;

function reverseList(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    const reverseLinks = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return reverseLinks;
}

let current = reverseList(node);
while (current !== null) {
    console.log(current.data);
    current = current.next;
};