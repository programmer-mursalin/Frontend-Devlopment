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
bool is_palindrome(const string &s)
{
    int i = 0, j = s.size() - 1;
    while (i < j)
    {
        if (s[i] != s[j])
            return false;
        i++;
        j--;
    }
    return true;
}
void solve()
{

    // 2d input
    // vector<vector< int>> d(n, vector< int>(m));

    int n;
    cin >> n;
    string s;
    cin >> s;
    //   int n;
    // cin >> n;
    vector<int> ans;

    for (int i = 0; i, n; i++)
    {

        vector<int> curr;
        curr.push_back(i + 1);
        if (s[i] == '0')
        {
            for (int j = i + 1; j < n; j++)
            {
                if (s[i] == '1')
                {
                    curr.push_back(j + 1);
                }
            }
        }
    }
    sort(ALL(ans));
    cout << ans.size() << endl;
    for (auto it : ans)
        cout << it << " ";
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
