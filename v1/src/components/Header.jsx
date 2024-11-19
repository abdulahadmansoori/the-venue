// // app/components/Header.js
// import Link from 'next/link';
// import styles from './Header.module.css';
// import MyLogo from '../../public/next.svg';
// import Logout from './Logout';
// import { auth } from '@/auth';

// const navLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/about', label: 'About' },
//   { href: '/contact', label: 'Contact' },
//   { href: '/dashboard', label: 'Dashboard' },
// ];

// const Header = async () => {
//   const session = await auth();


//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Link href="/">
//           <img src={MyLogo} alt="Logo" className={styles.logoImage} />
//           {/* <h3>MyLogo</h3> */}
//         </Link>
//       </div>
//       <nav className={styles.nav}>
//         <ul className={styles.navList}>
//           {navLinks.map((link) => (
//             <li key={link.href} className={styles.navItem}>
//               <Link href={link.href} className={styles.navLink}>
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       {!session?.user ?
//         <div className={styles.signIn}>
//           <Link href="/sign-in" className={styles.navLink}>
//             Sign In
//           </Link>
//         </div> : <div className={styles.signIn}>
//           <Logout />
//         </div>
//       }
//     </header>
//   );
// };

// export default Header;


// app/components/Header.js
// "use client";
// import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import MyLogo from '../../public/next.svg';
import Logout from './Logout';
import { auth } from '@/auth';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/dashboard', label: 'Dashboard' },
];

const Header = () => {
  // const [session, setSession] = useState(null);

  // useEffect(() => {
  //   const fetchSession = async () => {
  //     const sessionData = await auth();
  //     setSession(sessionData);
  //   };
  //   fetchSession();
  // }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <img src={MyLogo} alt="Logo" className={styles.logoImage} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.href} className={styles.navItem}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.signIn}>
        {/* {!session?.user && ( */}
          <Link href="/sign-in" className={styles.navLink}>
            Sign In
          </Link>
        {/* )} */}
      </div>
    </header>
  );
};

export default Header;
