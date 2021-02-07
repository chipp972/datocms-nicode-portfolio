export enum ContactType {
  Email = 'Email',
  LinkedIn = 'LinkedIn',
  Phone = 'Phone'
}

export type ContactMethod = {
  id: string;
  contactType: ContactType;
  position: number;
  label: string;
  detailsNode: MarkdownField;
  url: string;
};

export type ContactSectionQuery = {
  contact: {
    id: string;
    sectionLabel: string;
    descriptionNode: MarkdownField;
    rdvDescriptionNode: MarkdownField;
    calendlyUrl: string;
    fallbackText: string;
  };
  contactMethods: {
    edges: { node: ContactMethod }[];
  };
};
