export interface IContactFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    name: string;
    setName: (name: string) => void;
    phone: string;
    setPhone: (phone: string) => void;
    email: string;
    setEmail: (email: string) => void;
}