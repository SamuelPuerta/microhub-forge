import { Search, Package, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="gradient-text">MicroHub</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Explore
              </a>
              <a href="/categories" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </a>
              <a href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <LayoutDashboard className="w-5 h-5" />
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
