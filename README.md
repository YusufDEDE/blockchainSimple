# Blockchain Simple Learning Works :)

## usage;
- $ node main.js

## Result

```json
{
    "chain": [
        {
            "index": 0,
            "timestamp": "05/02/2020",
            "data": "Genesis Block",
            "previousHash": "0",
            "hash": "ed18cb0eac5ae6592fc1bf63c5526ed5f4ad8fe2663ee8b2a6d4013d1ac19b3a"
        },
        {
            "index": 1,
            "timestamp": "06/02/2020",
            "data": {
                "amount": 4
            },
            "previousHash": "ed18cb0eac5ae6592fc1bf63c5526ed5f4ad8fe2663ee8b2a6d4013d1ac19b3a",
            "hash": "a713fd045cccf94d915df923aff2509a8220a38edf2bbe37cb76e9bdb123b318"
        },
        {
            "index": 2,
            "timestamp": "07/02/2020",
            "data": {
                "amount": 10
            },
            "previousHash": "a713fd045cccf94d915df923aff2509a8220a38edf2bbe37cb76e9bdb123b318",
            "hash": "5aa3f00013cb6262d232cb918ef17ce8d1ff832e875901276895ac6ff37593e2"
        }
    ]
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
            "hash": "ed18cb0eac5ae6592fc1bf63c5526ed5f4ad8fe2663ee8b2a6d4013d1ac19b3a"
        },
        {
            "index": 1,
            "timestamp": "06/02/2020",
            "data": {
                "amount": 100
            },
            "previousHash": "ed18cb0eac5ae6592fc1bf63c5526ed5f4ad8fe2663ee8b2a6d4013d1ac19b3a",
            "hash": "47deb62cedf68392c043f6c6865548bb17e75e6d44f2f7877876402375f22062"
        },
        {
            "index": 2,
            "timestamp": "07/02/2020",
            "data": {
                "amount": 10
            },
            "previousHash": "a713fd045cccf94d915df923aff2509a8220a38edf2bbe37cb76e9bdb123b318",
            "hash": "5aa3f00013cb6262d232cb918ef17ce8d1ff832e875901276895ac6ff37593e2"
        }
    ]
}

```
