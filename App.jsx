import { Homepage, Errorpage } from "./components/componentExports";
import {
  GPT3App,
  MonsterApp,
  CrownApp,
  ZStoryApp,
  WildWavesApp,
} from "./Containers/ContainerExports.jsx";
import {
  Gpt3Article,
  AiDangerArticle,
  BreakingArticle,
  DataArticle,
  PointArticle,
  SignUpForm,
  SignInPage,
  ThankYouPage,
} from "../Portfolio/Containers/GPT3App/components/componentExports.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import "./App.Styles.scss";

const router = createBrowserRouter([
  {
    path: "/Portfolio",
    element: <Homepage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/GPT3App",
    element: <GPT3App />,
    errorElement: <Errorpage />,
  },
  {
    path: "/MonsterApp",
    element: <MonsterApp />,
    errorElement: <Errorpage />,
  },
  {
    path: "/CrownApp",
    element: <CrownApp />,
    errorElement: <Errorpage />,
  },
  {
    path: "/ZStoryApp",
    element: <ZStoryApp />,
    errorElement: <Errorpage />,
  },
  {
    path: "/WildWavesApp",
    element: <WildWavesApp />,
    errorElement: <Errorpage />,
  },
  {
    path: "/Gpt3Article",
    element: <Gpt3Article />,
    errorElement: <Errorpage />,
  },
  {
    path: "/AiDangerArticle",
    element: <AiDangerArticle />,
    errorElement: <Errorpage />,
  },
  {
    path: "/BreakingArticle",
    element: <BreakingArticle />,
    errorElement: <Errorpage />,
  },
  {
    path: "/DataArticle",
    element: <DataArticle />,
    errorElement: <Errorpage />,
  },
  {
    path: "/PointArticle",
    element: <PointArticle />,
    errorElement: <Errorpage />,
  },
  {
    path: "/SignUpForm",
    element: <SignUpForm />,
    errorElement: <Errorpage />,
  },
  {
    path: "/SignInPage",
    element: <SignInPage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/ThankYouPage",
    element: <ThankYouPage />,
    errorElement: <Errorpage />,
  },
]);

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
