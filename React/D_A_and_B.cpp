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
int cheak(vector<int> v)
{
    int mini = 0;
    int sz = v.size();

    for (int i = 0; i < v.size(); i++)
    {
        if (i != (v.size() / 2))
            mini += llabs(v[i] - v[v.size() / 2]) - 1;
    }
    return mini;
}
void solve()
{

    // 2d input
    // vector<vector< int>> d(n, vector< int>(m));
    int n;
    cin >> n;
    string s;
    cin >> s;

    vector<int> a, b;
    for (int i = 0; i < n; i++)
    {
        if (s[i] == 'a')
            a.push_back(i);
        else
            b.push_back(i);
    }

    cout << min(cheak(a), cheak(b)) << endl;
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
