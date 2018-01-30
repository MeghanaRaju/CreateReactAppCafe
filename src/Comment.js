import React,{Component} from 'react';
import style from './style';
import marked from 'marked';

class Comment extends Component {
  constructor(props){
    super(props);
    this.state = {
      toBeUpdated: false,
      author:'',
      text: ''
    }
    this.updateComment = this.updateComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
  }
  updateComment(e){
    e.preventDefault();
    this.setState({toBeUpdated : !this.state.toBeUpdated})
  }
  deleteComment(e){
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onCommentDelete(id);
    console.log('Deleted!!');
  }
  handleCommentUpdate(e){
    e.preventDefault();
    let id = this.props.uniqueID;
    let author = (this.state.author)? this.state.author : null;
    let text = (this.state.text)? this.state.text : null;
    let comment = {author : author, text : text};
    this.props.onCommentUpdate(id,comment);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      author:'',
      text:''
    })
  }
  handleTextChange(e){
    this.setState({
      text: e.target.value
    })
  }
  handleAuthorChange(e){
    this.setState({
      author: e.target.value
    })
  }
  rawMarkup(){
    let rawMarkup = marked(this.props.children.toString());
    return {__html: rawMarkup}
  }
  render(){
    return(
      <div style={style.comment}>
        <h3>{this.props.author}</h3>
        <span dangerouslySetInnerHTML = {this.rawMarkup()}></span>
        <a style={style.updateLink} href="#" onClick = {this.updateComment}> Update </a>
        <a style={style.deleteLink} href="#" onClick = {this.deleteComment}> Delete </a>
        {(this.state.toBeUpdated) ? (
          <form onSubmit = {this.handleCommentUpdate}>
            <input type="text" placeholder="Update Name" style={style.commentFormAuthor} value={this.state.author} onChange={this.handleAuthorChange}/>
            <input type="text" placeholder="Update Comment" style={style.commentFormText} value={this.state.text} onChange={this.handleTextChange}/>
            <input type='submit' style={ style.commentFormPost } value='Update' />
          </form>
        ):null}
      </div>
    )
  }
}

export default Comment;
