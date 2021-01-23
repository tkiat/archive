struct Node
{
    int data;
    Node* next;
}
int FindMergeNode(Node *headA, Node *headB)
{
    //idea from somewhere
    Node *currentA = headA;
    Node *currentB = headB;
    
    while(while(currentA != currentB){){
        if(currentA==currentB)
            return currentA->data;
        if(currentA->next==NULL)
            currentA = headB;
        else
            currentA = currentA->next;
        if(currentB->next==NULL)
            currentB = headA;
        else
            currentB = currentB->next;
    }
    
    return currentA->data;
}