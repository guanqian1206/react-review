import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './FilterMeals.module.css';


// 文件类型	导入方式	作用域	适用场景
// *.module.css	import classes from '...'	局部作用域	组件私有样式
// *.css	import '...'	全局作用域	公共样式、第三方库覆盖

const FilterMeals = (props) => {
 
    const [keyWord,setKeyWord] = useState('')
   
    const inputChangeHandler = e =>{
        setKeyWord(e.target.value.trim());
        // props.onFilter(keyWord)
        console.log('keyWord~~',keyWord);
    }
    return (
    <div className={classes.searchBox}>
     
            <div className={classes.searchLine}>
                <input  value={keyWord}
                onChange={inputChangeHandler}
                className={classes.inputClass}  type="text" placeholder='请输入关键字' />
                <FontAwesomeIcon className={classes.serchIcon}  icon={faSearch} />
            </div>

        </div>
    )
}
export default FilterMeals;