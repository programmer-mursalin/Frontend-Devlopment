#include <bits/stdc++.h>
using namespace std;
#define int long long

const int Mod = 1e9 + 7;
const int TWO_MOD_INV = 500000004; // modular inverse of 2 under Mod

int calculate(int x, int y, int n, int i)
{
    int x1 = 0, x2 = 0;
    x1 = (x * (x + 1)) % Mod;
    x1 = (x1 * TWO_MOD_INV) % Mod;

    x2 = (y * (y + 1)) % Mod;
    x2 = (x2 * TWO_MOD_INV) % Mod;

    x1 = (x1 - x2 + Mod) % Mod;
    return x1;
}

void solve()
{
    int n;
    cin >> n;
    int ans = 0;
    for (int i = 1; i * i <= n; i++)
    {
        ans = (ans + (n / i) % Mod) % Mod;
        // 🔥 এখানে পরিবর্তন
        ans = (ans + ((calculate(n / (i + 1), n / i, n, i)) * i) % Mod) % Mod;
    }

    cout << ans % Mod << endl;
}

signed main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    solve();
    return 0;
}
