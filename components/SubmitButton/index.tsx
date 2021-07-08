import { Button } from "@moai/core";

type Props = {
    children: React.ReactNode;
    busy: boolean;
}

export default function SubmitButton({ children, busy }: Props) {
    return (
        <Button
            type="submit"
            fill={true}
            busy={busy}
            highlight
        >
            {children}
        </Button>
    )
}
