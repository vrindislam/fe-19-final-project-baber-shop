import React, {useState, useEffect} from 'react';
import Ajax from "../../services/Ajax";
import { Slider, InputNumber, Row, Col, Form } from 'antd';
import './styles.less'

const PriceSlider = () => {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [filteredPrice, setFilteredPrice] = useState('')

    useEffect( () => {
        const data = Ajax.get(filteredPrice);
        console.log('filteredPrice -->', filteredPrice);
        console.log('Data -->', data);
    }, [filteredPrice])

    const onSliderChange = value => {
        setMinValue(value[0]);
        setMaxValue(value[1]);
    }

    const onSliderMouseUp = () => {
        setFilteredPrice(`/products/filter?minPrice=${minValue}&maxPrice=${maxValue}`);
        // console.log('onMouseUp trigered')
    }

    const onChangeInputMin = value => {
        if (maxValue > value) {
            setMinValue(value);
            setFilteredPrice(`/products/filter?minPrice=${value}&maxPrice=${maxValue}`);
        }
    }

    const onChangeInputMax = value => {
        if (minValue < value) {
            setMaxValue(value);
            setFilteredPrice(`/products/filter?minPrice=${minValue}&maxPrice=${value}`);
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
