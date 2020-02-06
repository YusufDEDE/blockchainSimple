# Blockchain Simple Learning Works :)

## usage;
```json
$ npm install
$ npm start
```
## Result

```json
Mining block 1.....
Block mined: 0000b7250600261a11634893764b2c63c98cedfab5aa3e64bb08eda002f56e3b
Mining block 2 .....
Block mined: 0000318e389139bbee7520ac60a6efaa3e2366ef60524e6532fc0f512289c9d7
{
    "chain": [
        {
            "index": 0,
            "timestamp": "05/02/2020",
            "data": "Genesis Block",
            "previousHash": "0",
            "hash": "4c79a6c76fd715b361f24a99defe1d6efd73d69fc1811257fec232c55c918d24",
            "nonce": 0
        },
        {
            "index": 1,
            "timestamp": "06/02/2020",
            "data": {
                "amount": 4
            },
            "previousHash": "4c79a6c76fd715b361f24a99defe1d6efd73d69fc1811257fec232c55c918d24",
            "hash": "0000b7250600261a11634893764b2c63c98cedfab5aa3e64bb08eda002f56e3b",
            "nonce": 19926
        },
        {
            "index": 2,
            "timestamp": "07/02/2020",
            "data": {
                "amount": 10
            },
            "previousHash": "0000b7250600261a11634893764b2c63c98cedfab5aa3e64bb08eda002f56e3b",
            "hash": "0000318e389139bbee7520ac60a6efaa3e2366ef60524e6532fc0f512289c9d7",
            "nonce": 34838
        }
    ],
    "difficulty": 4
}
cracked chain node _>  2

Is blockchain valid? _> false
{
    "chain": [
        {
            "index": 0,
            "timestamp": "05/02/2020",
            "data": "Genesis Block",
            "previousHash": "0",
            "hash": "4c79a6c76fd715b361f24a99defe1d6efd73d69fc1811257fec232c55c918d24",
            "nonce": 0
        },
        {
            "index": 1,
            "timestamp": "06/02/2020",
            "data": {
                "amount": 100
            },
            "previousHash": "4c79a6c76fd715b361f24a99defe1d6efd73d69fc1811257fec232c55c918d24",
            "hash": "c1d93816e4d50b1e23d0f3671176f9dd1ddb70b03b3cd6c414ab462135ddadf4",
            "nonce": 19926
        },
        {
            "index": 2,
            "timestamp": "07/02/2020",
            "data": {
                "amount": 10
            },
            "previousHash": "0000b7250600261a11634893764b2c63c98cedfab5aa3e64bb08eda002f56e3b",
            "hash": "0000318e389139bbee7520ac60a6efaa3e2366ef60524e6532fc0f512289c9d7",
            "nonce": 34838
        }
    ],
    "difficulty": 4
}

```
