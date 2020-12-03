const _Node = require('./node');

class DLL {
    constructor() {
        this.head = null;
    }
    display() {
        let currNode = this.head;
        while (currNode !== null) {
            console.log(currNode.value);
            currNode = currNode.next;
        }
    }
    insertFirst(item) {
        if (this.head === null) {
            this.head = new _Node(item, null);
        } else {
            let node = this.head;
            this.head.previous = new _Node(item, this.head);
            this.head = node.previous;
        }
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null, tempNode);
        }
    }
    insertBefore(insertItem, value) {
        let currNode = this.head;
        while (value !== currNode.next.value) {
            currNode = currNode.next;
        }
        let findValue = this.find(value);
        currNode.next = new _Node(insertItem, findValue, currNode);
    }
    insertAfter(insertItem, value) {
        let findValue = this.find(value);
        let tempNext = findValue.next;
        findValue.next = new _Node(insertItem, tempNext, findValue);
    }
    insertAt(insertItem, position) {
        let currNode = this.head;
        let count = 0;
        while (currNode.next !== null) {
            count++;
            if(count === position) {
                this.insertBefore(insertItem, currNode.value)
            }
            currNode = currNode.next;
        }
    }
    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            this.head.previous = null;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while (currNode !== null && currNode.value !== item) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
        currNode.next.previous = previousNode;
    }
    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            } else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }
}

module.exports = DLL;