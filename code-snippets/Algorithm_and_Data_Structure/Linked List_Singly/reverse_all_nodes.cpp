struct Node
{
    int data;
    struct Node *next;
}
//https://www.youtube.com/watch?v=sYcOK51hl-A
Node* Reverse(Node *head)
{
    Node *tail, *t;
    tail = NULL;
    while (head != NULL) {
        t = head->next;
        head->next = tail;
        tail = head;
        head = t;
    }
    return tail;
}
