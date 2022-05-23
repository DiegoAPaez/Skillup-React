function Footer () {
    return (
        <footer className="bg-slate-100 w-11/12 flex flex-wrap justify-between mx-auto p-2 rounded absolute inset-x-0 bottom-0">
            <nav>
                <ul>
                    <li>
                        <a href="http://instagram.com" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
            <p className="text-xs italic">Copyright Alkemy Challenge</p>
        </footer>
    )
}
export default Footer