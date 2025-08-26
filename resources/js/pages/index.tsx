import { Head } from '@inertiajs/react'
import Layout from '@/components/layout/Layout'

export default function Home() {
    return (
        <Layout
            title='Home'
            username='Ubaid'
        >
            <h1>Welcome</h1>
            <p>Hello , welcome to your first Inertia app!</p>
        </Layout>
    )
}