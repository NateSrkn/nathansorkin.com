interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export interface ProjectDocument extends SanityDocument {
  content: Array<RichTextBlock>;
  title: string;
  slug: { current: string; _type: "slug" };
  color: SanityColor;
  type: string;
}

type SanityColor = {
  _type: "color";
  hex: string;
  alpha: number;
  hsl: {
    _type: "hsl";
    h: number;
    s: number;
    l: number;
    a: number;
  };
  hsv: {
    _type: "hsv";
    a: number;
    h: number;
    s: number;
    v: number;
  };
  rgb: {
    _type: "rgb";
    r: number;
    g: number;
    b: number;
    a: number;
  };
};

export interface ExperienceDocument extends SanityDocument {
  organization: string;
  job_title: string;
  href: string;
  color: SanityColor;
  order: number;
}

export interface AboutDocument extends SanityDocument {
  content: Array<RichTextBlock>;
  author: string;
}

export interface GeneralDocument extends SanityDocument {
  content: Array<RichTextBlock>;
}

type RichTextBlock = {
  _type: string;
  _key: string;
  style: string;
  children: Array<RichTextBlock | TextBlock>;
  markDefs: Array<MarkDef>;
};

type TextBlock = {
  _type: string;
  _key: string;
  text: string;
  marks: Array<Mark>;
};

type MarkDef = {};
type Mark = {};
