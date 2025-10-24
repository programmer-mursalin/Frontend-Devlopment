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
    int n;
    cin >> n;
    vector<int> a(n), b;
    map<int, int> mp;

    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        mp[a[i]]++;
        b.push_back(a[i]);
    }

    vector<pair<int, int>> vp;
    set<int> st;
    vector<int> v; // ❗ আগের v(n) → এখন খালি vector

    for (auto it : mp)
    {
        if (it.second > 1)
            v.push_back(it.first);
        else
            st.insert(it.first);
    }

    if (v.size() == 0)
    {
        cout << 0 << endl;
        return;
    }

    // sort(ALL(b), greater<int>());

    // if ((b[0] + b[1] <= b[2]) || (b[0] + b[2] <= b[1]) || (b[1] + b[2] <= b[0]))
    // {
    //     cout << 0 << endl;
    //     return;
    // }

    int ans = 0;
    sort(ALL(v), greater<int>());

    for (auto it : v)
    {
        if (mp[it] & 1)
        {
            st.insert(it);
            ans += (it * (mp[it] - 1));
            b.push_back(it);
        }
        else
        {
            ans += (it * mp[it]);
            b.push_back(it);
        }
    }

    if (st.size() >= 2)
    {
        ans += (*st.rbegin());
        st.erase(*st.rbegin());
        ans += (*st.rbegin());
    }
    else if (st.size() == 1)
    {
        ans += (*st.rbegin());
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
