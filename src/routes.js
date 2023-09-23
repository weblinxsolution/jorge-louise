import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { MarketStats } from "./components/pages/MarketStats/MarketStats";
import { About } from "./components/pages/About/About";
import { Collector } from "./components/pages/Collector/Collector";
import { Ku } from "./components/pages/Ku/Ku";
import { Backpack } from "./components/pages/Backpack/Backpack";
import { Items } from "./components/pages/Items/Items";
import { Kore } from "./components/pages/Kore/Kore";
import { Verse } from "./components/pages/Verse/Verse";
import { Hatch } from "./components/pages/Hatch/Hatch";
import { MarketPlace } from "./components/pages/MarketPlace/MarketPlace";
import { Profile } from "./components/pages/Profile/Profile";

function MyRoutes(props) {
    return (
        <Routes>
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home {...props} />} />
            <Route path="/marketstats" element={<MarketStats />} />
            <Route path="/about" element={<About />} />
            <Route path="/collector" element={<Collector {...props} />} />
            <Route path="/ku" element={<Ku {...props} />} />
            <Route path="/backpack" element={<Backpack {...props} />} />
            <Route path="/items" element={<Items {...props} />} />
            <Route path="/kore" element={<Kore {...props} />} />
            <Route path="/verse" element={<Verse />} />
            <Route path="/hatch" element={<Hatch {...props} />} />
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/profile" element={<Profile {...props} />} />
        </Routes>
    )
}

export default MyRoutes;