type DropdownProps = {
    name: string;
    id: string;
    data: Data[];
}

type Data = {
    value: string;
    label: string;
}

export type { DropdownProps, Data };