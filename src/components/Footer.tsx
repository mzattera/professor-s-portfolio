import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-foreground">
              Dr. Eleanor Mitchell
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Professor of Computer Science, specializing in NLP and Human-AI Collaboration
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-foreground text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:eleanor.mitchell@stanford.edu" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
              >
                <Mail size={16} />
                eleanor.mitchell@stanford.edu
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  Gates Building, Room 358<br />
                  Stanford University
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Dr. Eleanor Mitchell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
