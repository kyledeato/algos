/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let graph = new Map();
    
    // build adjacent list
    for (let i = 0; i < n ; i++){
        graph.set(i, []);
    }

    for (let [u,v] of edges) {
        graph.get(u).push(v);  // Add v as a neighbor of u
        graph.get(v).push(u);  // Add u as a neighbor of v
    }

    function dfs(graph, source, destination, visited) {
        if (source === destination) return true;

        visited.add(source);

        for (let neighbor of graph.get(source)) {
            if (!visited.has(neighbor)){
                if (dfs(graph, neighbor, destination, visited)) {  
                    return true;  // If any path is found, return true
                }
            }
        }

        return false;
    }
    return dfs(graph, source, destination, new Map);
};