import Icon from "@/components/ui/icon";
import { NAV_ITEMS } from "./data";

interface NavbarProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

export default function Navbar({ activeSection, mobileMenuOpen, setMobileMenuOpen, scrollTo }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-lg font-black shadow-md eco-gradient">Э</div>
            <span className="font-black text-xl" style={{ fontFamily: "Montserrat, sans-serif", color: "var(--eco-dark)" }}>
              Эко<span style={{ color: "var(--eco-green)" }}>Жизнь</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link text-sm font-medium transition-colors ${activeSection === item.id ? "active text-green-700" : "text-gray-600 hover:text-green-700"}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("community")}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all hover:scale-105 eco-gradient"
            >
              <Icon name="Sprout" size={16} />
              Вступить
            </button>
            <button className="md:hidden p-2 rounded-lg hover:bg-green-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-green-100 px-4 py-3 flex flex-col gap-2 animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left py-2 px-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
