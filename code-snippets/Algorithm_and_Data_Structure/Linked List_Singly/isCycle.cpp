struct Node {
	int data;
	struct Node* next;
}

bool has_cycle(Node* head) {
    
    //idea from somewhere else
    Node *slowNode = head;
    Node *fastNode = head;
    if(head == NULL)
        return false;
    while((fastNode->next)->next!=NULL && slowNode->next!=NULL){
        slowNode = slowNode->next;
        fastNode = (fastNode->next)->next;
        if(slowNode == fastNode)
            return true;
    }
    return false;
}