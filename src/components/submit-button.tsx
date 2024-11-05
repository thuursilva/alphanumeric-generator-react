import React from "react";

type SubmitButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function SubmitButton({ onClick }: SubmitButtonProps) {
    return (
        <button type="button" onClick={onClick}>
            Generate
        </button>
    )
}

export default SubmitButton