import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'react-hot-toast';

import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { BreadcrumbItem } from '@/types';

export default function AppLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs}>
            <Toaster position="top-right" />
            {children}
            <Analytics />
        </AppLayoutTemplate>
    );
}
