import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relative mt-12 flex flex-wrap justify-center items-center">
      {" "}
      <p className="text-sm font-medium">
        {" "}
        &copy; {new Date().getFullYear()} Abdul Basit. All rights reserved.
      </p>
    </footer>
  );
};
