//PART 4
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
node.next = node2;
node2.next = node3;
node3.next = node4;

function orderChange(head) {
    let current = head;
    while (current !== null && current.next !== null) {
        const temp = current.data;
        current.data = current.next.data;
        current.next.data = temp;

        current = current.next.next;
    }
    return head;
}

let current = orderChange(node);
while (current !== null) {
    console.log(current.data);
    current = current.next;
};