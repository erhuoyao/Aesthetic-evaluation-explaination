import Image from 'next/image'
import styles from './login/login.module.css'
import { NextPage } from 'next';
import Login from '@/pages/login'
// 动态导入 MyComponent，设置 ssr 为 false 以在客户端渲染
// const Login = dynamic(() => import('../pages/login/index'), { ssr: false });

export const Homes: NextPage = () =>  {
  return (
    <Login />
  )
}

export default Homes;
