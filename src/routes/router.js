import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage.jsx";
import GetAllData from "../components/videos/GetAllData";
import GetDataByUserId from "../components/videos/GetDataByUserId";
import NewPostForm from "../components/forms/NewPostForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <GetAllData />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/data",
    element: (
      <>
        <GetDataByUserId /> <NewPostForm />
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;
