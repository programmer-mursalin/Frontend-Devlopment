#include <bits/stdc++.h>
using namespace std;
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
    int n, m;
    cin >> n >> m;
    vector<vector<int>> d(n, vector<int>(m));

    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> d[i][j];

    map<pair<int, int>, int> r;

    vector<vector<int>> original = d;

    for (int k = 0; k < m; k++)
    {
        pair<int, int> x = {-1, -1};
        int mini = LLONG_MAX;

        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {
                if (r[{i, j}] == 0 && original[i][j] < mini)
                {
                    mini = original[i][j];
                    x = {i, j};
                }
            }
        }

        r[x] = 1;
        d[x.first][k] = original[x.first][x.second];

        for (int i = 0; i < n; i++)
        {
            if (i == x.first)
                continue;

            int maxi = LLONG_MIN;
            pair<int, int> p = {-1, -1};

            for (int j = 0; j < m; j++)
            {
                if (r[{i, j}] == 0 && original[i][j] > maxi)
                {
                    maxi = original[i][j];
                    p = {i, j};
                }
            }

            if (p.first != -1)
            {
                r[p] = 1;
                d[p.first][k] = original[p.first][p.second];
            }
        }
    }

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
            cout << d[i][j] << " ";
        cout << "\n";
    }
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
  :::::::::::::Author : Md. Mursalin:::::::::::::
  ===============================================*/
