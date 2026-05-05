import type { ComponentType } from "react";
import type { TOCSection } from "@/components/blog/BlogTOC";
import TrueCostBody, { sections as trueCostSections } from "./true-cost-bakery-equipment";
import BuyNewBody, { sections as buyNewSections } from "./buy-new-vs-refurbish";
import CapacityBody, { sections as capacitySections } from "./capacity-planning-bakery-equipment";
import SteelBody, { sections as steelSections } from "./steel-vs-stainless-steel-bakery";
import FinishesBody, { sections as finishesSections } from "./galvanized-glass-bead-electro-polished-finishes";
import HiddenCostBody, { sections as hiddenCostSections } from "./hidden-cost-wrong-finish";
import BisscBody, { sections as bisscSections } from "./bissc-certification-explained";
import FdaUsdaBody, { sections as fdaUsdaSections } from "./fda-usda-bakery-compliance-cheat-sheet";
import SanitationBody, { sections as sanitationSections } from "./sanitation-design-101";
import AllergenBody, { sections as allergenSections } from "./allergen-cross-contact-equipment";

export interface BlogContent {
  Body: ComponentType;
  sections: TOCSection[];
}

export const blogContentMap: Record<string, BlogContent> = {
  "true-cost-bakery-equipment": {
    Body: TrueCostBody,
    sections: trueCostSections,
  },
  "buy-new-vs-refurbish": {
    Body: BuyNewBody,
    sections: buyNewSections,
  },
  "capacity-planning-bakery-equipment": {
    Body: CapacityBody,
    sections: capacitySections,
  },
  "steel-vs-stainless-steel-bakery": {
    Body: SteelBody,
    sections: steelSections,
  },
  "galvanized-glass-bead-electro-polished-finishes": {
    Body: FinishesBody,
    sections: finishesSections,
  },
  "hidden-cost-wrong-finish": {
    Body: HiddenCostBody,
    sections: hiddenCostSections,
  },
  "bissc-certification-explained": {
    Body: BisscBody,
    sections: bisscSections,
  },
  "fda-usda-bakery-compliance-cheat-sheet": {
    Body: FdaUsdaBody,
    sections: fdaUsdaSections,
  },
  "sanitation-design-101": {
    Body: SanitationBody,
    sections: sanitationSections,
  },
  "allergen-cross-contact-equipment": {
    Body: AllergenBody,
    sections: allergenSections,
  },
};
