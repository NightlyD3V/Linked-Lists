//ES6 functions support constructors? 
class ListNode {
    constructor(node) {
        this.node = node
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head 
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let myList = new LinkedList(node1)

console.log(myList.head.next.node)