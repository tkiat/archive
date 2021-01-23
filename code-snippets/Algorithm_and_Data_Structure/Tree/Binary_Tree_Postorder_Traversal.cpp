struct node
{
    int data;
    node* left;
    node* right;
};

void postOrder(node *root) {
    
    if(root == nullptr)
        return;

    preOrder(root->left);
    preOrder(root->right);

    cout << root->data << " ";

}

