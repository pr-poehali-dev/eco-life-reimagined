import { useState } from "react";
import Navbar from "@/components/eco/Navbar";
import HeroIdeasTips from "@/components/eco/HeroIdeasTips";
import GallerySection from "@/components/eco/GallerySection";
import CommunitySections from "@/components/eco/CommunitySections";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [materialFilter, setMaterialFilter] = useState("все");
  const [difficultyFilter, setDifficultyFilter] = useState("любая");
  const [typeFilter, setTypeFilter] = useState("все");
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLike = (id: number) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--eco-cream)", fontFamily: "'Golos Text', sans-serif" }}>
      <Navbar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollTo={scrollTo}
      />
      <HeroIdeasTips scrollTo={scrollTo} />
      <GallerySection
        materialFilter={materialFilter}
        setMaterialFilter={setMaterialFilter}
        difficultyFilter={difficultyFilter}
        setDifficultyFilter={setDifficultyFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        likedItems={likedItems}
        toggleLike={toggleLike}
      />
      <CommunitySections
        contactForm={contactForm}
        setContactForm={setContactForm}
        scrollTo={scrollTo}
      />
    </div>
  );
}
