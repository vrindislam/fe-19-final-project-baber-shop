import React  from 'react';
import { Slider, InputNumber, Row, Col, Form } from 'antd';
import './styles.less';

const PriceSlider = ({minValue, maxValue, setMaxVal, setMinVal}) => {

    const onSliderChange = value => {
        setMinVal(value[0]);
        setMaxVal(value[1]);
    }

    const onSliderMouseUp = (value) => {
        setMinVal(value[0]);
        setMaxVal(value[1]);
    }

    const onChangeInputMin = value => {
        if (maxValue > value) {
            setMinVal(value);
        }
    }

    const onChangeInputMax = value => {
        if (minValue < value) {
            setMaxVal(value);
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
