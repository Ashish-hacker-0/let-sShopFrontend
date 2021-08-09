import Link from 'next/link';
import classes from './Category.module.css';
const Category = () =>{
    return(
        <div className={classes.category}>
            <div className={classes.images}>
                <Link href="/products/Mens">
                <div>

                </div>
                </Link>
                <Link href="/products/Women">
                <div>

                </div>
                </Link>
                <Link href="/products/Kids">
                <div>

                </div>
                </Link>
            </div>
            <div className={classes.titles}>
                <div>
                  MEN
                </div>
                <div>
                    WOMEN
                </div>
                <div>
                    KIDS
                </div>
            </div>
        </div>
    )
}

export default Category;