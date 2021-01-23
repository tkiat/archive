struct node
{
    int data;
    node* left;
    node* right;
}

void levelOrder(node * root) {

    queue<node*> q;
    node *temp=root;

    if(root != NULL){
        q.push(root);
    }

    while(!q.empty()){

        cout << temp->data << " ";

        if(temp->left != NULL){
            q.push(temp->left);
        }
        if(temp->right != NULL){
            q.push(temp->right);
        }

        q.pop();
        temp= q.front();
    }
}
