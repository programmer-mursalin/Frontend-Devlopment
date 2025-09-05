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
    // Problem: choose largest team such that no two members dislike each other
    int n, m;
    if (!(cin >> n >> m))
    {
        cheakmate
    } // defensive, but main controls input

    vector<string> names(n);
    unordered_map<string, int> idx;
    for (int i = 0; i < n; ++i)
    {
        cin >> names[i];
        idx[names[i]] = i;
    }

    // conflict adjacency matrix
    vector<vector<int>> bad(n, vector<int>(n, 0));
    for (int i = 0; i < m; ++i)
    {
        string a, b;
        cin >> a >> b;
        int u = idx[a], v = idx[b];
        bad[u][v] = bad[v][u] = 1;
    }

    int bestSize = 0;
    vector<int> bestTeam;

    // iterate all subsets (since n <= 16)
    for (long long mask = 1; mask < (1LL << n); ++mask)
    {
        vector<int> team;
        bool ok = true;
        for (int i = 0; i < n; ++i)
        {
            if (mask & (1LL << i))
            {
                // check conflict with already chosen members
                for (int j : team)
                {
                    if (bad[i][j])
                    {
                        ok = false;
                        break;
                    }
                }
                if (!ok)
                    break;
                team.push_back(i);
            }
        }
        if (ok && (int)team.size() > bestSize)
        {
            bestSize = (int)team.size();
            bestTeam = team;
        }
    }

    // prepare result names sorted lexicographically
    vector<string> result;
    for (int id : bestTeam)
        result.push_back(names[id]);
    sort(ALL(result));

    cout << bestSize << "\n";
    for (auto &nm : result)
        cout << nm << "\n";
}
// sort(ALL(a),greater<int>());
// int maxi=*max_element(a.begin(),a.end());
//  int maxi = distance(a.begin(), max_element(a.begin(), a.end()));   // return max index

signed main()
{

    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    solve();

    return 0;
}

/*===============================================
  :::::::::::::Author :Md.Mursalin:::::::::::::
  ===============================================*/
