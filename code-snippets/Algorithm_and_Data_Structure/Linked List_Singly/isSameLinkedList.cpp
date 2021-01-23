int CompareLists(Node *headA, Node* headB)
{
  if(headA->data == headB->data){
      if(headA->next!=NULL && headB->next!=NULL)
        return 1 * CompareLists(headA->next, headB->next);
      else if(headA->next!=NULL || headB->next!=NULL)
        return 0;
      else
        return 1;
  }
  return 0;
}