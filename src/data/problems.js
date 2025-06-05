export const problemsData = {
  'two-sum-ii': {
    title: 'Two Sum II - Input Array Is Sorted',
    difficulty: 'Medium',
    description: 'Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 ≤ index1 < index2 ≤ numbers.length.',
    examples: [
      {
        input: 'numbers = [2,7,11,15], target = 9',
        output: '[1,2]',
        explanation: 'The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].'
      },
      {
        input: 'numbers = [2,3,4], target = 6',
        output: '[1,3]',
        explanation: 'The sum of 2 and 4 is 6. Therefore, index1 = 1, index2 = 3. We return [1, 3].'
      }
    ],
    constraints: [
      '2 ≤ numbers.length ≤ 3 * 10^4',
      '-1000 ≤ numbers[i] ≤ 1000',
      'numbers is sorted in non-decreasing order',
      '-1000 ≤ target ≤ 1000',
      'The tests are generated such that there is exactly one solution'
    ],
    subOptimalSolution: {
      approach: 'Brute Force - Nested Loops',
      timeComplexity: 'O(n²)',
      timeComplexityExplanation: 'Quadratic time - for each element, we check all remaining elements. In worst case, we make n*(n-1)/2 comparisons.',
      spaceComplexity: 'O(1)',
      spaceComplexityExplanation: 'Constant space - only using loop variables and result array.',
      explanation: 'Check every possible pair of numbers to find the target sum. This approach works but is inefficient for large arrays.',
      codes: {
        python: `def twoSum(numbers, target):
    """
    Brute force approach: Check all possible pairs
    Time: O(n²), Space: O(1)
    """
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            if numbers[i] + numbers[j] == target:
                return [i + 1, j + 1]  # 1-indexed
            elif numbers[i] + numbers[j] > target:
                break  # Optimization: stop if sum exceeds target
    return []

# Example usage
numbers = [2, 7, 11, 15]
target = 9
result = twoSum(numbers, target)
print(f"Indices: {result}")  # Output: [1, 2]`,
        java: `public int[] twoSum(int[] numbers, int target) {
    /*
     * Brute force approach: Check all possible pairs
     * Time: O(n²), Space: O(1)
     */
    for (int i = 0; i < numbers.length; i++) {
        for (int j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) {
                return new int[]{i + 1, j + 1}; // 1-indexed
            } else if (numbers[i] + numbers[j] > target) {
                break; // Optimization: stop if sum exceeds target
            }
        }
    }
    return new int[]{};
}

// Example usage
int[] numbers = {2, 7, 11, 15};
int target = 9;
int[] result = twoSum(numbers, target);
System.out.println(Arrays.toString(result)); // Output: [1, 2]`,
        c: `#include <stdio.h>
#include <stdlib.h>

/*
 * Brute force approach: Check all possible pairs
 * Time: O(n²), Space: O(1)
 */
int* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {
    int* result = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;
    
    for (int i = 0; i < numbersSize; i++) {
        for (int j = i + 1; j < numbersSize; j++) {
            if (numbers[i] + numbers[j] == target) {
                result[0] = i + 1; // 1-indexed
                result[1] = j + 1;
                return result;
            } else if (numbers[i] + numbers[j] > target) {
                break; // Optimization: stop if sum exceeds target
            }
        }
    }
    
    *returnSize = 0;
    return result;
}

// Example usage
int main() {
    int numbers[] = {2, 7, 11, 15};
    int target = 9;
    int returnSize;
    int* result = twoSum(numbers, 4, target, &returnSize);
    printf("Indices: [%d, %d]\\n", result[0], result[1]); // Output: [1, 2]
    free(result);
    return 0;
}`
      }
    },
    optimalSolution: {
      approach: 'Two Pointers Technique',
      timeComplexity: 'O(n)',
      timeComplexityExplanation: 'Linear time - each element is visited at most once as pointers move towards each other.',
      spaceComplexity: 'O(1)',
      spaceComplexityExplanation: 'Constant space - only using two pointer variables regardless of input size.',
      explanation: 'Since the array is sorted, we can use two pointers starting from both ends. If the sum is too small, move the left pointer right. If too large, move the right pointer left.',
      codes: {
        python: `def twoSum(numbers, target):
    """
    Two pointers approach: Optimal for sorted array
    Time: O(n), Space: O(1)
    """
    left, right = 0, len(numbers) - 1
    
    while left < right:
        current_sum = numbers[left] + numbers[right]
        
        if current_sum == target:
            return [left + 1, right + 1]  # 1-indexed
        elif current_sum < target:
            left += 1  # Need a larger sum
        else:
            right -= 1  # Need a smaller sum
    
    return []  # No solution found

# Step-by-step trace
def twoSumWithTrace(numbers, target):
    left, right = 0, len(numbers) - 1
    step = 1
    
    print(f"Array: {numbers}, Target: {target}")
    print(f"Initial: left=0, right={len(numbers)-1}")
    
    while left < right:
        current_sum = numbers[left] + numbers[right]
        print(f"Step {step}: numbers[{left}] + numbers[{right}] = {numbers[left]} + {numbers[right]} = {current_sum}")
        
        if current_sum == target:
            print(f"✅ Found target! Return [{left + 1}, {right + 1}]")
            return [left + 1, right + 1]
        elif current_sum < target:
            print(f"   Sum too small, move left pointer: {left} → {left + 1}")
            left += 1
        else:
            print(f"   Sum too large, move right pointer: {right} → {right - 1}")
            right -= 1
        step += 1
    
    return []

# Example with trace
numbers = [2, 7, 11, 15]
target = 9
result = twoSumWithTrace(numbers, target)`,
        java: `public int[] twoSum(int[] numbers, int target) {
    /*
     * Two pointers approach: Optimal for sorted array
     * Time: O(n), Space: O(1)
     */
    int left = 0;
    int right = numbers.length - 1;
    
    while (left < right) {
        int currentSum = numbers[left] + numbers[right];
        
        if (currentSum == target) {
            return new int[]{left + 1, right + 1}; // 1-indexed
        } else if (currentSum < target) {
            left++; // Need a larger sum
        } else {
            right--; // Need a smaller sum
        }
    }
    
    return new int[]{}; // No solution found
}

// Step-by-step trace method
public int[] twoSumWithTrace(int[] numbers, int target) {
    int left = 0;
    int right = numbers.length - 1;
    int step = 1;
    
    System.out.println("Array: " + Arrays.toString(numbers) + ", Target: " + target);
    System.out.println("Initial: left=0, right=" + (numbers.length - 1));
    
    while (left < right) {
        int currentSum = numbers[left] + numbers[right];
        System.out.printf("Step %d: numbers[%d] + numbers[%d] = %d + %d = %d%n", 
                         step, left, right, numbers[left], numbers[right], currentSum);
        
        if (currentSum == target) {
            System.out.printf("✅ Found target! Return [%d, %d]%n", left + 1, right + 1);
            return new int[]{left + 1, right + 1};
        } else if (currentSum < target) {
            System.out.printf("   Sum too small, move left pointer: %d → %d%n", left, left + 1);
            left++;
        } else {
            System.out.printf("   Sum too large, move right pointer: %d → %d%n", right, right - 1);
            right--;
        }
        step++;
    }
    
    return new int[]{};
}`,
        c: `#include <stdio.h>
#include <stdlib.h>

/*
 * Two pointers approach: Optimal for sorted array
 * Time: O(n), Space: O(1)
 */
int* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {
    int* result = (int*)malloc(2 * sizeof(int));
    int left = 0;
    int right = numbersSize - 1;
    
    while (left < right) {
        int currentSum = numbers[left] + numbers[right];
        
        if (currentSum == target) {
            result[0] = left + 1;  // 1-indexed
            result[1] = right + 1;
            *returnSize = 2;
            return result;
        } else if (currentSum < target) {
            left++; // Need a larger sum
        } else {
            right--; // Need a smaller sum
        }
    }
    
    *returnSize = 0;
    return result; // No solution found
}

// Step-by-step trace function
int* twoSumWithTrace(int* numbers, int numbersSize, int target, int* returnSize) {
    int* result = (int*)malloc(2 * sizeof(int));
    int left = 0;
    int right = numbersSize - 1;
    int step = 1;
    
    printf("Array: [");
    for (int i = 0; i < numbersSize; i++) {
        printf("%d", numbers[i]);
        if (i < numbersSize - 1) printf(", ");
    }
    printf("], Target: %d\\n", target);
    printf("Initial: left=0, right=%d\\n", numbersSize - 1);
    
    while (left < right) {
        int currentSum = numbers[left] + numbers[right];
        printf("Step %d: numbers[%d] + numbers[%d] = %d + %d = %d\\n", 
               step, left, right, numbers[left], numbers[right], currentSum);
        
        if (currentSum == target) {
            printf("✅ Found target! Return [%d, %d]\\n", left + 1, right + 1);
            result[0] = left + 1;
            result[1] = right + 1;
            *returnSize = 2;
            return result;
        } else if (currentSum < target) {
            printf("   Sum too small, move left pointer: %d → %d\\n", left, left + 1);
            left++;
        } else {
            printf("   Sum too large, move right pointer: %d → %d\\n", right, right - 1);
            right--;
        }
        step++;
    }
    
    *returnSize = 0;
    return result;
}`
      }
    }
  },
  'longest-substring-without-repeating': {
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
    examples: [
      {
        input: 's = "abcabcbb"',
        output: '3',
        explanation: 'The answer is "abc", with the length of 3.'
      },
      {
        input: 's = "bbbbb"',
        output: '1',
        explanation: 'The answer is "b", with the length of 1.'
      },
      {
        input: 's = "pwwkew"',
        output: '3',
        explanation: 'The answer is "wke", with the length of 3.'
      }
    ],
    constraints: [
      '0 ≤ s.length ≤ 5 * 10^4',
      's consists of English letters, digits, symbols and spaces.'
    ],
    subOptimalSolution: {
      approach: 'Brute Force - Check All Substrings',
      timeComplexity: 'O(n³)',
      timeComplexityExplanation: 'Cubic time - O(n²) to generate all substrings, O(n) to check each for duplicates.',
      spaceComplexity: 'O(min(m,n))',
      spaceComplexityExplanation: 'Space for storing characters in set/hash table, limited by alphabet size or string length.',
      explanation: 'Generate all possible substrings and check each one for duplicate characters. This approach has poor performance but is straightforward to understand.',
      codes: {
        python: `def lengthOfLongestSubstring(s):
    """
    Brute force: Check all substrings
    Time: O(n³), Space: O(min(m,n))
    """
    def has_unique_chars(substr):
        return len(set(substr)) == len(substr)
    
    n = len(s)
    max_length = 0
    
    # Check all possible substrings
    for i in range(n):
        for j in range(i + 1, n + 1):
            substring = s[i:j]
            if has_unique_chars(substring):
                max_length = max(max_length, len(substring))
    
    return max_length

# Alternative brute force with set checking
def lengthOfLongestSubstringV2(s):
    """
    Brute force with explicit duplicate checking
    Time: O(n³), Space: O(min(m,n))
    """
    n = len(s)
    max_length = 0
    
    for i in range(n):
        seen = set()
        for j in range(i, n):
            if s[j] in seen:
                break
            seen.add(s[j])
            max_length = max(max_length, j - i + 1)
    
    return max_length

# Example usage
s = "abcabcbb"
result = lengthOfLongestSubstring(s)
print(f"Length: {result}")  # Output: 3`,
        java: `public int lengthOfLongestSubstring(String s) {
    /*
     * Brute force: Check all substrings
     * Time: O(n³), Space: O(min(m,n))
     */
    int n = s.length();
    int maxLength = 0;
    
    // Check all possible substrings
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j <= n; j++) {
            String substring = s.substring(i, j);
            if (hasUniqueChars(substring)) {
                maxLength = Math.max(maxLength, substring.length());
            }
        }
    }
    
    return maxLength;
}

private boolean hasUniqueChars(String str) {
    Set<Character> seen = new HashSet<>();
    for (char c : str.toCharArray()) {
        if (seen.contains(c)) {
            return false;
        }
        seen.add(c);
    }
    return true;
}

// Alternative brute force approach
public int lengthOfLongestSubstringV2(String s) {
    /*
     * Brute force with explicit duplicate checking
     * Time: O(n³), Space: O(min(m,n))
     */
    int n = s.length();
    int maxLength = 0;
    
    for (int i = 0; i < n; i++) {
        Set<Character> seen = new HashSet<>();
        for (int j = i; j < n; j++) {
            if (seen.contains(s.charAt(j))) {
                break;
            }
            seen.add(s.charAt(j));
            maxLength = Math.max(maxLength, j - i + 1);
        }
    }
    
    return maxLength;
}`,
        c: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

/*
 * Brute force: Check all substrings
 * Time: O(n³), Space: O(min(m,n))
 */
bool hasUniqueChars(char* str, int start, int end) {
    bool seen[256] = {false}; // ASCII characters
    
    for (int i = start; i < end; i++) {
        if (seen[(int)str[i]]) {
            return false;
        }
        seen[(int)str[i]] = true;
    }
    return true;
}

int lengthOfLongestSubstring(char* s) {
    int n = strlen(s);
    int maxLength = 0;
    
    // Check all possible substrings
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j <= n; j++) {
            if (hasUniqueChars(s, i, j)) {
                int currentLength = j - i;
                if (currentLength > maxLength) {
                    maxLength = currentLength;
                }
            }
        }
    }
    
    return maxLength;
}

// Alternative brute force approach
int lengthOfLongestSubstringV2(char* s) {
    /*
     * Brute force with explicit duplicate checking
     * Time: O(n³), Space: O(min(m,n))
     */
    int n = strlen(s);
    int maxLength = 0;
    
    for (int i = 0; i < n; i++) {
        bool seen[256] = {false};
        for (int j = i; j < n; j++) {
            if (seen[(int)s[j]]) {
                break;
            }
            seen[(int)s[j]] = true;
            int currentLength = j - i + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
        }
    }
    
    return maxLength;
}

// Example usage
int main() {
    char s[] = "abcabcbb";
    int result = lengthOfLongestSubstring(s);
    printf("Length: %d\\n", result); // Output: 3
    return 0;
}`
      }
    },
    optimalSolution: {
      approach: 'Sliding Window with HashMap',
      timeComplexity: 'O(n)',
      timeComplexityExplanation: 'Linear time - each character is visited at most twice (once by right pointer, once by left pointer).',
      spaceComplexity: 'O(min(m,n))',
      spaceComplexityExplanation: 'Space for hash map storing character positions, limited by alphabet size or string length.',
      explanation: 'Use sliding window technique with a hash map to track character positions. When we find a duplicate, we slide the window start to just after the previous occurrence of that character.',
      codes: {
        python: `def lengthOfLongestSubstring(s):
    """
    Sliding window with HashMap: Optimal solution
    Time: O(n), Space: O(min(m,n))
    """
    char_index_map = {}
    max_length = 0
    window_start = 0
    
    for window_end in range(len(s)):
        right_char = s[window_end]
        
        # If character is already in window, shrink from left
        if right_char in char_index_map:
            # Move window start to position after last occurrence
            window_start = max(window_start, char_index_map[right_char] + 1)
        
        # Update character's latest position
        char_index_map[right_char] = window_end
        
        # Update max length
        current_length = window_end - window_start + 1
        max_length = max(max_length, current_length)
    
    return max_length

# Step-by-step trace version
def lengthOfLongestSubstringWithTrace(s):
    char_index_map = {}
    max_length = 0
    window_start = 0
    
    print(f"String: '{s}'")
    print(f"{'Step':<4} {'Char':<4} {'Window':<15} {'Length':<6} {'Max':<4}")
    print("-" * 40)
    
    for window_end in range(len(s)):
        right_char = s[window_end]
        
        if right_char in char_index_map:
            old_start = window_start
            window_start = max(window_start, char_index_map[right_char] + 1)
            if old_start != window_start:
                print(f"     Duplicate '{right_char}' found! Moved start: {old_start} → {window_start}")
        
        char_index_map[right_char] = window_end
        current_length = window_end - window_start + 1
        max_length = max(max_length, current_length)
        
        window = s[window_start:window_end + 1]
        print(f"{window_end + 1:<4} '{right_char}'   '{window}'{'':< 15-len(window)} {current_length:<6} {max_length:<4}")
    
    return max_length

# Example with trace
s = "abcabcbb"
result = lengthOfLongestSubstringWithTrace(s)
print(f"\\nFinal result: {result}")`,
        java: `public int lengthOfLongestSubstring(String s) {
    /*
     * Sliding window with HashMap: Optimal solution
     * Time: O(n), Space: O(min(m,n))
     */
    Map<Character, Integer> charIndexMap = new HashMap<>();
    int maxLength = 0;
    int windowStart = 0;
    
    for (int windowEnd = 0; windowEnd < s.length(); windowEnd++) {
        char rightChar = s.charAt(windowEnd);
        
        // If character is already in window, shrink from left
        if (charIndexMap.containsKey(rightChar)) {
            // Move window start to position after last occurrence
            windowStart = Math.max(windowStart, charIndexMap.get(rightChar) + 1);
        }
        
        // Update character's latest position
        charIndexMap.put(rightChar, windowEnd);
        
        // Update max length
        int currentLength = windowEnd - windowStart + 1;
        maxLength = Math.max(maxLength, currentLength);
    }
    
    return maxLength;
}

// Step-by-step trace version
public int lengthOfLongestSubstringWithTrace(String s) {
    Map<Character, Integer> charIndexMap = new HashMap<>();
    int maxLength = 0;
    int windowStart = 0;
    
    System.out.println("String: '" + s + "'");
    System.out.printf("%-4s %-4s %-15s %-6s %-4s%n", "Step", "Char", "Window", "Length", "Max");
    System.out.println("----------------------------------------");
    
    for (int windowEnd = 0; windowEnd < s.length(); windowEnd++) {
        char rightChar = s.charAt(windowEnd);
        
        if (charIndexMap.containsKey(rightChar)) {
            int oldStart = windowStart;
            windowStart = Math.max(windowStart, charIndexMap.get(rightChar) + 1);
            if (oldStart != windowStart) {
                System.out.printf("     Duplicate '%c' found! Moved start: %d → %d%n", 
                                rightChar, oldStart, windowStart);
            }
        }
        
        charIndexMap.put(rightChar, windowEnd);
        int currentLength = windowEnd - windowStart + 1;
        maxLength = Math.max(maxLength, currentLength);
        
        String window = s.substring(windowStart, windowEnd + 1);
        System.out.printf("%-4d '%c'   '%-15s' %-6d %-4d%n", 
                         windowEnd + 1, rightChar, window, currentLength, maxLength);
    }
    
    return maxLength;
}`,
        c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/*
 * Sliding window with array (for ASCII): Optimal solution
 * Time: O(n), Space: O(min(m,n))
 */
int lengthOfLongestSubstring(char* s) {
    int charIndex[256]; // For ASCII characters
    for (int i = 0; i < 256; i++) {
        charIndex[i] = -1;
    }
    
    int maxLength = 0;
    int windowStart = 0;
    int len = strlen(s);
    
    for (int windowEnd = 0; windowEnd < len; windowEnd++) {
        char rightChar = s[windowEnd];
        
        // If character is already in window, shrink from left
        if (charIndex[rightChar] >= windowStart) {
            windowStart = charIndex[rightChar] + 1;
        }
        
        // Update character's latest position
        charIndex[rightChar] = windowEnd;
        
        // Update max length
        int currentLength = windowEnd - windowStart + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    
    return maxLength;
}

// Step-by-step trace version
int lengthOfLongestSubstringWithTrace(char* s) {
    int charIndex[256];
    for (int i = 0; i < 256; i++) {
        charIndex[i] = -1;
    }
    
    int maxLength = 0;
    int windowStart = 0;
    int len = strlen(s);
    
    printf("String: '%s'\\n", s);
    printf("%-4s %-4s %-15s %-6s %-4s\\n", "Step", "Char", "Window", "Length", "Max");
    printf("----------------------------------------\\n");
    
    for (int windowEnd = 0; windowEnd < len; windowEnd++) {
        char rightChar = s[windowEnd];
        
        if (charIndex[rightChar] >= windowStart) {
            int oldStart = windowStart;
            windowStart = charIndex[rightChar] + 1;
            if (oldStart != windowStart) {
                printf("     Duplicate '%c' found! Moved start: %d → %d\\n", 
                       rightChar, oldStart, windowStart);
            }
        }
        
        charIndex[rightChar] = windowEnd;
        int currentLength = windowEnd - windowStart + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
        
        // Print current window
        printf("%-4d '%c'   '", windowEnd + 1, rightChar);
        for (int i = windowStart; i <= windowEnd; i++) {
            printf("%c", s[i]);
        }
        printf("'");
        
        // Add spaces for alignment
        int windowLen = windowEnd - windowStart + 1;
        for (int i = windowLen; i < 15; i++) {
            printf(" ");
        }
        
        printf(" %-6d %-4d\\n", currentLength, maxLength);
    }
    
    return maxLength;
}

// Example usage
int main() {
    char s[] = "abcabcbb";
    int result = lengthOfLongestSubstringWithTrace(s);
    printf("\\nFinal result: %d\\n", result);
    return 0;
}`
      }
    }
  },
  'linked-list-cycle': {
    title: 'Linked List Cycle',
    difficulty: 'Easy',
    description: 'Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.',
    examples: [
      {
        input: 'head = [3,2,0,-4], pos = 1',
        output: 'true',
        explanation: 'There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).'
      },
      {
        input: 'head = [1,2], pos = 0',
        output: 'true',
        explanation: 'There is a cycle in the linked list, where the tail connects to the 0th node.'
      },
      {
        input: 'head = [1], pos = -1',
        output: 'false',
        explanation: 'There is no cycle in the linked list.'
      }
    ],
    constraints: [
      'The number of the nodes in the list is in the range [0, 10^4]',
      '-10^5 ≤ Node.val ≤ 10^5',
      'pos is -1 or a valid index in the linked-list'
    ],
    subOptimalSolution: {
      approach: 'Hash Set to Track Visited Nodes',
      timeComplexity: 'O(n)',
      timeComplexityExplanation: 'Linear time - visit each node once and hash operations are O(1) average case.',
      spaceComplexity: 'O(n)',
      spaceComplexityExplanation: 'Linear space - store all visited nodes in hash set, worst case stores all n nodes.',
      explanation: 'Store every visited node in a hash set. If we encounter a node we\'ve seen before, there\'s a cycle. This works but uses extra space.',
      codes: {
        python: `def hasCycle(head):
    """
    Hash set approach: Track visited nodes
    Time: O(n), Space: O(n)
    """
    if not head:
        return False
    
    visited = set()
    current = head
    
    while current:
        if current in visited:
            return True  # Found cycle
        
        visited.add(current)
        current = current.next
    
    return False  # Reached end, no cycle

# Alternative with node IDs (for demonstration)
def hasCycleWithIds(head):
    """
    Using node memory addresses as IDs
    Time: O(n), Space: O(n)
    """
    if not head:
        return False
    
    visited_ids = set()
    current = head
    
    while current:
        node_id = id(current)  # Memory address as unique ID
        
        if node_id in visited_ids:
            print(f"Cycle detected! Node {current.val} visited before")
            return True
        
        visited_ids.add(node_id)
        print(f"Visiting node {current.val} (ID: {node_id})")
        current = current.next
    
    print("Reached end of list, no cycle")
    return False

# Node class for testing
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Example usage
def createCycleList():
    # Create: 3 -> 2 -> 0 -> 4 -> (back to 2)
    node1 = ListNode(3)
    node2 = ListNode(2)
    node3 = ListNode(0)
    node4 = ListNode(4)
    
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node2  # Creates cycle
    
    return node1

head = createCycleList()
result = hasCycle(head)
print(f"Has cycle: {result}")  # Output: True`,
        java: `import java.util.*;

public boolean hasCycle(ListNode head) {
    /*
     * Hash set approach: Track visited nodes
     * Time: O(n), Space: O(n)
     */
    if (head == null) {
        return false;
    }
    
    Set<ListNode> visited = new HashSet<>();
    ListNode current = head;
    
    while (current != null) {
        if (visited.contains(current)) {
            return true; // Found cycle
        }
        
        visited.add(current);
        current = current.next;
    }
    
    return false; // Reached end, no cycle
}

// Alternative with detailed tracking
public boolean hasCycleWithTracking(ListNode head) {
    /*
     * Hash set with detailed logging
     * Time: O(n), Space: O(n)
     */
    if (head == null) {
        return false;
    }
    
    Set<ListNode> visited = new HashSet<>();
    ListNode current = head;
    int position = 0;
    
    while (current != null) {
        if (visited.contains(current)) {
            System.out.println("Cycle detected at position " + position + 
                             " with node value " + current.val);
            return true;
        }
        
        visited.add(current);
        System.out.println("Visiting position " + position + 
                          " with node value " + current.val);
        current = current.next;
        position++;
    }
    
    System.out.println("Reached end of list, no cycle");
    return false;
}

// Node class
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
}

// Example usage
public ListNode createCycleList() {
    // Create: 3 -> 2 -> 0 -> 4 -> (back to 2)
    ListNode node1 = new ListNode(3);
    ListNode node2 = new ListNode(2);
    ListNode node3 = new ListNode(0);
    ListNode node4 = new ListNode(4);
    
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2; // Creates cycle
    
    return node1;
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

/*
 * Hash set approach using simple array (limited size)
 * Time: O(n), Space: O(n)
 * Note: This is a simplified version for demonstration
 */
bool hasCycle(struct ListNode *head) {
    if (head == NULL) {
        return false;
    }
    
    // Simple approach: store node addresses in array
    struct ListNode* visited[10000]; // Assuming max 10000 nodes
    int visitedCount = 0;
    struct ListNode* current = head;
    
    while (current != NULL) {
        // Check if current node was visited before
        for (int i = 0; i < visitedCount; i++) {
            if (visited[i] == current) {
                printf("Cycle detected! Node with value %d visited before\\n", current->val);
                return true;
            }
        }
        
        // Add current node to visited array
        visited[visitedCount] = current;
        visitedCount++;
        
        printf("Visiting node with value %d\\n", current->val);
        current = current->next;
        
        // Prevent overflow
        if (visitedCount >= 10000) {
            printf("Visited nodes limit reached\\n");
            break;
        }
    }
    
    printf("Reached end of list, no cycle\\n");
    return false;
}

// Alternative approach: modify node values temporarily
bool hasCycleModify(struct ListNode *head) {
    /*
     * Temporarily modify node values to mark visited
     * Time: O(n), Space: O(1) but modifies original list
     * Note: This approach has side effects
     */
    if (head == NULL) {
        return false;
    }
    
    const int VISITED_MARK = 100001; // Outside constraint range
    struct ListNode* current = head;
    
    while (current != NULL) {
        if (current->val == VISITED_MARK) {
            printf("Cycle detected! Found marked node\\n");
            return true;
        }
        
        printf("Visiting node with value %d\\n", current->val);
        int originalVal = current->val;
        current->val = VISITED_MARK; // Mark as visited
        current = current->next;
    }
    
    printf("Reached end of list, no cycle\\n");
    return false;
}

// Helper function to create nodes
struct ListNode* createNode(int val) {
    struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
    node->val = val;
    node->next = NULL;
    return node;
}

// Example usage
struct ListNode* createCycleList() {
    // Create: 3 -> 2 -> 0 -> 4 -> (back to 2)
    struct ListNode* node1 = createNode(3);
    struct ListNode* node2 = createNode(2);
    struct ListNode* node3 = createNode(0);
    struct ListNode* node4 = createNode(4);
    
    node1->next = node2;
    node2->next = node3;
    node3->next = node4;
    node4->next = node2; // Creates cycle
    
    return node1;
}

int main() {
    struct ListNode* head = createCycleList();
    bool result = hasCycle(head);
    printf("Has cycle: %s\\n", result ? "true" : "false");
    return 0;
}`
      }
    },
    optimalSolution: {
      approach: 'Floyd\'s Cycle Detection (Fast & Slow Pointers)',
      timeComplexity: 'O(n)',
      timeComplexityExplanation: 'Linear time - fast pointer makes at most 2n steps before meeting slow pointer or reaching end.',
      spaceComplexity: 'O(1)',
      spaceComplexityExplanation: 'Constant space - only using two pointer variables regardless of input size.',
      explanation: 'Use two pointers moving at different speeds. If there\'s a cycle, the fast pointer will eventually meet the slow pointer. This is optimal as it uses constant space.',
      codes: {
        python: `def hasCycle(head):
    """
    Floyd's Cycle Detection: Fast & Slow Pointers
    Time: O(n), Space: O(1)
    """
    if not head or not head.next:
        return False
    
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next        # Move 1 step
        fast = fast.next.next   # Move 2 steps
        
        if slow == fast:
            return True  # Cycle detected
    
    return False  # No cycle

# Step-by-step trace version
def hasCycleWithTrace(head):
    """
    Floyd's algorithm with detailed tracing
    Time: O(n), Space: O(1)
    """
    if not head or not head.next:
        print("Empty list or single node - no cycle possible")
        return False
    
    slow = head
    fast = head
    step = 0
    
    print("Starting Floyd's Cycle Detection Algorithm")
    print(f"Initial: slow = Node({slow.val}), fast = Node({fast.val})")
    print()
    
    while fast and fast.next:
        # Move pointers
        slow = slow.next
        fast = fast.next.next
        step += 1
        
        print(f"Step {step}:")
        print(f"  slow moved to Node({slow.val})")
        print(f"  fast moved to Node({fast.val if fast else 'None'})")
        
        if slow == fast:
            print(f"  ✅ CYCLE DETECTED! Pointers met at Node({slow.val})")
            return True
        
        print(f"  Pointers different, continue...")
        print()
        
        # Safety check to prevent infinite output
        if step > 20:
            print("  ... (truncated for brevity)")
            break
    
    print("Reached end of list - NO CYCLE")
    return False

# Advanced: Find cycle start position
def detectCycleStart(head):
    """
    Find where the cycle begins using Floyd's algorithm
    Time: O(n), Space: O(1)
    """
    if not head or not head.next:
        return None
    
    # Phase 1: Detect if cycle exists
    slow = fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break
    else:
        return None  # No cycle
    
    # Phase 2: Find cycle start
    # Move one pointer to head, keep other at meeting point
    # Move both at same speed until they meet
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
    
    return slow  # This is the start of the cycle

# Node class
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
    
    def __repr__(self):
        return f"Node({self.val})"

# Example usage
def createCycleList():
    # Create: 3 -> 2 -> 0 -> 4 -> (back to 2)
    nodes = [ListNode(3), ListNode(2), ListNode(0), ListNode(4)]
    
    # Link nodes
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]
    
    # Create cycle: last node points to second node
    nodes[-1].next = nodes[1]
    
    return nodes[0]

# Test
head = createCycleList()
result = hasCycleWithTrace(head)
print(f"\\nFinal result: {result}")`,
        java: `public boolean hasCycle(ListNode head) {
    /*
     * Floyd's Cycle Detection: Fast & Slow Pointers
     * Time: O(n), Space: O(1)
     */
    if (head == null || head.next == null) {
        return false;
    }
    
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;       // Move 1 step
        fast = fast.next.next;  // Move 2 steps
        
        if (slow == fast) {
            return true; // Cycle detected
        }
    }
    
    return false; // No cycle
}

// Step-by-step trace version
public boolean hasCycleWithTrace(ListNode head) {
    /*
     * Floyd's algorithm with detailed tracing
     * Time: O(n), Space: O(1)
     */
    if (head == null || head.next == null) {
        System.out.println("Empty list or single node - no cycle possible");
        return false;
    }
    
    ListNode slow = head;
    ListNode fast = head;
    int step = 0;
    
    System.out.println("Starting Floyd's Cycle Detection Algorithm");
    System.out.printf("Initial: slow = Node(%d), fast = Node(%d)%n", slow.val, fast.val);
    System.out.println();
    
    while (fast != null && fast.next != null) {
        // Move pointers
        slow = slow.next;
        fast = fast.next.next;
        step++;
        
        System.out.printf("Step %d:%n", step);
        System.out.printf("  slow moved to Node(%d)%n", slow.val);
        System.out.printf("  fast moved to Node(%s)%n", 
                         fast != null ? String.valueOf(fast.val) : "None");
        
        if (slow == fast) {
            System.out.printf("  ✅ CYCLE DETECTED! Pointers met at Node(%d)%n", slow.val);
            return true;
        }
        
        System.out.println("  Pointers different, continue...");
        System.out.println();
        
        // Safety check to prevent infinite output
        if (step > 20) {
            System.out.println("  ... (truncated for brevity)");
            break;
        }
    }
    
    System.out.println("Reached end of list - NO CYCLE");
    return false;
}

// Advanced: Find cycle start position
public ListNode detectCycleStart(ListNode head) {
    /*
     * Find where the cycle begins using Floyd's algorithm
     * Time: O(n), Space: O(1)
     */
    if (head == null || head.next == null) {
        return null;
    }
    
    // Phase 1: Detect if cycle exists
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            break;
        }
    }
    
    // No cycle found
    if (fast == null || fast.next == null) {
        return null;
    }
    
    // Phase 2: Find cycle start
    // Move one pointer to head, keep other at meeting point
    // Move both at same speed until they meet
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow; // This is the start of the cycle
}

// Node class
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
    
    @Override
    public String toString() {
        return "Node(" + val + ")";
    }
}

// Example usage
public ListNode createCycleList() {
    // Create: 3 -> 2 -> 0 -> 4 -> (back to 2)
    ListNode node1 = new ListNode(3);
    ListNode node2 = new ListNode(2);
    ListNode node3 = new ListNode(0);
    ListNode node4 = new ListNode(4);
    
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2; // Creates cycle
    
    return node1;
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

/*
 * Floyd's Cycle Detection: Fast & Slow Pointers
 * Time: O(n), Space: O(1)
 */
bool hasCycle(struct ListNode *head) {
    if (head == NULL || head->next == NULL) {
        return false;
    }
    
    struct ListNode *slow = head;
    struct ListNode *fast = head;
    
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;       // Move 1 step
        fast = fast->next->next; // Move 2 steps
        
        if (slow == fast) {
            return true; // Cycle detected
        }
    }
    
    return false; // No cycle
}

// Step-by-step trace version
bool hasCycleWithTrace(struct ListNode *head) {
    /*
     * Floyd's algorithm with detailed tracing
     * Time: O(n), Space: O(1)
     */
    if (head == NULL || head->next == NULL) {
        printf("Empty list or single node - no cycle possible\\n");
        return false;
    }
    
    struct ListNode *slow = head;
    struct ListNode *fast = head;
    int step = 0;
    
    printf("Starting Floyd's Cycle Detection Algorithm\\n");
    printf("Initial: slow = Node(%d), fast = Node(%d)\\n", slow->val, fast->val);
    printf("\\n");
    
    while (fast != NULL && fast->next != NULL) {
        // Move pointers
        slow = slow->next;
        fast = fast->next->next;
        step++;
        
        printf("Step %d:\\n", step);
        printf("  slow moved to Node(%d)\\n", slow->val);
        printf("  fast moved to Node(%s)\\n", 
               fast != NULL ? "exists" : "NULL");
        if (fast != NULL) {
            printf("    fast->val = %d\\n", fast->val);
        }
        
        if (slow == fast) {
            printf("  ✅ CYCLE DETECTED! Pointers met at Node(%d)\\n", slow->val);
            return true;
        }
        
        printf("  Pointers different, continue...\\n");
        printf("\\n");
        
        // Safety check to prevent infinite output
        if (step > 20) {
            printf("  ... (truncated for brevity)\\n");
            break;
        }
    }
    
    printf("Reached end of list - NO CYCLE\\n");
    return false;
}

// Advanced: Find cycle start position
struct ListNode* detectCycleStart(struct ListNode *head) {
    /*
     * Find where the cycle begins using Floyd's algorithm
     * Time: O(n), Space: O(1)
     */
    if (head == NULL || head->next == NULL) {
        return NULL;
    }
    
    // Phase 1: Detect if cycle exists
    struct ListNode *slow = head;
    struct ListNode *fast = head;
    
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            break;
        }
    }
    
    // No cycle found
    if (fast == NULL || fast->next == NULL) {
        return NULL;
    }
    
    // Phase 2: Find cycle start
    // Move one pointer to head, keep other at meeting point
    // Move both at same speed until they meet
    slow = head;
    while (slow != fast) {
        slow = slow->next;
        fast = fast->next;
    }
    
    return slow; // This is the start of the cycle
}

// Helper functions
struct ListNode* createNode(int val) {
    struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
    node->val = val;
    node->next = NULL;
    return node;
}

struct ListNode* createCycleList() {
    // Create: 3 -> 2 -> 0 -> 4 -> (back to 2)
    struct ListNode* node1 = createNode(3);
    struct ListNode* node2 = createNode(2);
    struct ListNode* node3 = createNode(0);
    struct ListNode* node4 = createNode(4);
    
    node1->next = node2;
    node2->next = node3;
    node3->next = node4;
    node4->next = node2; // Creates cycle
    
    return node1;
}

// Example usage
int main() {
    struct ListNode* head = createCycleList();
    bool result = hasCycleWithTrace(head);
    printf("\\nFinal result: %s\\n", result ? "true" : "false");
    
    // Test cycle start detection
    struct ListNode* cycleStart = detectCycleStart(head);
    if (cycleStart) {
        printf("Cycle starts at Node(%d)\\n", cycleStart->val);
    }
    
    return 0;
}`
      }
    }
  }
};