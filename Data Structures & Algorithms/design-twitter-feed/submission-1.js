class MaxHeap {
    constructor() { this.h = []; }
    size() { return this.h.length; }
    push(node) {                       // node = [time, tweetId, uid, idx]
        this.h.push(node);
        let i = this.h.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.h[p][0] >= this.h[i][0]) break;
            [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
            i = p;
        }
    }
    pop() {
        const top = this.h[0];
        const last = this.h.pop();
        if (this.h.length) {
            this.h[0] = last;
            let i = 0, n = this.h.length;
            while (true) {
                let l = 2*i+1, r = 2*i+2, big = i;
                if (l < n && this.h[l][0] > this.h[big][0]) big = l;
                if (r < n && this.h[r][0] > this.h[big][0]) big = r;
                if (big === i) break;
                [this.h[big], this.h[i]] = [this.h[i], this.h[big]];
                i = big;
            }
        }
        return top;
    }
}

class Twitter {
    constructor() {
        this.time = 0;
        this.tweets = new Map()
        this.following = new Map()
    }

    _ensure(userId){
        if(!this.tweets.has(userId)) this.tweets.set(userId, [])
        if(!this.following.has(userId)) this.following.set(userId, new Set())
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this._ensure(userId);
        this.tweets.get(userId).push([this.time++, tweetId])
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        this._ensure(userId);

        const sources = new Set(this.following.get(userId));
        sources.add(userId)

        const heap = new MaxHeap()

        for(const uid of sources){
            const list = this.tweets.get(uid);
            if(list && list.length){
                const idx = list.length - 1
                heap.push([list[idx][0], list[idx][1], uid, idx])
            }
        }

        const feed = [];
        while (feed.length < 10 && heap.size() > 0) {
            const [time, tweetId, uid, idx] = heap.pop();
            feed.push(tweetId);
            if (idx > 0) {                       // push this source's next-older tweet
                const list = this.tweets.get(uid);
                heap.push([list[idx-1][0], list[idx-1][1], uid, idx-1]);
            }
        }
        return feed;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        this._ensure(followerId)
        this.following.get(followerId).add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        this._ensure(followerId)
        this.following.get(followerId).delete(followeeId)
    }
}
