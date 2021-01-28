import React, {useState, useEffect} from 'react';
import Ajax from "../../services/Ajax";
import { Slider, InputNumber, Row, Col, Form } from 'antd';
import './styles.less';
import {useDispatch} from "react-redux";
import {checkboxFilterAdd} from "../../store/checkboxFilters/checkboxFiltersAction";

const PriceSlider = () => {
    const [minValue, setMinValue] = useState(200);
    const [maxValue, setMaxValue] = useState(700);
    const [filteredPrice, setFilteredPrice] = useState('');
    const dispatch = useDispatch();

    useEffect( () => {
        const data = Ajax.get(filteredPrice);
        console.log('filteredPrice -->', filteredPrice);
        console.log('Data -->', data);
    }, [filteredPrice])

    useEffect(()=>{
        dispatch(checkboxFilterAdd({minPrice: minValue, maxPrice: maxValue}));
    }, [minValue, maxValue, dispatch])

    const onSliderChange = value => {
        // dispatch(checkboxFilterAdd({minPrice: value[0], maxPrice: value[1]}));
        // dispatch(checkboxFilterAdd({maxPrice: value[1]}));
        setMinValue(value[0]);
        setMaxValue(value[1]);
    }

    const onSliderMouseUp = () => {
        setFilteredPrice(`/products/filter?minPrice=${minValue}&maxPrice=${maxValue}`);
        // dispatch(checkboxFilterAdd({minPrice: minValue, maxPrice: maxValue}));
        // dispatch(checkboxFilterAdd({maxPrice: value[1]}));
        // console.log('onMouseUp triggered')
    }

    const onChangeInputMin = value => {
        if (maxValue > value) {
            setMinValue(value);
            // dispatch(checkboxFilterAdd({minPrice: value, maxPrice: maxValue}));
            // setFilteredPrice(`/products/filter?minPrice=${value}&maxPrice=${maxValue}`);
        }
    }

    const onChangeInputMax = value => {
        if (minValue < value) {
            // dispatch(checkboxFilterAdd({maxPrice: value}));
            // dispatch(checkboxFilterAdd({minPrice: minValue, maxPrice: value}));
            setMaxValue(value);
            // setFilteredPrice(`/products/filter?minPrice=${minValue}&maxPrice=${value}`);
        }
    }

    return (
        <div className='slider-container'>
            <div className='slider-heading-container'>
                <p className='slider-heading'>Price</p>
            </div>
            <Row justify='space-between'>
                <Col span={12}>
                    <Form.Item label='from'>
                        <InputNumber
                            min={1}
                            max={1000}
                            style={{ margin: '0 9px' }}
                            step={1}
                            value={minValue}
                            onChange={onChangeInputMin}
                            addonBefore='from'
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label='to'>
                        <InputNumber
                            min={1}
                            max={1000}
                            style={{ margin: '0 9px' }}
                            step={1}
                            value={maxValue}
                            onChange={onChangeInputMax}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Slider
                        min={1}
                        max={1000}
                        step={1}
                        range
                        defaultValue={[minValue, maxValue]}
                        onChange={onSliderChange}
                        onAfterChange={onSliderMouseUp}
                        value={[minValue, maxValue]}
                    />
                </Col>
            </Row>

        </div>
    )
}

export default PriceSlider;
