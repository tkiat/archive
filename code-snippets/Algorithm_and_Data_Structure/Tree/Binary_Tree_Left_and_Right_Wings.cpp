void topView_2(node* root, int side) {

    if (root == nullptr)
        return;
    if (side <= 0)
        topView_2(root->left, -1);

    cout << root->data << " ";

    if (side >= 0)
        topView_2(root->right, 1);
}

void topView(node *root) {

    topView_2(root, 0);
}
