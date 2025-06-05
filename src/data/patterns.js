export const patterns = [
  { id: 'two-pointers', name: 'Two Pointers', icon: '👉', difficulty: 'Easy' },
  { id: 'sliding-window', name: 'Sliding Window', icon: '🪟', difficulty: 'Easy' },
  { id: 'fast-slow-pointers', name: 'Fast & Slow Pointers', icon: '🏃', difficulty: 'Medium' },
  { id: 'merge-intervals', name: 'Merge Intervals', icon: '📊', difficulty: 'Medium' },
  { id: 'cyclic-sort', name: 'Cyclic Sort', icon: '🔄', difficulty: 'Easy' },
  { id: 'linkedlist-reversal', name: 'LinkedList Reversal', icon: '↩️', difficulty: 'Medium' },
  { id: 'tree-bfs', name: 'Tree BFS', icon: '🌳', difficulty: 'Easy' },
  { id: 'tree-dfs', name: 'Tree DFS', icon: '🌲', difficulty: 'Medium' },
  { id: 'two-heaps', name: 'Two Heaps', icon: '⚖️', difficulty: 'Hard' },
  { id: 'subsets', name: 'Subsets', icon: '🎯', difficulty: 'Medium' },
  { id: 'modified-binary-search', name: 'Modified Binary Search', icon: '🔍', difficulty: 'Medium' },
  { id: 'bitwise-xor', name: 'Bitwise XOR', icon: '⚡', difficulty: 'Easy' },
  { id: 'top-k-elements', name: 'Top K Elements', icon: '🏆', difficulty: 'Medium' },
  { id: 'k-way-merge', name: 'K-way Merge', icon: '🔀', difficulty: 'Hard' }
];

export const patternData = {
  patterns: patterns,
  'two-pointers': {
    title: 'Two Pointers Pattern',
    description: 'Use two pointers moving towards each other or in same direction to solve array/string problems efficiently.',
    whenToUse: [
      'Array is sorted or you need to find pairs/triplets',
      'Need to compare elements from two ends',
      'Want to avoid nested loops (O(n²) → O(n))',
      'Problems involving palindromes, pair sums, or removing duplicates'
    ],
    recognitionSigns: [
      'Find two numbers that sum to target',
      'Remove duplicates from sorted array',
      'Check if string is palindrome',
      'Input array is sorted or can be sorted'
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Linear time - we visit each element at most once. Both pointers together traverse the array once.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Constant space - only using two pointer variables regardless of input size.',
    keyProblems: [
      { id: 'two-sum-ii', name: 'Two Sum II' },
      { id: '3sum', name: '3Sum' },
      { id: 'container-with-most-water', name: 'Container With Most Water' },
      { id: 'trapping-rain-water', name: 'Trapping Rain Water' },
      { id: 'valid-palindrome', name: 'Valid Palindrome' }
    ],
    codeExamples: {
      python: `def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return [-1, -1]`,
      java: `public int[] twoSumSorted(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left < right) {
        int currentSum = arr[left] + arr[right];
        if (currentSum == target) {
            return new int[]{left, right};
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return new int[]{-1, -1};
}`,
      c: `int* twoSumSorted(int* arr, int arrSize, int target, int* returnSize) {
    int* result = (int*)malloc(2 * sizeof(int));
    int left = 0, right = arrSize - 1;
    
    while (left < right) {
        int currentSum = arr[left] + arr[right];
        if (currentSum == target) {
            result[0] = left;
            result[1] = right;
            *returnSize = 2;
            return result;
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    result[0] = -1;
    result[1] = -1;
    *returnSize = 2;
    return result;
}`
    }
  },
  'sliding-window': {
    title: 'Sliding Window Pattern',
    description: 'Maintain a window of elements that slides through array/string to find optimal subarray/substring.',
    whenToUse: [
      'Need to find optimal subarray/substring',
      'Problems involving contiguous elements',
      'Want to avoid recomputing overlapping parts',
      'Maximum/minimum subarray problems'
    ],
    recognitionSigns: [
      'Longest/shortest subarray/substring with condition',
      'Maximum sum of subarray of size K',
      'Find all anagrams in string',
      'Minimum window substring'
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Linear time - each element is visited at most twice (once when expanding window, once when shrinking).',
    spaceComplexity: 'O(k)',
    spaceComplexityExplanation: 'Space depends on window size or character set size (k). For fixed windows, it\'s O(1).',
    keyProblems: [
      { id: 'maximum-sum-subarray', name: 'Maximum Sum Subarray' },
      { id: 'longest-substring-without-repeating', name: 'Longest Substring Without Repeating Characters' },
      { id: 'minimum-window-substring', name: 'Minimum Window Substring' },
      { id: 'fruits-into-baskets', name: 'Fruits into Baskets' },
      { id: 'permutation-in-string', name: 'Permutation in String' }
    ],
    codeExamples: {
      python: `def max_sum_subarray(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i-k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum`,
      java: `public int maxSumSubarray(int[] arr, int k) {
    int windowSum = 0;
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    int maxSum = windowSum;
    for (int i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}`,
      c: `int maxSumSubarray(int* arr, int arrSize, int k) {
    int windowSum = 0;
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    int maxSum = windowSum;
    for (int i = k; i < arrSize; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        if (windowSum > maxSum) {
            maxSum = windowSum;
        }
    }
    
    return maxSum;
}`
    }
  },
  'fast-slow-pointers': {
    title: 'Fast & Slow Pointers (Floyd\'s Cycle Detection)',
    description: 'Use two pointers moving at different speeds to detect cycles or find middle elements.',
    whenToUse: [
      'Detect cycles in linked list or array',
      'Find middle element without knowing length',
      'Determine if sequence will loop',
      'Problems with "runner" concept'
    ],
    recognitionSigns: [
      'Detect cycle in linked list',
      'Find middle of linked list',
      'Happy number problem',
      'Find start of cycle'
    ],
    timeComplexity: 'O(n)',
    timeComplexityExplanation: 'Linear time - in worst case, fast pointer makes at most 2n steps before meeting slow pointer or reaching end.',
    spaceComplexity: 'O(1)',
    spaceComplexityExplanation: 'Constant space - only using two pointer variables regardless of input size.',
    keyProblems: [
      { id: 'linked-list-cycle', name: 'Linked List Cycle' },
      { id: 'find-middle-linkedlist', name: 'Find Middle of LinkedList' },
      { id: 'happy-number', name: 'Happy Number' },
      { id: 'palindrome-linkedlist', name: 'Palindrome LinkedList' },
      { id: 'cycle-start', name: 'Start of LinkedList Cycle' }
    ],
    codeExamples: {
      python: `def has_cycle(head):
    if not head or not head.next:
        return False
    
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
        if slow == fast:
            return True
    
    return False`,
      java: `public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) {
        return false;
    }
    
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            return true;
        }
    }
    
    return false;
}`,
      c: `bool hasCycle(struct ListNode *head) {
    if (head == NULL || head->next == NULL) {
        return false;
    }
    
    struct ListNode *slow = head;
    struct ListNode *fast = head;
    
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        
        if (slow == fast) {
            return true;
        }
    }
    
    return false;
}`
    }
  }
};