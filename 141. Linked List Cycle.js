/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let result = false;
    let slow = head;
    let fast = head;
    while(true) {
        if(fast === null || fast.next === null) {
            result = false; 
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            result = true;
            break;
        }
    }
    
    return result;
};
