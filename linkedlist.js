const _Node = require('./node')

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    display() {
        if (!this.head) {
            return console.log('empty list');
        } else {
            let currNode = this.head;
            while (currNode !== null) {
                console.log(currNode.value);
                currNode = currNode.next;
            }
            return null
        }
    }
    insertFirst(value) {
        this.head = new Node(value, this.head);
    }
    insertLast(value) {
        if (this.head === null) {
            this.insertFirst(value);
        } else {
            let last = this.head;
            while (last.next !== null) {
                last = last.next;
            }
            last.next = new Node(value, null);
        }
    }
    insertAfter(value, insertion) {
        let currNode = this.find(insertion);
        let afterNode = currNode.next;
        currNode.next = new Node(value, afterNode);
    }
    insertBefore(value, insertion) {
        let currNode = this.head;
        let tempNode = this.head;
        while (currNode.value !== insertion) {
            tempNode = currNode;
            currNode = currNode.next;
        }
        tempNode.next = new Node(value, currNode);
    }
    insertAt(value, index) {
        let currIndex = 0;
        let currNode = this.head;
        while (currIndex !== (index - 1)) {
            currNode = currNode.next;
            currIndex++;
        }
        currNode.next = new Node(value, currNode.next.next);
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
    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    display() {
        let currNode = this.head;
        let str = '';
        while (currNode.next !== null) {
            str = str + currNode.value + ', ';
            currNode = currNode.next;
        }
        str = str + currNode.value;
        console.log(str);
    }
    size() {
        let size = 0;
        let currNode = this.head;
        while (currNode !== null) {
            size++;
            currNode = currNode.next;
        }
        return size;
    }
    isEmpty() {
        return this.head === null;
    }
    findPrevious(value) {
        let currNode = this.head;
        if (currNode === null) {
            return 'empty list';
        } else {
            let tempNode = currNode;
            while (currNode.value !== value) {
                if (currNode.next === null) {
                    return 'no such value';
                } else {
                    tempNode = currNode;
                    currNode = currNode.next;
                }
            }
            return tempNode;
        }
    }
    findLast() {
        let currNode = this.head;
        if (currNode === null) {
            return 'empty list';
        } else {
            while (currNode.next !== null) {
                currNode = currNode.next;
            }
            return currNode;
        }
    }
    reverse(node) {
        if (node.next !== null) {
            this.reverse(node.next);
            node.next.next = node;
            node.next = null;
        } else {
            this.head = node;
        }
    }
    itReverse() {
        if (this.head === null) {
            return 'empty list';
        } else {
            let currNode = this.head;
            let nextNode = this.head.next;
            let nextNextNode = nul;
            console.log(`currNode: ${currNode.value}, nextNode: ${nextNode.value}`);
            currNode.next = null;
            console.log(`set tail next to ${currNode.next}`);
            console.log('\b');
            while (nextNode !== null) {
                console.log(`while nextNode has a value, nextNode: ${nextNode.value}`);
                console.log(`currNode: ${currNode.value}, nextNode: ${nextNode.value}`);
                nextNextNode = nextNode.next;
                if (nextNextNode === null) {
                    console.log(`stored nextNextNode variable: ${nextNextNode}`);
                } else {
                    console.log(`stored nextNextNode variable: ${nextNextNode.value}`);
                }
                console.log('broke nextNode connection and set it back');
                nextNode.next = currNode;
                console.log(`${nextNode.value} points to ${nextNode.next.value}`);
                console.log('store currNode as nextNode (moving over one)');
                currNode = nextNode;
                console.log(`currNode = ${currNode.value}`);
                console.log('move nextNode over one node');
                nextNode = nextNextNode;
                if (nextNode !== null) {
                    console.log(`nextNode = ${nextNode.value}`);
                } else {
                    console.log(`nextNode = ${nextNode}`);
                }
                if (nextNode === null) {
                    console.log('nextNode is null, we have hit the tail, set the tail to be the head');
                    this.head = currNode;
                }
                console.log('\b')
            }
        }
    }
    thirdFromEnd() {
        let currNode = this.head;
        while (currNode.next.next.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    }
    middleOfList() {
        let currNode = this.head;
        let index1 = 0;
        let index2 = this.size();
        if (index2 % 2 === 0) {
            index2 = index2 / 2 - 1;
        } else {
            index2 = Math.floor(index2 / 2);
        }
        while (index1 < index2) {
            currNode = currNode.next;
            index1++;
        }
        return currNode.value;
    }
    cycle(node) {
        if (this.head === null) {
            this.insertFirst(node.value);
        } else {
            let last = this.head;
            while (last.next !== null) {
                last = last.next;
            }
            last.next = node;
        }
    }
    cycleList() {
        let newObject = {};
        let currHead = this.head;
        while (currHead.next !== null) {
            if (newObject[currHead.value]) {
                return true;
            }
            newObject[currHead.value] = currHead.value;
            currHead = currHead.next;
        }
        return false;
    }
}

module.exports = LinkedList;


function WhatDoesThisProgramDo(list) {
    let current = list.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            } else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}