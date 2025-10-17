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
string to_binary(long long n)
{
    string s;
    while (n)
    {
        s.push_back((n % 2) + '0');
        n /= 2;
    }
    reverse(s.begin(), s.end());
    return s;
}

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
    //   int n;
    // cin >> n;
    // vector< int> a(n);
    // for (int i = 0; i < n; i++)
    // {
    //     cin >> a[i];
    //}

    long long p;
    cin >> p;

    string e = to_binary(p);
    if (count(ALL(e), '1') & 1)
    {
        pn cheakmate
    }
    // Try adding 0 to 32 leading zeros
    for (int i = 0; i <= 32; i++)
    {
        string t = string(i, '0') + e; // add i zeros in front
        if (is_palindrome(t))
        {
            py cheakmate;
        }
    }

    pn
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