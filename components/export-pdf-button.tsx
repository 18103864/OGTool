"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function ExportPdfButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      className="print:hidden"
      onClick={() => window.print()}
    >
      <Download className="mr-1.5 size-4" />
      Export PDF
    </Button>
  );
}
