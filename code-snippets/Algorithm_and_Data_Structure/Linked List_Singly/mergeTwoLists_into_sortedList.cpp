  struct Node
  {
     int data;
     struct Node *next;
  }
Node* MergeLists(Node *headA, Node* headB)
{
    
    
    if(headA == NULL && headB == NULL)
        return NULL;
    else if(headA == NULL)
        return headB;
    else if(headB == NULL)
        return headA;

    Node *resultNode = new Node();
    
    //find new head pointer
    if(headA->data < headB->data){
        resultNode = headA;
        headA = headA->next;
    }
    else{
        resultNode = headB;
        headB = headB->next;
    }
    
    Node *currentNode = resultNode;
    
    while(headA != nullptr  && headB != nullptr){
        if(headA->data < headB->data){
            currentNode->next = headA;
            headA = headA->next;
        }
        else{
            currentNode->next = headB;
            headB = headB->next;
        }
        currentNode = currentNode->next;
    }
    
    //remaining elements
    if (headA == nullptr) {
        currentNode->next = headB;
    } 
    else{
        currentNode->next = headA;
    }
    
    return resultNode;
}