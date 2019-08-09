export const blogDataFromRawMds = (rawMds) => {
    const posts = rawMds
        .map(post => JSON.parse(post))
        .sort((a,b) => new Date(a.date) >= new Date(b.date) ? -1 : 1 )

    const unique_tags = []
        .concat(...posts.map(p=>p.tags)) //collect tags from all posts into one list
        .sort() //sort and collect tag info in list of objects
        .reduce((acc, cur)=> {
            let existing = acc.find(el=>el.name === cur)
            if(existing !== undefined) {
                existing.count++
            } else {
                acc.push({ name: cur, isSelected: false, count: 1})
            }
            return acc
        }, [])

    return { allposts: posts, tags: unique_tags, selposts: []}
}

export const filterPostsWithTags = (posts, tags) => posts
    .filter(p=>p.tags.some(el => tags.includes(el)))
    .sort((a,b) => new Date(a.date) >= new Date(b.date) ? -1 : 1 )