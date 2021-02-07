import React, {useState, useEffect} from "react";
import './styles.less';
import {Menu} from 'antd';
import CategoryService from "../../services/CategoryService";
import {Link} from "react-router-dom";
import {iconCatalogue} from "../Header/img";

const {SubMenu} = Menu;

const Catalogue = () => {

    const [lvl1, setLvl1] = useState([]);
    const [lvl2, setLvl2] = useState([]);
    const [lvl3, setLvl3] = useState([]);

    useEffect(() => {
        CategoryService.getCategories()
            .then(result => {
                console.log('categories ---> ', result);
                setLvl1(result.filter(cat => cat.level === '1'));
                setLvl2(result.filter(cat => cat.level === '2'));
                setLvl3(result.filter(cat => cat.level === '3'));
            })
            .catch(err => {
                console.log('error ---> ', err)
            })
    }, [])

    const handleCategoryClick = (e) => {
        console.log('click', e);
        // console.log('categories of lvl 1 ---> ', lvl1);
    }

    // const showCatalog = props.visible ? 'visible' : 'hidden';

    return (
        <>
            <Menu onClick={handleCategoryClick}
                  mode="vertical"
                  className='catalogue-list catalogue-btn-link'
            >
                <img className="catalogue-img" src={iconCatalogue} alt="icon"/>
                <SubMenu key="SubMenu" title="Catalogue" className='catalogue-title'>
                    {lvl1.map(categoryLvl1 => {
                        return (
                            <SubMenu key={categoryLvl1.id} title={categoryLvl1.name}
                                     className='catalogue-item'>
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
                    })}
                </SubMenu>
            </Menu>
        </>
    )
}


export default Catalogue