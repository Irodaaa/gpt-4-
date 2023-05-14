import React from 'react';
import {IoLogoBuffer} from 'react-icons/io'

const Header = () => {
    return (
        <section>
            <div className='w-full'>
                    <h1 className='flex flex-col justify-start items-start text-3xl py-5'>Logo</h1>
                    <IoLogoBuffer className='h-10 w-10' />
            </div>
        </section>
    );
};

export default Header;