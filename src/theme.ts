import type { ThemeConfig } from "./types";

export const theme = {
  "id": "recovery",
  "product": "Recovery Margin",
  "tagline": "Plan low-friction recovery habits around energy and consistency.",
  "itemLabel": "Recovery practice",
  "dateLabel": "Planned date",
  "effortLabel": "Minutes",
  "impactLabel": "Expected benefit",
  "categories": [
    "Mobility",
    "Sleep",
    "Nutrition",
    "Reflection",
    "Outdoors"
  ],
  "seeds": [
    [
      "Evening mobility set",
      "Mobility",
      15,
      4
    ],
    [
      "Prepare tomorrow's breakfast",
      "Nutrition",
      20,
      3
    ],
    [
      "Take a quiet outdoor walk",
      "Outdoors",
      30,
      5
    ]
  ]
} as const satisfies ThemeConfig;
