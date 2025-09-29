#include <bits/stdc++.h>
// #include <ext/pb_ds/assoc_container.hpp>
// #include <ext/pb_ds/tree_policy.hpp>
using namespace std;
// using namespace __gnu_pbds;
#define ll long long
#define gcd __gcd

#define ALL(x) (x).begin(), (x).end()
#define py cout << "YES\n";
#define pm cout << "-1\n";
#define pz cout << "0\n";
#define pn cout << "NO\n";
#define cheakmate return;
const int N = 1e5 + 5;
#define Mod 1000000009 + 7
ll atMost(vector<int> &a, int n, int k, int L, int R)
{
    if (k == 0)
        return 0;
    ll ans = 0;
    int left = 0;
    map<int, int> freq;

    for (int right = 0; right < n; right++)
    {
        freq[a[right]]++;

        while ((int)freq.size() > k)
        {
            if (--freq[a[left]] == 0)
                freq.erase(a[left]);
            left++;
        }

        int minLen = max(L, 1);
        int maxLen = min(R, right - left + 1);

        if (maxLen >= minLen)
            ans += (maxLen - minLen + 1);
    }
    return ans;
}
void solve()
{

    // 2d input
    // vector<vector< int>> d(n, vector< int>(m));
    int n, k, l, r;
    cin >> n >> k >> l >> r;
    vector<int> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    ll res = atMost(a, n, k, l, r) - atMost(a, n, k - 1, l, r);
    cout << res << "\n";
}
// sort(ALL(a),greater<int>());
// int maxi=*max_element(a.begin(),a.end());
//  int maxi = distance(a.begin(), max_element(a.begin(), a.end()));   // return max index

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
