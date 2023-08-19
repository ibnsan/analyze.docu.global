import Footer from "./Footer"
import Header from "./Header"
import React from 'react';

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
              <main>{children}</main>
            <Footer />
        </>
    )
}

export default DefaultLayout