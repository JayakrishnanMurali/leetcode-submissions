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

        const candidates = [];
        for(const uid of sources){
            const list = this.tweets.get(uid);
            for(let i=Math.max(0, list.length - 10); i <list.length; i++){
                candidates.push(list[i])
            }
        }

        candidates.sort((a,b) => b[0] - a[0])

        return candidates.slice(0,10).map(t => t[1])
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
