function BinarySearchTree() {
  //创建Node实例
      let Node = function(key) {
          this.key = key
          this.left = null
          this.right = null
      }
      
      let root = null
  
      this.getRoot = () => root
      
  //插入新节点
      let insertNode = (node, newNode) => {
          if (newNode.key < node.key) {
              if (node.left === null) {
                  node.left = newNode
              } else {
                  insertNode(node.left, newNode)
              }
          } else {
              if (node.right === null) {
                  node.right = newNode
              } else {
                  insertNode(node.right, newNode)
              }
          }
      }
      
      this.insert = (key) => {
          let newNode = new Node(key)
          if (root === null) {
              root = newNode
          } else {
              insertNode(root, newNode)
          }
      }

      this.isBalanced = (node) => {
        if (node === null) return true
        const depth = node1 => node1 === null ? 0 : Math.max(depth(node1.left), depth(node1.right)) + 1
        if (Math.abs(depth(node.left) - depth(node.right)) > 1) return false
        else return this.isBalanced(node.left) && this.isBalanced(node.right)
      }

      this.balanced = () => this.isBalanced(root)
    }

let tree = new BinarySearchTree()
tree.insert(3)
tree.insert(9)
tree.insert(20)
tree.insert(null)
tree.insert(null)
tree.insert(15)
tree.insert(7)
console.log(tree.balanced())
let tree1 = new BinarySearchTree()
tree1.insert(1)
tree1.insert(2)
tree1.insert(2)
tree1.insert(3)
tree1.insert(3)
tree1.insert(null)
tree1.insert(null)
tree1.insert(4)
tree1.insert(4)
console.log(tree1.balanced())