export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-8 mt-auto">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-text-secondary text-sm">
            © 2026 LINE Corporation. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
              #help_drs
            </a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
              문의하기
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
