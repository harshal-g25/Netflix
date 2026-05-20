import React from "react";
import AnniversaryBanner from "../componets/Anniversary/AnniversaryBanner";
import MemoryRowPost from "../componets/Anniversary/MemoryRowPost";
import Footer from "../componets/Footer/Footer";
import { memorySections } from "../Constants/anniversaryData";

function Home() {
  return (
    <div>
      <AnniversaryBanner />
      <div className="w-[99%] ml-1">
        {memorySections.map((section) => (
          <MemoryRowPost
            key={section.key}
            title={section.title}
            items={section.items}
            first={section.first}
            islarge={section.islarge}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
