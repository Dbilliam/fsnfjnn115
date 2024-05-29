import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className="flex-center wrapper flex-between flex flex-col gp-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
          src="/assets/images/Axom_Whisper_Xperience-logo.png"
          alt='logo'
          width={128}
          height={38}/>
        </Link>
        <p>2023 Axom Whisper Xperience. All Rights reserved </p>
      </div>
    </footer>
  )
}

export default Footer