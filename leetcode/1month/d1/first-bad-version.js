/*
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

-since 4 is bad anything after 4 is bad
*/

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let [l,r] = [1, n ]
        
        while (l < r){
            const mid = l + Math.floor((r-l)/2)
            
            if (isBadVersion(mid)){
                r=mid
            } else {
                l = mid + 1
            }
        }
        return l
    };
};