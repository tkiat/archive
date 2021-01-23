class Node {
    int data;
    Node* left;
    Node* right;
};

int height(Node* root) {

    if (root == nullptr){
        return -1;
    }
    else{
        return 1 + max(height(root->left), height(root->right));
    }
}
