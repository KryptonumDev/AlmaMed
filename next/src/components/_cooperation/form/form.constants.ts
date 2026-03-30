export type CooperationFormInputs = {
  name: string;
  email: string;
  phone: string;
  theme: string;
  message: string;
  agreement: boolean;
  targetEmail: string;
};

export interface CooperationFormProps {
  subjects: string[];
  targetEmail: string;
}

export interface CooperationSectionProps {
  title?: string;
  text?: string;
  image?: any;
  subjects: string[];
  targetEmail: string;
}

export const regex = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?\d{1,5}[ -]?\d{1,5}[ -]?\d{1,6})$/,
};
