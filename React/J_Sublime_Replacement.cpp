#include <bits/stdc++.h>
// #include <ext/pb_ds/assoc_container.hpp>
// #include <ext/pb_ds/tree_policy.hpp>
using namespace std;
// using namespace __gnu_pbds;
#define int long long
#define gcd __gcd

#define ALL(x) (x).begin(), (x).end()
#define py cout << "YES\n";
#define pm cout << "-1\n";
#define pz cout << "0\n";
#define pn cout << "NO\n";
#define cheakmate return;
const int N = 1000000000LL;
#define Mod 1000000009 + 7

void solve()
{
    int n;
    cin >> n;
    vector<int> a(n), b(n);
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    b = a;
    // handle n == 1 safely
    if (n == 1)
    {
        if (a[0] == -1)
        {
            cout << N << '\n';
            cheakmate
        }
        else
        {
            cout << a[0] << '\n';
            cheakmate
        }
    }

    int maxi = LLONG_MIN;

    // handle a[0] replacement safely (only if n > 1 here)
    if (a[0] == -1)
    {
        // if next exists and is known and doubling it exceeds 1e9, copy it; otherwise use 1e9
        if (n > 1 && a[1] != -1 && (2LL * a[1] > N))
        {
            a[0] = a[1];
        }
        else
        {
            a[0] = N;
        }
    }

    // first pass: build curr by scanning and replacing -1 with chosen values
    int curr = a[0];
    for (int i = 1; i < n; i++)
    {
        if (a[i] != -1)
        {
            if (a[i] < a[i - 1])
            {
                maxi = max(maxi, curr);
                curr = a[i];
            }
            else
            {
                curr += a[i];
            }
        }
        else
        {
            // decide replacement for a[i]
            if (i + 1 < n && a[i + 1] != -1 && (2LL * a[i + 1] > N))
            {
                // copy next
                a[i] = a[i + 1];
                curr += a[i];
            }
            else
            {
                a[i] = N;
                curr += a[i];
            }
        }
    }

    maxi = max(maxi, curr);

    // second pass: recompute maximal non-decreasing subarray sum (safer pass)

    curr = b[0];
    int c = b[0];
    if (b[0] == -1)
    {
        curr = b[1];
        c = b[1];
    }

    // start from i = 1 since c already includes a[0]
    for (int i = 1; i < n; i++)
    {
        if (b[i] == -1)
        {
            maxi = max(maxi, c + N);
            c += curr;
        }
        else if (b[i] >= curr)
        {

            c += b[i];
            curr = b[i];
        }
        else
        {

            curr = b[i];
            c = b[i];
        }
    }

    cout << maxi << '\n';
}

signed main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return 0;
}

/*===============================================
  :::::::::::::Author :Md.Mursalin:::::::::::::
  ===============================================*/
