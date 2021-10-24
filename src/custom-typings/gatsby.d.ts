declare type PageData<FrontMatter = any, Node = any> = {
  allMarkdownRemark?: {
    edges: { node: Node }[];
  };
  markdownRemark: {
    html?: string;
    frontmatter: {
      title: string;
      subtitle?: string;
      image?: any;
    } & FrontMatter;
  };
};

declare type PageProps<FrontMatter = any, Node = any> = {
  location: {
    pathname: string;
  };
  data: PageData<FrontMatter, Node>;
};

declare type MarkdownField = {
  childMarkdownRemark: {
    html: string;
  };
};
