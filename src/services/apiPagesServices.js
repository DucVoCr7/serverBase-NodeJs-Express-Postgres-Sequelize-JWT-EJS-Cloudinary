import db from '../models/index'

const getNewPosts = async () => {
    try {
        const newPosts = await db.posts.findAll({
            limit: 10,
            order: [
                ['id', 'DESC']
            ],
            include: [{ model: db.users, attributes: ['id', 'name', 'image'] }]
        })
        return newPosts
    } catch (error) { return (error) }
}

const getNewPostsCategory = async (category) => {
    try {
        const newPostsCategory = await db.posts.findAll({
            where: { category: category },
            limit: 5,
            order: [
                ['id', 'DESC']
            ],
            include: [{ model: db.users, attributes: ['id', 'name', 'image'] }]
        })
        return newPostsCategory
    } catch (error) { return (error) }
}
const postsGroupPage = async (category)=> {
    try {
        const dataPosts = await db.posts.findAll({
            where: {category: category},
            order: [
                ['id', 'DESC']
            ],
            include: [{ model: db.users, attributes: ['id', 'name', 'image'] }]
        })
        if (dataPosts.length === 0) {
            return {
                errCode: 400,
                errors: {
                    message: 'Page not found!'
                }
            }
        }
        return {
            dataPosts
        }
    } catch (error) { return (error) }
}
const homePage = async () => {
    try {
        // ['Life', 'Sport', 'Style', 'Tech', 'Music', 'Cinema', 'Travel', 'Food']
        const newPosts = await getNewPosts()
        const newPostsLife = await getNewPostsCategory('Life')
        const newPostsSport = await getNewPostsCategory('Sport')
        const newPostsStyle = await getNewPostsCategory('Style')
        const newPostsTech = await getNewPostsCategory('Tech')
        const newPostsMusic = await getNewPostsCategory('Music')
        const newPostsCinema = await getNewPostsCategory('Cinema')
        const newPostsTravel = await getNewPostsCategory('Travel')
        const newPostsFood = await getNewPostsCategory('Food')
        return {
            newPosts,
            newPostsLife,
            newPostsSport,
            newPostsStyle,
            newPostsTech,
            newPostsMusic,
            newPostsCinema,
            newPostsTravel,
            newPostsFood,
        }
    } catch (error) { return (error) }
}
const userPage = async (id) => {
    try {
        const dataUser = await db.users.findOne({
            where: { id: id },
            attributes: {
                exclude: ['password'] //Khong tra ra password
            },
            include: [
                {
                    model: db.posts,
                    include: [
                        {
                            model: db.likes,
                            include: [
                                {
                                    model: db.users,
                                    attributes: ['id', 'name', 'image']
                                }
                            ]
                        },
                        {
                            model: db.comments,
                            include: [
                                {
                                    model: db.users,
                                    attributes: ['id', 'name', 'image']
                                },
                                {
                                    model: db.replies,
                                    include: [
                                        {
                                            model: db.users,
                                            attributes: ['id', 'name', 'image']
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    model: db.photos
                },
                {
                    model: db.musics
                },
                {
                    model: db.friends,
                    as: 'friend',
                    where: { status: true },
                    required: false,
                    include: [
                        {
                            model: db.users,
                            as: 'dataFriend',
                            attributes: ['id', 'name', 'image']
                        }
                    ],
                },
            ],
            order: [
                [db.posts, db.comments, db.replies, 'id', 'DESC'],
                [db.posts, db.likes, 'id', 'DESC'],
                [db.photos, 'id', 'DESC'],
                [db.musics, 'id', 'DESC'],
                [{model: db.friends, as: 'friend'}, 'id', 'DESC'],

            ]
        })
        if (!dataUser) {
            return {
                errCode: 400,
                errors: {
                    message: 'User not found!'
                }
            }
        }
        return { dataUser }
    } catch (error) { return (error) }
}
const homeUserPage = async (id, userIdToken) => {
    try {
        if (id != userIdToken) {
            return {
                errCode: 403,
                errors: {
                    message: 'Token is not valid!'
                }
            }
        }
        const dataUser = await db.users.findOne({
            where: { id: id },
            attributes: {
                exclude: ['password'] //Khong tra ra password
            },
            include: [
                {
                    model: db.posts,
                    include: [
                        {
                            model: db.likes,
                            include: [
                                {
                                    model: db.users,
                                    attributes: ['id', 'name', 'image']
                                }
                            ]
                        },
                        {
                            model: db.comments,
                            include: [
                                {
                                    model: db.users,
                                    attributes: ['id', 'name', 'image']
                                },
                                {
                                    model: db.replies,
                                    include: [
                                        {
                                            model: db.users,
                                            attributes: ['id', 'name', 'image']
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    model: db.photos
                },
                {
                    model: db.musics
                },
                {
                    model: db.friends,
                    as: 'friend',
                    where: { status: true },
                    required: false,
                    include: [
                        {
                            model: db.users,
                            as: 'dataFriend',
                            attributes: ['id', 'name', 'image']
                        }
                    ],
                }, 
                {
                    model: db.friends,
                    as: 'friendRequest',
                    where: { status: false },
                    required: false,
                    include: [
                        {
                            model: db.users,
                            as: 'dataFriendRequest',
                            attributes: ['id', 'name', 'image']
                        }
                    ],
                }
            ],
            order: [
                [db.posts, db.comments, db.replies, 'id', 'DESC'],
                [db.posts, db.likes, 'id', 'DESC'],
                [db.photos, 'id', 'DESC'],
                [db.musics, 'id', 'DESC'],
                [{model: db.friends, as: 'friend'}, 'id', 'DESC'],
                [{model: db.friends, as: 'friendRequest'}, 'id', 'DESC']
            ]
        })
        if (!dataUser) {
            return {
                errCode: 400,
                errors: {
                    message: 'User not found!'
                }
            }
        }
        return { dataUser }
    } catch (error) { return (error) }
}
module.exports = {
    postsGroupPage: postsGroupPage,
    homePage: homePage,
    userPage: userPage,
    homeUserPage: homeUserPage
}