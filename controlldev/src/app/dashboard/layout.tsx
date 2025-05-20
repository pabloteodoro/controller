import { DashboardHeader } from './components/header/index';


export default function DashboardLayout({ children }: {children: React.ReactNode}) {
    return (
        <>
        <DashboardHeader/>
        {children}
        </>
    )
}