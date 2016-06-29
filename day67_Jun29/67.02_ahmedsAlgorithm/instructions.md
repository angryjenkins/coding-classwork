        ```
        - start at the beggining of the array
        - move into a loop
        - compare only 2 values
        - swap if left is more than right
        - repeat until this current value is less than the right value OR the value is at the far right of the array
        - pseudo code:
        ```
        for i ← 1 to length(A) - 1
            j ← i
            while j > 0 and A[j-1] > A[j]
                swap A[j] and A[j-1]
                j ← j - 1
            end while
        end for
        ```