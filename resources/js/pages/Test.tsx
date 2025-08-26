import React from 'react'
import Home from '.'
import Layout from '@/components/layout/Layout'

const Test = () => {
    return (
        <Layout
            title='Test'
            children={<h1>Hi</h1>}
            />
            // <h1>Welcome</h1>
            // <p>Hello , welcome to your first Inertia app!</p>
    )
}

export default Test
