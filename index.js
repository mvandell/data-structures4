//PART 1
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const node11 = new Node(1);
const node12 = new Node(2);
const node13 = new Node(4);
node11.next = node12;
node12.next = node13;

const node21 = new Node(1);
const node22 = new Node(3);
const node23 = new Node(4);
node21.next = node22;
node22.next = node23;

function mergeLists(list1, list2){
    const dummy = new Node(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.data < list2.data) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    return dummy.next;
}

let current = mergeLists(node11, node21);
while (current !== null) {
    console.log(current.data);
    current = current.next;
}