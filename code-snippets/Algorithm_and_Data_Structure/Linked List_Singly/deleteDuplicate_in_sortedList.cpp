struct Node
{
		int data;
		struct Node *next;
}
Node* RemoveDuplicates(Node *head)
{

    Node *currentNode = head;
    while(currentNode->next!=NULL){
        if(currentNode->data == (currentNode->next)->data){
            Node *toDelete = currentNode->next;
            currentNode->next = currentNode->next->next;
            delete toDelete;
        }
        else{
          currentNode = currentNode->next;
        }
    }
    return head;
}