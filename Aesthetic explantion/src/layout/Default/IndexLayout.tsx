import Head from "next/head"
import styles from './index.module.css'
import { ReactNode } from "react";

export interface IDefaultLayoutProps {
    title?: string;
    footerChildren?: ReactNode;
    headerChildren?: ReactNode;
    children?: ReactNode;
}

const DefaultLayout = (props: IDefaultLayoutProps) => {
    const { title, footerChildren, children, headerChildren } = props;
    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="美学评分" />
        </Head>
        <section className={styles.layoutPage}>
            {
                headerChildren && <header className={styles.layoutHeader}>
                    {headerChildren}
                </header>
            }
            {
                children && <section className={styles.layoutContent}>{children}</section>
            }

            {
                footerChildren && <footer className={styles.layoutFooter}>
                    {footerChildren}
                </footer>
            }
        </section>
    </>
}

export default DefaultLayout;