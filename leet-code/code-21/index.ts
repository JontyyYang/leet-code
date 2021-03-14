class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const l3 = new ListNode(0);

  let node1: ListNode | null = l1;
  let node2: ListNode | null = l2;
  let node = l3;

  while (node1 && node2) {
    if (node1.val < node2.val) {
      node.next = node1;
      node1 = node1.next;
    } else {
      node.next = node2;
      node2 = node2.next;
    }

    node = node.next;
  }

  if (node1) {
    node.next = node1;
  }

  if (node2) {
    node.next = node2;
  }

  return l3.next;
}

export {};
