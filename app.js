const LinkedList = require('./linkedlist');

function main() {
    let SLL = new LinkedList();
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('squirrel');
    SLL.insertLast('tauhida');
    SLL.remove('squirrel');
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 2);
    SLL.remove('tauhida');
    SLL.insertLast(1)
    SLL.insertLast(2)
    SLL.insertLast(4)
    SLL.insertLast(5)
    SLL.insertLast(6)
    SLL.insertLast(2)
    SLL.insertLast(4)
    SLL.display();
}

main();