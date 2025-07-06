import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/shared/ui/table";
import { FC } from "react";

type TableData = {
    login: string,
    role: string
}

type Props = {
    data: TableData[]
}

export const UserData: FC<Props> = ({ data }) => {
    return (
        <Table>
            <TableCaption >Личная информация</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Логин</TableHead>
                    <TableHead>Права</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data.map((item, key) => {
                        return (
                            <TableRow key={key}>
                                <TableCell>{item.login}</TableCell>
                                <TableCell>{item.role}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}