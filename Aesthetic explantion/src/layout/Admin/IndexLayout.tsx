import { ReactNode } from "react"
import styles from './index.module.css';
import '@/app/globals.css';
import Link from "next/link";
import { useRouter } from "next/router";

export interface AdminLayoutProps {
    children?: ReactNode;
    actvie?: '1' | '2';
}

const AdminLayout = (props: AdminLayoutProps) => {
    const { children, actvie = '2' } = props;
    const router = useRouter();
    return (
        <div className={styles.adminLayout}>
            <header>
                <div>
                    <h1>AIGC管理系统</h1>
                    <ul>
                        <li className={`${actvie === '1' ? `${styles.isActive}` : ''}`}>
                            <Link href="/admin/createUser">创建账户</Link>
                        </li>
                        <li className={`${actvie === '2' ? `${styles.isActive}` : ''}`}>
                            <Link href="/admin/checkUser">查看用户</Link>
                        </li>
                        <li onClick={() => {
                            localStorage.removeItem('admin');
                            router.replace('/admin/login');
                        }}>
                            退出
                        </li>
                    </ul>
                </div>
            </header>
            <div className={styles.adminContent}>
                {children}
            </div>
        </div>
    )
}

export default AdminLayout;