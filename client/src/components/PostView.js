import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import {

  Container, 
  Table,
  Button,
} from 'semantic-ui-react'
import PostForm from './PostForm'

class PostView extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {

    const { showForm } = this.state
    const { post } = this.props
    return (
      
      <Container>
        
        <Button floated='left' onClick={this.toggleForm}> { showForm ? 'Cancel' : 'Edit' }</Button>

        { showForm ?
            <PostForm {...post} closeForm={this.toggleForm} />
            :
            <Fragment>
              <Table definition>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Description</Table.Cell>
                    <Table.Cell>{post.description}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Author</Table.Cell>
                    <Table.Cell>{post.author}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Category</Table.Cell>
                    <Table.Cell>{post.category}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Posted At</Table.Cell>
                    <Table.Cell> 
                      {
                        
                        post.updated_at === new Date() ? 
                        "Just Now" :
                      <ReactTimeAgo>{ new Date(Date.parse(post.updated_at))}</ReactTimeAgo>
                      }
                      </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Fragment>
          }
         <Button floated='left'><Link to="/posts">Back To Posts</Link></Button><br />

      </Container>
    )
  }
}


const mapStateToProps = (state, props) => {
  //"1"
  const { id } = props.match.params
  const { posts } = state
  const post = posts.find( p => p.id === parseInt(id, 10) )
  return { post }
}

export default connect(mapStateToProps)(PostView);


