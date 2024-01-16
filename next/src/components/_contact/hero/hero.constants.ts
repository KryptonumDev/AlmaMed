export interface Props {
  title: string;
  text: string;
  formSubjects: string[];
  localizations: Array<{
    name: string;
  }>;
}

export type Inputs = {
  office: string;
  name: string;
  email: string;
  phone: string;
  theme: string;
  message: string;
  agreement: boolean;
};

export const regex = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?\d{1,5}[ -]?\d{1,5}[ -]?\d{1,6})$/,
}