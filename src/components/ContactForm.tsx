
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <Button
      variant="link"
      className="text-gray-600 hover:text-book-red transition-colors"
      onClick={() => window.location.href = "mailto:contact@oomiyasa.com"}
    >
      Contact
    </Button>
  );
}
