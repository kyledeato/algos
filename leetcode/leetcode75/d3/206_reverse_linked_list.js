/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]


Input: head = [1,2]
Output: [2,1]

//remember the current.next is the arrows pointing
*/

var reverseList = function(head) {
    let current = head
    let next = null
    let prev= null

    while (current != null) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
};