import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { BreadcrumbItem } from '@/types';
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/next";

export default function AppLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs}>
            <Analytics />
            <Toaster position="top-right" />
            {children}
        </AppLayoutTemplate>
    );
}
