import style from './style.module.css'

const Layout = ({id, title, urlBg, colorBg, children}) => {

    let layoutStyle;

    if (urlBg) layoutStyle = {background:`url(${urlBg})`}
    if (colorBg) layoutStyle = {background:colorBg}

    return (
        <section className={style.root} id={id}
                 style={ layoutStyle }>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3> {title} </h3>
                        <span className={style.separator}></span>
                    </div>
                    <div className={`${style.desc} ${style.full}`}>
                         {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout