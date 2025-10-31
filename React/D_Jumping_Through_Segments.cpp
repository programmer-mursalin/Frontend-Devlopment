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
bool checker(vector<pair<int, int>> &vp, int k)
{
    int left = 0, right = 0;
    bool flag = 1;
    for (int i = 0; i < vp.size(); i++)
    {
        left -= k;
        right += k;
        // intersect this with the next pair element
        left = max(left, vp[i].first);
        right = min(right, vp[i].second);
        if (right < left)
        {
            flag = 0;
            break;
        }
    }
    return flag;
}
void solve()
{
    int n;
    cin >> n;
    vector<pair<int, int>> vp;
    for (int i = 0; i < n; i++)
    {
        int temp1, temp2;
        cin >> temp1 >> temp2;
        vp.emplace_back(temp1, temp2);
    }
    int left = 0, right = 2e9, ans = -1;
    while (left <= right)
    {
        int mid = (left + right) / 2;
        if (checker(vp, mid))
        {
            right = mid - 1;
            ans = mid;
        }
        else
        {
            left = mid + 1;
        }
        // cout<<mid<<" ";
        // cout<< checker(vp,mid)<<" ";
    }
    // cout<<endl;
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
