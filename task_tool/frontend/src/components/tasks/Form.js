import React, { Component, useState } from 'react'
import { Form, Input, Button, Select, InputNumber } from 'antd';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { addTask } from "../../actions/tasks";



const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 8 },
};


const AddTaskForm = (props) => {
    const [form] = Form.useForm();
    const onReset = () => {
      form.resetFields();
    };
    const [status, setStatus] = useState("")
    const [points, setPoints] = useState(0)

    const onStatusChange = e => {
        setStatus(e.target.value)
    }

    const onPointsChange = value => {
        console.log(points)
        setPoints(value)
    }

    const onSubmit = () => {
        console.log("Submitted:",status,points)
        const task = { status, points }
        props.addTask(task)
    }

        return (
        <Form {...layout} form={form} name="control-hooks">
            <Form.Item
                name="status"
                label="Status"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Input onChange={onStatusChange} value={status}/>
            </Form.Item>
            <Form.Item
                name="points"
                label="Points"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <InputNumber 
                    onChange={onPointsChange}
                    min={0}
                    max={10}/>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={() => onSubmit()}>
                Add
                </Button>
                <Button type="link" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
        )
}

AddTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired
}

export default connect(null, {addTask})(AddTaskForm);