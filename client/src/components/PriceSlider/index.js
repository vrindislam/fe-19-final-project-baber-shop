import React, {useState, useEffect} from 'react';
import { Slider, InputNumber, Row, Col, Form } from 'antd';
import './styles.less';
import { useDispatch } from "react-redux";
import { priceFilter } from "../../store/priceFilter/priceFilterAction";

const PriceSlider = () => {
    const [minValue, setMinValue] = useState(200);
    const [maxValue, setMaxValue] = useState(700);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(priceFilter({minPrice: minValue, maxPrice: maxValue}));
    },[minValue, maxValue, dispatch])

    const onSliderChange = value => {
        setMinValue(value[0]);
        setMaxValue(value[1]);
    }

    const onSliderMouseUp = (value) => {
        dispatch(priceFilter({minPrice: minValue, maxPrice: maxValue}));
    }

    const onChangeInputMin = value => {
        if (maxValue > value) {
            setMinValue(value);
        }
    }

    const onChangeInputMax = value => {
        if (minValue < value) {
            setMaxValue(value);
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
