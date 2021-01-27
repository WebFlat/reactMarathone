import s from './style.module.css';


const Layout = (props) => {
    // console.log(props);
    const styleRoot = props.colorBg ? { background: '#e6dbdb' } :
        { backgroundImage: `url(${props.urlBg})` };
    return (
        <section className={s.root} id={props.id} style={styleRoot}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>
                            {props.title}
                        </h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc +''+ s.full}>
                        <p>
                            {props.descr}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
