import React, {useState, useEffect} from "react";
import './styles.less';
import CategoryService from "../../services/CategoryService";
import {Link} from "react-router-dom";
import {iconCatalogue} from "../Header/img";

import {Menu} from 'antd';
const {SubMenu} = Menu;

const Catalogue = () => {

    // const [allCat, setAllCat] = useState([]);
    const [lvl1, setLvl1] = useState([]);
    const [lvl2, setLvl2] = useState([]);
    const [lvl3, setLvl3] = useState([]);

    // const [mode, setMode] = React.useState('vertical');
    // const changeMode = value => {
    //     setMode(value ? 'inline' : 'vertical');
    // };

    useEffect(() => {
        CategoryService.getCategoriesSortedPerLevels()
            .then(result => {
                console.log('categories ---> ', result);
                // setAllCat(result);
                setLvl1(result[1]);
                setLvl2(result[2]);
                setLvl3(result[3]);
            })
            .catch(err => {
                console.log('error ---> ', err)
            })
    }, [])

    const handleCategoryClick = ({key}) => {
        console.log('click', key);
    }

    const allCategories = lvl1.map(categoryLvl1 => {
        return (
            <SubMenu key={categoryLvl1.id} title={categoryLvl1.name}
                     className='catalogue-item' onTitleClick={handleCategoryClick}>
                {lvl2
                    .filter(cat => cat.parentId === categoryLvl1.id)
                    .map(categoryLvl2 => {
                        return (
                            <SubMenu key={categoryLvl2.id} title={categoryLvl2.name}
                                     className='catalogue-item'>
                                {lvl3
                                    .filter(cat => cat.parentId === categoryLvl2.id)
                                    .map(categoryLvl3 => {
                                        return (
                                            <Menu.Item key={categoryLvl3.id}
                                                       className='catalogue-menu-item'>
                                                <Link to='/shop'>
                                                    {categoryLvl3.name} (link to '/shop')
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })}
                            </SubMenu>
                        )
                    })}
            </SubMenu>
        )
    })

    return (
        <div className="catalogue-btn">
            <Menu mode={'vertical'} onClick={handleCategoryClick}>
                <SubMenu key="SubMenu" title="Catalogue" className='catalogue-title'
                         icon={<img className="catalogue-img" src={iconCatalogue} alt="icon"/>}
                >
                    {allCategories}
                </SubMenu>

            </Menu>
        </div>
    )
}


export default Catalogue