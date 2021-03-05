import styles from './Search.module.css'

const SearchBr = ({...rest}) => {
    return (
        <div className={styles.coin_search}>
            <input className={styles.coin_input} {...rest} />
        </div>
    )
}

export default SearchBr
