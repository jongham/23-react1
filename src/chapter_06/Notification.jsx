import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};
class Notification extends React.Component{
    constructor(props){
        super(props);

        this.state={};
    }
    componentDidMount(){
        console.log(`${this.props.id} this.componentDidMount() called.`);
    }
    componentDidUpdate(){
        console.log(`${this.props.id} this.componentDidMount() called.`);
    }
}