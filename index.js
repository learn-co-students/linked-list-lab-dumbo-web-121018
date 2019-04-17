function getName(node) { // returns the name of the node
  return node.name
}

function headNode(linkedlist, collection) { // returns first item in linkedlist
  return collection[linkedlist]
}

function next(node, collection) { // gives you next item on linkedlist
  return collection[node.next]
}

function nodeAt(index, linkedlist, collection) {
  let currentNode = headNode(linkedlist, collection); // currentNode is the first node in the linkedlist
  for(let i = 0; i < index; i++) { // keep itterating until it hits the node at index
    currentNode = next(currentNode, collection) // set currentNode to next item on linkedlist
  }
  return currentNode; // gives you the current node
}

function addressAt(index, linkedlist, collection) {
  if(index == 0) {
    return linkedlist // linkedlist is first item on linkedlist
  } else {
    let node = nodeAt(index - 1, linkedlist, collection) // gives you the node before
    return node.next // gives you the node after
  }
}

function indexAt(node, collection, linkedlist) { // we are given a node {name: 'susie', next: 'rkjasj'}
  let currentNode = headNode(linkedlist, collection); // initiating pointer with first item
  let currentIdx = 0; // initiating counter with 0
  while(currentNode != node) { // if the currentNode is not the given node run it
    currentIdx++; // increment our counter
    currentNode = next(currentNode, collection) // setting currentNode to our next node
  }
  return currentIdx; // we now have the index
}

function insertNodeAt(index, newNodeAddress, linkedlist, collection) {
  let previousNode = nodeAt(index - 1, linkedlist, collection); // gives you the node before where you want to insert
  let subNode = nodeAt(index, linkedlist, collection); // this is where you will be putting the new node

  let previousNodeIdx = indexAt(previousNode, collection, linkedlist); // uses previousNode as arg and returns an idx
  let subNodeIdx = indexAt(subNode, collection, linkedlist); // uses subNode as arg and returns an idx

  let previousNodeAddress = addressAt(previousNode, linkedlist, collection); // gives you the node of the previous node
  let subNodeAddress = addressAt(subNode, linkedlist, collection);

  previousNode.next = newNodeAddress;
  let newNode = collection[newNodeAddress];
  newNode.next = subNodeAddress
}

function deleteNodeAt(index, linkedlist, collection) {
  let previousNode;
  let currentNode = headNode(linkedlist, collection);
  for(let i = 0; i < index; i++) {
    previousNode = currentNode;
    currentNode = next(currentNode, collection);
  }
  previousNode.next = currentNode.next;
}
