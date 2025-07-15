import { getProducts } from "@/shared/api";
import { Main } from "@/views/SidebarWIthRackets";
import { Metadata } from "next";
import { FC } from "react";
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: "Tennis store",
    description: "данный сайт поможет найти свою ракетку и не только"
}

const Page: FC = async () => {
    const { data: initialData } = await getProducts({ page: 1, limit: 5 });

    if (!initialData) {
        return notFound();
    }

    return (
        <Main initialData={initialData} />
    )
}

export default Page;

