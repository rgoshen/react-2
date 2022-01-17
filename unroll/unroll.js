function spiralPrint(m, n, arr) {
  let i,
    k = 0,
    l = 0,
    ans = [];
  /*
        k - starting row index
        l - starting column index
        i - iterator
    */

  while (k < m && l < n) {
    // print the first row from the remaining rows
    for (i = l; i < n; ++i) {
      ans.push(arr[k][i]);
    }
    k++;

    // print the last column from the remaining columns
    for (i = k; i < m; ++i) {
      ans.push(arr[i][n - 1]);
    }
    n--;

    // print the last row from the remaining rows
    if (k < m) {
      for (i = n - 1; i >= l; --i) {
        ans.push(arr[m - 1][i]);
      }
      m--;
    }

    // print the first column from the remaining columns
    if (l < n) {
      for (i = m - 1; i >= k; --i) {
        ans.push(arr[i][l]);
      }
      l++;
    }
  }

  return ans;
}

function unroll(squareArray) {
  let r = squareArray.length;
  let c = squareArray[0].length;
  return spiralPrint(r, c, squareArray);
}

module.exports = unroll;
