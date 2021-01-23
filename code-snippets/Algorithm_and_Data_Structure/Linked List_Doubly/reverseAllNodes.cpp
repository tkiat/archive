struct Node
{
    int data;
    struct Node *next;
}
//singly reverse: https://www.youtube.com/watch?v=sYcOK51hl-A
Node* Reverse(Node *head)
{
    Node *tail, *temp;
    tail = nullptr;
    while (head != NULL) {
        temp = head->next;
        head->next = tail;
        head->prev = temp;
        tail = head;
        head = temp;
    }
    return tail;
}