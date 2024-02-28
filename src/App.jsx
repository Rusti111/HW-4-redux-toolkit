import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Main, PostDetails, Users } from "./pages";
import Header from './Components/Header.jsx/Header';

const App = () => {
  const Post = lazy(() => import("./pages/Post/Post"));
  return (
    <Router>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<Users />} />
          <Route
            path="/posts"
            element={
              <Suspense
                fallback={
                  <div>
                    {" "}
                    <h1>Loading ... </h1>
                  </div>
                }
              >
                <Post />
              </Suspense>
            }
          />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Route>
      </Routes>
    </Router>

    
  )
}

export default App;