function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let curr = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    console.log(curr);
    curr = curr.next;
  }

  curr.next = list1 || list2;
  return dummy.next;
};

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;

  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
}

let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);

console.log(mergeTwoLists(list1, list2));
