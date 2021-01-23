struct node
{
    int data;
    node* left;
    node* right;
};

void preOrder(node *root) {

    if(root == nullptr)
        return;

    cout << root->data << " ";

    preOrder(root->left);
    preOrder(root->right);
}

//slightly better performance (given that statement is cheaper than function call)
void preOrder(node *root) {

    if(root == nullptr)
        return;

    cout << root->data << " ";

    if(root->left != nullptr){
        preOrder(root->left);
    }
    if(root->right != nullptr){
        preOrder(root->right);
    }


}
