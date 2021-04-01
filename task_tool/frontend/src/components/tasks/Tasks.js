import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from  'prop-types';
import {getTasks, deleteTask} from '../../actions/tasks'

import { Table, PageHeader, Button } from 'antd';




export class Tasks extends Component {
    columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'id',
        },
        {
            title: 'Points',
            dataIndex: 'points',
            key: 'id',
          },
          {
            title: 'Action',
            render: (text, task) => {
                return(
                    <Button type="dashed" onClick={() => this.handleDelete(task.id)}>
                        Delete
                    </Button>
                )
            }
          }
      ];
    
      static propTypes = {
          tasks: PropTypes.array.isRequired
        }

    handleDelete = (id) => {
        this.props.deleteTask(id);
        console.log("Deleted", id)
    }
        
     componentDidMount(){
        this.props.getTasks();
     }
    render(){
        return(
            <Fragment>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="Tasks"
                    subTitle="What you are going to do ..."
                />
                <Table dataSource={this.props.tasks} columns={this.columns} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks.tasks
});
export default connect(mapStateToProps, {getTasks, deleteTask})(Tasks);