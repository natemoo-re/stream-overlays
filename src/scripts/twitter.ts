let profileImageCache = new Map<string, string>();
export async function getProfileImage(username: string) {
    if (profileImageCache.has(username)) return profileImageCache.get(username);
    const { profile_image_url_https } = await fetch(`https://api.twitter.com/1.1/users/show.json?screen_name=${username}`, {
        headers: [
            ['Authorization', `Bearer ${import.meta.env.TWITTER_BEARER_TOKEN}`]
        ]
    }).then(res => res.json())
    profileImageCache.set(username, profile_image_url_https);
    return profile_image_url_https;
}
