function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Build linked list: 1 → 2 → 3 → 4 → 5
let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

console.log(middleNode(head)); // ListNode { val: 3, next: ... }
console.log(middleNode(head).val); // 3
