import style from './style.module.css'

const Layout = (props) => {

    return (
        <section className={style.root} id={props.id}
                 style={ props.colorBg ? {background:props.colorBg} : {background:`url(${props.urlBg})`}}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3> {props.title} </h3>
                        <span className={style.separator}></span>
                    </div>
                    <div className={`${style.desc} ${style.full}`}>
                        <p> {props.desc} </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout