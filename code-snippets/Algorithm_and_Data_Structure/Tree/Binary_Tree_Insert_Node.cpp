typedef struct node
{
   int data;
   node * left;
   node * right;
}node;

node * insert(node * root, int value) {

    if(root == nullptr ){
        node *root = new node();
        root->data = value;
        return root;
    }

    node *temp = root;
    node *newNode = new node();
    while(1){

        if(value == temp->data){
            break;
        }
        else if(value > temp->data){

            if(temp->right == nullptr){
                newNode->data = value;
                temp->right = newNode;
                break;
            }
            else{
                temp = temp->right;
            }
        }
        else if(value < temp->data){

            if(temp->left == nullptr){
                newNode->data = value;
                temp->left = newNode;
                break;
            }
            else{
                temp = temp->left;
            }
        }
    }

    return root;
}

//recursive
static Node Insert(Node root,int value) {
if(root==null)
  {
     Node node=new Node();
     node.data=value;
     node.left=null;
     node.right=null;
     root=node;
 }
 else if(root.data>value)
      root.left=Insert(root.left,value);
  else if(root.data<value)
      root.right=Insert(root.right,value);

  return root;
}
