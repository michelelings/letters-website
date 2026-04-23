import type { ReactNode } from "react";

export type GuideListItem = {
  href: string;
  title: ReactNode;
  blurb: string;
};

export type GuideBlock = {
  sectionIntro?: string;
  items: GuideListItem[];
};

export type GuideLangColumn = {
  dataGuideLang: string;
  dataOrder: string;
  headingId: string;
  title: string;
  blocks: GuideBlock[];
};

export type GuidesIndexData = {
  h1: string;
  lead: string;
  focusHint: ReactNode;
  focusBar: {
    label: string;
    defaultOptionLabel: string;
    options: { value: string; label: string }[];
  };
  general: {
    headingId: string;
    title: string;
    intro: string;
    items: GuideListItem[];
  };
  langColumns: GuideLangColumn[];
};
