import s from './style.module.css';


const Layout = ({id, urlBg, colorBg, title, children}) => {
    const styleRoot = colorBg ? { background: `${colorBg }` } :
        { backgroundImage: `url(${urlBg})` };
    return (
        <section className={s.root} id={id} style={styleRoot}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>
                            {title}
                        </h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc +''+ s.full}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
