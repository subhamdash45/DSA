function maxDepthFromArray(tree) {
  if (!tree || tree.length === 0) {
    return 0;
  }

  // Calculate the depth based on the number of elements
  const numberOfNodes = tree.length;
  let depth = 0;

  // Keep doubling the nodes until we reach or exceed the number of nodes
  while (2 ** depth - 1 < numberOfNodes) {
    depth++;
  }

  return depth;
}

// Example usage:
const treeArray = [1, 2, 3, 4, 5, 6, 7]; // Depth should be 3
console.log("Depth of the binary tree is:", maxDepthFromArray(treeArray)); // Output: 3
