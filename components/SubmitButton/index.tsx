import { Button } from "@moai/core";

type Props = {
    children: React.ReactNode;
}

export default function SubmitButton({ children }: Props) {
    return (
        <Button
            type="submit"
            fill={true}
            highlight
        >
            {children}
        </Button>
    )
}
