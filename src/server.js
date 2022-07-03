import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import viewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
import checkConnectDatabase from './config/connectDatabase'
import initAuthenticationRoutes from './routes/authentication';
import initAPIPagesRoutes from './routes/apiPages';
import initAPIPostsRoutes from './routes/apiPosts';
import initRefreshTokenRoutes from './routes/refreshToken';
import initAPIPhotosRoutes from './routes/apiPhotos';
import initAPIMusicsRoutes from './routes/apiMusics';
import initAPICommentsRoutes from './routes/apiComments';
import initAPIRepliesRoutes from './routes/apiReplies';
import initAPILikesRoutes from './routes/apiLikes';
import initAPIFriendsRoutes from './routes/apiFriends';
import initAPIUsersRoutes from './routes/apiUsers';

const app = express()
let port = process.env.PORT || 3000;

 // Enable All CORS Requests
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Check connect with database
checkConnectDatabase();

// Set up view engine
viewEngine(app);

// Init web route
initWebRoutes(app)

// Init refreshToken route
initRefreshTokenRoutes(app)

// Init authentication
initAuthenticationRoutes(app)

// Init APIPages route
initAPIPagesRoutes(app)

// Init APIPosts route
initAPIPostsRoutes(app)

// Init APIPhotos route
initAPIPhotosRoutes(app)

// Init APIMusics route
initAPIMusicsRoutes(app)

// Init APIComments route
initAPICommentsRoutes(app)

// Init APIReplies route
initAPIRepliesRoutes(app)

// Init APILikes route
initAPILikesRoutes(app)

// Init APIFriends route
initAPIFriendsRoutes(app)

// Init APIUsers route
initAPIUsersRoutes(app)

app.listen(port, () => {
  console.log(`Backend Yahoo360 is running on port ${port}`)
})