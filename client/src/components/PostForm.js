import React from 'react'
import { connect } from 'react-redux'
import { updatePost, addPost} from '../reducers/posts'
import { Form } from 'semantic-ui-react'

class PostForm extends React.Component {
  defualtState = {
    description: '',
    category: '',
    author: ''
  }

  state = {...this.defualtState}

  static getDerivedStateFromProps(props, state){
    if(props.id !== state.id)
        return{...props}
  }

  handleChange =(e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit =(e) => {
    e.preventDefault()
    const { closeForm, dispatch } = this.props
    const func = this.state.id ? updatePost : addPost
    dispatch(func(this.state))
    closeForm()
  }

  render() {
    const { description, category, author} = this.state

    return(
      <Form onSubmit={this.handleSubmit}>
      <Form.Input
          name="description"
          value={description}
          onChange={this.handleChange}
          label="Description"
        />
        <Form.Input
          name="category"
          value={category}
          onChange={this.handleChange}
          label="Category"
        />
       
        <Form.Input
          name="author"
          value={author}
          onChange={this.handleChange}
          label="Author"
        />

        <Form.Button color='green'>Save</Form.Button>
      </Form>
    )
  }
}


export default connect()(PostForm)