#include <bits/stdc++.h>
using namespace std;
#define int long long

void solve()
{
    int n, k;
    cin >> n >> k;

    vector<int> divisors;

    for (int i = 1; i * (long long)i <= n; i++)
    {
        if (n % i == 0)
        {
            k--;
            if (k == 0)
            {
                cout << i << "\n";
                return;
            }
        }
    }

    for (int i = sqrt(n); i >= 1; i--)
    {
        if (n % i == 0)
        {
            if (i * (long long)i != n)
            { // skip the square root if counted already
                k--;
                if (k == 0)
                {
                    cout << n / i << "\n";
                    return;
                }
            }
        }
    }

    cout << "-1\n";
}

signed main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    solve();
    return 0;
}
