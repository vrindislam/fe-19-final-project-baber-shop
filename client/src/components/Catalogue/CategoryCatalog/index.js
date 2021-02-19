import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import CategoryService from "../../../services/CategoryService";

import {Menu} from 'antd';

const {SubMenu} = Menu;

const CategoryCatalogue = () => {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const [sortedCategories, setSortedCategories] = useState([]);

    const rootSubmenuKeys = sortedCategories.map((item, index) => `sub${index}`);

    useEffect(() => {
        CategoryService.getCategoriesNestedByLevels()
            .then(result => setSortedCategories(result))
            .catch(error => console.log(error))
    }, [])

    console.log('Sorted categories -->', sortedCategories);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <div>
            <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{width: 256}}>
                {sortedCategories.map((topLevelCategory, index) => {
                    return (
                        <SubMenu key={'sub' + index} title={topLevelCategory.name}>
                            {topLevelCategory.childLevel.map(nestedLevel => {
                                if (nestedLevel.childLevel) {
                                    return (
                                        <SubMenu key={nestedLevel.id} title={nestedLevel.name}>
                                            {nestedLevel.childLevel.map(menuItem => {
                                                return (
                                                    <Menu.Item key={menuItem.id}>
                                                        <Link to='/shop'>{menuItem.name}</Link>
                                                    </Menu.Item>
                                                )
                                            })}
                                        </SubMenu>
                                    )
                                } else {
                                    return (
                                        <Menu.Item key={nestedLevel.id}>
                                            <Link to='/shop'>{nestedLevel.name}</Link>
                                        </Menu.Item>
                                    )
                                }
                            })}
                        </SubMenu>
                    )
                })}
            </Menu>
        </div>
    )
}


export default CategoryCatalogue;