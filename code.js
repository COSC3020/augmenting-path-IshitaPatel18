// Most of this code is reused from my graph search exercise!

function augmentingPath(graph, start, end) 
{
  let currPath = [];
  if (graph.length == 0 || path(graph, start, end, currPath) == false)
  {
    return [];
  }
  else 
  {
    return currPath;
  }
}

function path(graph, start, end, currPath) 
{
  if (start == end) 
  {
    currPath.push(end);
    return true;
  }
  currPath.push(start);

  for (let node in graph[start]) 
  {
    if (!currPath.includes(node)) 
    {
      if (path(graph, node, end, currPath)) 
      {
        return true;
      }
    }
  }

  currPath.pop();
  return false;
}
