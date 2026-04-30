import * as React from "react";

import { cn } from "@/lib/utils";

// A very small, un-opinionated Button component used across the app.
// Keeps the API simple so existing usages like <Button className="..."> work.
const Button = React.forwardRef(function Button(
  { className, children, ...props },
  ref
) {
  return (
    <button ref={ref} className={cn(className)} {...props}>
      {children}
    </button>
  );
});

export { Button };

