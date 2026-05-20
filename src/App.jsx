import { lazy, Suspense } from "react";
import "./App.css";
import "./styles/anniversary.css";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAnniversary } from "./Context/AnniversaryContext";
import Loading from "./componets/Loading/Loading";
import AnniversaryNavbar from "./componets/Header/AnniversaryNavbar";
import MusicPlayer from "./componets/Anniversary/MusicPlayer";
import PasswordGate from "./Pages/PasswordGate";

const Home = lazy(() => import("./Pages/Home"));
const Journey = lazy(() => import("./Pages/Journey"));
const LoveLetters = lazy(() => import("./Pages/LoveLetters"));
const FutureTogether = lazy(() => import("./Pages/FutureTogether"));
const Finale = lazy(() => import("./Pages/Finale"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));

function App() {
  const { isUnlocked } = useAnniversary();

  if (!isUnlocked) {
    return <PasswordGate />;
  }

  return (
    <div>
      <AnniversaryNavbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/letters" element={<LoveLetters />} />
          <Route path="/future" element={<FutureTogether />} />
          <Route path="/finale" element={<Finale />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <MusicPlayer />
    </div>
  );
}

export default App;
