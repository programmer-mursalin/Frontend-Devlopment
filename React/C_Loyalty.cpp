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
    int n, x;
    cin >> n >> x;
    vector<int> a(n), ans;
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    int ini = 0;
    sort(ALL(a));

    int l = 0, h = n - 1;
    while (l <= h)
    {

        if ((ini + a[l]) / x == (ini / x))
        {
            ans.push_back(a[l]);
            ini += a[l];
            l++;
        }

        else
        {
            ans.push_back(a[h]);
            ini += a[h];
            h--;
        }
    }

    int goal = 0, tmp = 0;
    for (int i = 0; i < ans.size(); i++)
    {
        int prev = tmp / x;
        tmp += ans[i];
        if (tmp / x > prev)
            goal += ans[i];
    }

    cout << goal << endl;
    for (int i = 0; i < ans.size(); i++)
    {
        cout << ans[i] << " ";
    }

    cout << endl;
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
