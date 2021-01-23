//better solution
int index = 0;
Node* current = head;
Node* result = head;
while(current!=NULL)
{
	current=current->next;
	if (index++>positionFromTail)
	{
		result=result->next;
	}
}
return result->data;

/*my solution
Node *currentNode = head;

int i=0;
while(currentNode->next!=NULL){
	currentNode = currentNode->next;
	i++;
}    

currentNode = head;
while(i > positionFromTail && currentNode->next!=NULL){
	currentNode = currentNode->next;
	i--;
}

return currentNode->data;
*/