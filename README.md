[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/NehM89hy)
# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

My answer:

The worst case scenario is that there is no augmenting path, which means
there is no path from the start to the end. The algorithm will have to traverse
every node to find the end node to create the path from start to end, but if there
is no way to reach the end node from the start or the node doesn't exist, then
there will never be an augmenting path from start to end. This implementation
reused most of my code from depth first search from the graph search exercise, so
the runtime is the same. Every vertice is checked to see if it is the end node
we want through our if check and our currPath.push, which will run for |V| or number
of vertices. Then the for loop and recursive call inside it, will check every directed edge
that connects neighboring nodes to see if any neighboring node is the end node, resulting
in our augmented path. This would run for number of edges or |E|, as we would search every edge
to find out that there is no path. Now, putting everything together we get |V| + |E|. 
Therefore, our $\Theta$ worst case complexity for this implementation is $\Theta(|V| + |E|)$.
