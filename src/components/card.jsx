import React, { Component } from 'react';
import infoIcon from '../images/iconfinder_info_172483.png';

class Card extends Component {
    constructor() {
        super();

        this.state = {
            isMouseOver: false,
            isMouseOverInfoIcon: false
        }
    }

    render() {
        let cardClass = this.state.isMouseOver ? " hover" : "";
        let cardTitleClass = this.state.isMouseOverInfoIcon ? " hide" : "";
        let cardTextClass = this.state.isMouseOverInfoIcon ? " show" : "";
        let cardTagClass = this.state.isMouseOverInfoIcon ? " hide" :
            this.state.isMouseOver ? " show" : "";

        return (
            <div className="card-container">
                <img src={this.props.image} alt="Project" />
                <div className={"card" + cardClass} onMouseEnter={this.handleCardMouseEnter.bind(this)}
                    onMouseLeave={this.handleCardMouseLeave.bind(this)}>

                    <span className={"card-info-icon" + cardClass} onMouseEnter={this.handleInfoIconMouseEnter.bind(this)}
                        onMouseLeave={this.handleInfoIconMouseLeave.bind(this)}>
                        <img className="card-info-icon-img" src={infoIcon} alt="Info" />
                    </span>

                    <h3 className={"card-title" + cardTitleClass + cardClass}>{this.props.title}</h3>
                    <p className={"card-text" + cardTextClass}>{this.props.text}</p>
                    <div className={"card-tag-container" + cardTagClass}>
                        {this.props.tags.map((tag) => {
                            return (<span className="card-tag" key={tag}>{tag}</span>)
                        })}
                    </div>
                    <div className="card-buttons">
                        <button className={"card-button-project" + cardClass}><a href={this.props.projectLink} target="_blank">View Project</a></button>
                        <button className={"card-button-code" + cardClass}><a href={this.props.codeLink} target="_blank">View Code</a></button>
                    </div>

                </div>
            </div>

        );
    }
    handleCardMouseEnter() {
        this.setState({ isMouseOver: true });
    }
    handleCardMouseLeave() {
        this.setState({ isMouseOver: false });
    }
    handleInfoIconMouseEnter() {
        this.setState({ isMouseOverInfoIcon: true });
    }
    handleInfoIconMouseLeave() {
        this.setState({ isMouseOverInfoIcon: false });
    }
}

export default Card;