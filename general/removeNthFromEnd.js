function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
  if (!arr.length) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
    // console.log(fast);
  }

  while (fast) {
    fast.next;
    slow.next;
  }

  slow.next = slow.next.next;
  console.log(dummy.next);

  return dummy.next;
};

let arr = [1, 2, 3, 4, 5];
let head = arrayToList(arr);
let n = 2;

removeNthFromEnd(head, n);
