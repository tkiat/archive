   struct Node
   {
     int data;
     Node *next;
     Node *prev;
   }
Node* SortedInsert(Node *head,int data)
{

    Node *newNode = new Node();

    if(head == nullptr){
        newNode->data = data;
        newNode->next = nullptr;
        newNode->prev = nullptr;
        return newNode;
    }
    else if(data <= head->data){ //insert at front
        newNode->data = data;
        newNode->next = head;
        newNode->prev = nullptr;
        head->prev = newNode;
        return newNode;
    }
    else if(data > head->data){

        Node *temp = new Node();
        Node *temp_next = head;
        while(temp_next->next != nullptr && data > temp_next->data){
            temp = temp_next;
            temp_next = temp_next->next;
        }

        if(data > temp_next->data){//insert at end
            newNode->data = data;
            newNode->next = nullptr;
            newNode->prev = temp_next;
            temp_next->next = newNode;
        }
        else{//insert at somewhere middle
            newNode->data = data;
            newNode->next = temp_next;
            newNode->prev = temp;
            temp->next = newNode;
            temp_next->prev = newNode;
        }
    }

    return head;
}
