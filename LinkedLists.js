class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
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
    //Implement a function that inserts a new node before a given node containing a key
    insertBefore(item, key) {
        let currNode = this.head;
        let findValue = this.find(key);
        while (currNode.next.value !== key) {
            currNode = currNode.next;
        }
        currNode.next = new _Node(item, findValue)
    }
    //Implement a function that inserts a new node after a given node containing a key
    insertAfter(item, key) {
        let findValue = this.find(key);
        let tempNext = findValue.next;
        findValue.next = new _Node(item, tempNext);
    }
    //Implement a function that inserts an item at a specific position in the linked list
    insertAt(item, pos) {
        let counter = 1;
        let currNode = this.head;
        while (counter !== pos && currNode !== null) {
            currNode = currNode.next;
            counter++;
        }
        this.insertBefore(item, currNode.value)
    }
    print() {
        let result = [];
        let currNode = this.head;
        while (currNode !== null) {
            result.push(currNode.value);
            currNode = currNode.next;
        }
        console.log(result.join(' => '));
    }
    size() {
        let currNode = this.head;
        let counter = 0;
        while (currNode !== null) {
            counter++;
            currNode = currNode.next;
        }
        return counter;
    }
}

function display(list) {
    let result = [];
        let currNode = list.head;
        while (currNode !== null) {
            result.push(currNode.value);
            currNode = currNode.next;
        }
        console.log(result.join(' => '));
}
function size(list) {
    let currNode = list.head;
    let counter = 0;
    while (currNode !== null) {
        counter++;
        currNode = currNode.next;
    }
    return counter;
}
function isEmpty(list) {
    let currNode = list.head;
    if(!currNode) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
function findPrevious(list, searchItem) {
    let currNode = list.head;
    while (currNode.next.value !== searchItem) {
        currNode = currNode.next;
    }
    console.log(currNode.value);
}
function findLast(list) {
    let currNode = list.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    console.log(currNode.value)
}

module.exports = LinkedList