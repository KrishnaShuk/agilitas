// src/app/page.tsx

// UPDATE THIS IMPORT
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-white">
      {/* UPDATE THIS COMPONENT */}
      <Navbar />
      
      {/* The rest of our page will go here */}
    </main>
  );
}