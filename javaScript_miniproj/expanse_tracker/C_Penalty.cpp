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
const int N = 1e5 + 5;
#define Mod 1000000009 + 7

void solve()
{

    // 2d input
    // vector<vector< int>> d(n, vector< int>(m));
    //   int n;
    // cin >> n;
    // vector< int> a(n);
    // for (int i = 0; i < n; i++)
    // {
    //     cin >> a[i];
    //}

    string s;
    cin >> s;

    int ans = 10;
    int p_2q = 0, p_1q = 0, p1_g = 0, p2_g = 0, m1 = 5, m2 = 5;

    for (int i = 0; i < 10; i++)
    {
        if (i & 1)
        {
            if (s[i] == '?')
                p_2q++;
            if (s[i] == '1')
                p2_g++;
            m2--;
        }
        else
        {
            if (s[i] == '?')
                p_1q++;
            if (s[i] == '1')
                p1_g++;
            m1--;
        }

        if (((p1_g + p_1q) - p2_g) > m2)
        {
            cout << i + 1 << endl;
            cheakmate
        }
        if (((p2_g + p_2q) - p1_g) > m1)
        {
            cout << i + 1 << endl;
            cheakmate
        }
    }

    cout << ans << endl;
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
