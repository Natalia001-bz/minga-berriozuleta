import { createBrowserRouter } from "react-router-dom";
import Index from "./Index";
import SignIn from "./SignIn";
import Main from "../layouts/Main"
import ChapterForm from "./ChapterForm";
import Register from "./Register";
import MangaForm from "./MangaForm";


const router=createBrowserRouter ([
{path: '/', 
element: <Main/>,
children: [
    {path: '/', element: <Index/>},
    {path: '/index',element: <Index/>},
    {path: '/home',element: <Index/>},
    {path: '/signin',element: <SignIn/>},
    {path: '/register',element: <Register/>},
    {path: '/manga',element: <MangaForm/>},
    // {path: '/manga/:manga_id',element: <Index/>},
    {path: 'manga/:manga_id/chapter-form', element: <ChapterForm/>},

    // {path: '/manga_id/chapter-form', element: <ChapterForm/>},
    {path: '/manga/:ch_id/:author_id',element: <Index/>},
    // {path: '/manga/:author_id',element: <Index/>}
]}


])
export default router