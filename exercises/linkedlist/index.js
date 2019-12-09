// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next){
    this.data = data;
    if(next){
      this.next = next
    }
    else {
      this.next = null;
    }
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    let n = new Node(data);
    if(this.head){
      let temp = this.head;
      this.head = n;
      n.next = temp;
    }
    else {
      this.head = n;
    }
  }

  size(){
    let count = 0;
    let temp = this.head;

    while(temp){
      count++;
      temp = temp.next;
    }

    return count;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    let temp = this.head;

    while(temp.next !== null){
      temp = temp.next;
    }

    return temp;
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    if(!this.head){
      return;
    }

    this.head = this.head.next;
  }

  removeLast(){
    let temp = this.head;

    if(!this.head){
      return;
    }

    if(!this.head.next){
      this.head = null
    }
    else {
      while(temp.next.next !== null){
        temp = temp.next;
      }
      temp.next = null;
    }
  }

  insertLast(data){
    let node = new Node(data);

    if(!this.head){
      this.head = node;
    }
    else {
      let temp = this.head;
      while(temp.next !== null){
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  getAt(index){
    if(!this.head){
      return null
    }
    else {
      if(index === 0){
        return this.head;
      }
      else {
        let count = 0;
        let temp = this.head;

        while(temp){
          temp = temp.next;
          count++;
          if(count === index){
            return temp;
          }
        }
      }
    }
  }

  removeAt(index){
    if(!this.head){
      return;
    }
    if(index === 0){
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(index - 1);
    if(prev && prev.next){
      prev.next = prev.next.next;
      return;
    }
  }

  insertAt(data, index){
    let node = new Node(data);
    if(!this.head){
      this.head = node;
      return;
    }

    if(index == 0){
      let temp = this.head;
      this.head = node;
      this.head.next = temp;

      return;
    }

    let prev = this.getAt(index - 1);

    if(prev){
      node.next = prev.next;
      prev.next = node;
    }
    else {
      let size = this.size();
      let last = this.getAt(size-1);
      last.next = node;
    }
    return;
  }

  forEach(fn){

  }

}

module.exports = { Node, LinkedList };
