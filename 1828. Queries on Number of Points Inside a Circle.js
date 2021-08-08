/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    return queries.map((query) => {
       return points.reduce((acc, point) => {
           if(Math.sqrt(Math.pow(point[0] - query[0], 2) + Math.pow(point[1] - query[1], 2)) <= query[2])
               return acc+1;
           return acc;
       }, 0) 
    })
};
