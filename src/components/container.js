import React from 'react';
import {Row, Col, Container, Card, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import {connect} from 'react-redux';
import {
    getColumnsData,
    getTaskData,
    addColumnsData
} from "../redux/Actions";

class MainContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            openModal : false,
            columnName : "",
            columnsData: [
                { "id": 251, "name": "To Do", "order": 1 },
                { "id": 252, "name": "Doing", "order": 2 },
                { "id": 253, "name": "Done", "order": 3 },
                { "id": 254, "name": "Under Review", "order": 5 },
                { "id": 255, "name": "Under QA", "order": 4 },
                { "id": 256, "name": "Ready for Production", "order": 8 }
            ],
            listData: [
                {"id":2511,"column_id":251,"name":"Animated Side Bar Ad (PM.com)","sort_order":0,
                "completed":false,"progress":75,"comment_count":1,"attachment_count":0,"assignee":[{"id":25111,"name":"Melissa Henderson","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25112,"name":"John Brown","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-12"},
                {"id":2512,"column_id":251,"name":"Sales Positioning Deck","sort_order":0,"completed":false,"progress":25,"comment_count":10,"attachment_count":0,"assignee":[{"id":25121,"name":"Alex Henderson","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25122,"name":"Helly Brown","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-22"},{"id":2513,"column_id":251,"name":"Email - Images for Astro Email Drip","sort_order":2,"completed":false,"progress":15,"comment_count":7,"attachment_count":0,"assignee":[{"id":25131,"name":"Alex Henderson","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25132,"name":"Helly Brown","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-04-12"},{"id":2514,"column_id":251,"name":"Email - Demo Sales Deck","sort_order":5,"completed":false,"progress":0,"comment_count":0,"attachment_count":0,"assignee":[],"due_date":"2020-08-12"},{"id":2521,"column_id":252,"name":"Animated Side Bar Ad (PM.com)","sort_order":0,"completed":false,"progress":75,"comment_count":1,"attachment_count":0,"assignee":[{"id":25211,"name":"Melissa Henderson","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25212,"name":"John Brown","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-12"},{"id":2522,"column_id":252,"name":"Animated Side Bar Ad (PM.com)","sort_order":0,"completed":false,"progress":75,"comment_count":1,"attachment_count":0,"assignee":[{"id":25221,"name":"Alex Henderson","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25222,"name":"Helly Brown","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-12"},{"id":2531,"column_id":253,"name":" Astro Pre Launch","sort_order":1,"completed":true,"progress":100,"comment_count":54,"attachment_count":5,"assignee":[{"id":25311,"name":"Mark Gibson","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25312,"name":"Neil Amstrong","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-12"},{"id":2532,"column_id":253,"name":"Blog : Images for Astro Blog announcement","sort_order":0,"completed":true,"progress":100,"comment_count":12,"attachment_count":7,"assignee":[{"id":25321,"name":"Alex Garry","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25322,"name":"Helly Johnson","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-12"},{"id":2511,"column_id":251,"name":"Animated Side Bar Ad (PM.com)","sort_order":0,"completed":false,"progress":75,"comment_count":1,"attachment_count":0,"assignee":[{"id":25111,"name":"Melissa Henderson","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25112,"name":"John Brown","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-12"},{"id":2512,"column_id":251,"name":"Sales Positioning Deck","sort_order":0,"completed":false,"progress":25,"comment_count":10,"attachment_count":0,"assignee":[{"id":25121,"name":"Alex Henderson","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25122,"name":"Helly Brown","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-22"},{"id":2513,"column_id":251,"name":"Email - Images for Astro Email Drip","sort_order":2,"completed":false,"progress":15,"comment_count":7,"attachment_count":0,"assignee":[{"id":25131,"name":"Alex Henderson","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25132,"name":"Helly Brown","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-04-12"},{"id":2514,"column_id":251,"name":"Email - Demo Sales Deck","sort_order":5,"completed":false,"progress":0,"comment_count":0,"attachment_count":0,"assignee":[],"due_date":"2020-08-12"},{"id":2521,"column_id":252,"name":"Animated Side Bar Ad (PM.com)","sort_order":0,"completed":false,"progress":75,"comment_count":1,"attachment_count":0,"assignee":[{"id":25211,"name":"Melissa Henderson","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25212,"name":"John Brown","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-12"},{"id":2522,"column_id":252,"name":"Animated Side Bar Ad (PM.com)","sort_order":0,"completed":false,"progress":75,"comment_count":1,"attachment_count":0,"assignee":[{"id":25221,"name":"Alex Henderson","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25222,"name":"Helly Brown","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-12"},{"id":2531,"column_id":253,"name":" Astro Pre Launch","sort_order":1,"completed":true,"progress":100,"comment_count":54,"attachment_count":5,"assignee":[{"id":25311,"name":"Mark Gibson","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25312,"name":"Neil Amstrong","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-12"},{"id":2532,"column_id":253,"name":"Blog : Images for Astro Blog announcement","sort_order":0,"completed":true,"progress":100,"comment_count":12,"attachment_count":7,"assignee":[{"id":25321,"name":"Alex Garry","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25322,"name":"Helly Johnson","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-12"},{"id":2534,"column_id":253,"name":"Blog : Add an Agile Board Category","sort_order":2,"completed":true,"progress":100,"comment_count":12,"attachment_count":7,"assignee":[{"id":25341,"name":"Alex Garry","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25342,"name":"Helly Johnson","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-12"},{"id":2534,"column_id":253,"name":"Blog : Add an Agile Board Category","sort_order":2,"completed":true,"progress":100,"comment_count":12,"attachment_count":7,"assignee":[{"id":25341,"name":"Alex Garry","profile":"https:\/\/i.pravatar.cc\/300"},{"id":25342,"name":"Helly Johnson","profile":"https:\/\/i.pravatar.cc\/300"}],"due_date":"2020-02-12"},{"id":2535,"sort_order":1,"completed":false,"progress":0,"comment_count":0,"attachment_count":0,"assignee":[],"due_date":"2020-12-11"},{"id":2536,"sort_order":1,"completed":false,"progress":0,"comment_count":0,"attachment_count":0,"assignee":[],"due_date":"2020-12-11"},{"id":2537,"sort_order":1,"completed":false,"progress":0,"comment_count":0,"attachment_count":0,"assignee":[],"due_date":"2020-12-11","name":"Change Global Credentials","column_id":252}]
        }
    }

    componentDidMount(){
        this.props.getTaskData();
        this.props.getColumnsData();
    }

    handleAddNewColumn = () => {
        this.setState({openModal : true})   
     }

     closeModal = () => {
        this.setState({openModal : false,columnName:''})   
     }

     setNewColumn = () => {
        let data = this.state.columnsData;
        data.push({id : 256, name:this.state.columnName, order : data.length + 1})
        this.setState({columnsData : data})
        this.props.addColumnsData({data:this.state.columnName,order:data.length + 1})
     }

    render(){
        const {columnsData, listData, openModal, columnName} = this.state;
        return(
            <Container>
                <h1>KanBan Example</h1>
                <div className="d-flex">
                    {columnsData && columnsData.length && 
                    columnsData.map((columns, index) => {
                            return (
                                <Col md={2} key={index} style={{border : "1px solid gray"}} className="m-1">
                                    <h5>{columns.name}</h5>
                                    { listData && listData.length && listData.map((list,keysdat) => {
                                        return (                                            
                                            <Card className="mt-2" title={list.name} body>
                                            <CardTitle>
                                                {columns.name}
                                            </CardTitle>
                                            <CardText>
                                                <div clas="d-flex">
                                                    <label className="p-1">{list.progress} %</label>
                                                    <label className="p-1"><i className="fa fa-link" ></i>{list.attachment_count}</label>
                                                    <label className="p-1"><i className="fa fa-comment" ></i>{list.comment_count}</label>
                                                </div>
                                            </CardText>
                                        </Card>
                                        )
                                    })} 
                                </Col>
                            )
                    })
                    }

                <Col md={3}>
                <div onClick={this.handleAddNewColumn} className="mt-2 p-2" body
                 style={{height:'100px',width:'100px', cursor:"pointer", border:'1px solid gray'}}>
                    <div className="d-flex">
                        <i className="fa fa-save"></i> New Column
                    </div>
                    <CardText>
                        
                    </CardText>
                </div>
                </Col>
                </div>

                <Modal isOpen={openModal} toggle={this.closeModal}>
                    <ModalHeader toggle={this.closeModal}>Add New Column</ModalHeader>
                    <ModalBody>
                            <input type='text' value={columnName} onChange={(e) => {this.setState({columnName : e.target.value})}} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={this.setNewColumn}>Save</Button>
                        <Button color='secondary' onClick={this.closeModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    loading : state.columnReducer.getDataLoader
})

export default connect(mapStateToProps, {
    getTaskData,
    getColumnsData,
    addColumnsData
})(MainContainer)