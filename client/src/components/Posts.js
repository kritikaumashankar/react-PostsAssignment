import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container,Message, Header, Dropdown,Button,Divider } from 'semantic-ui-react';
import PostForm from './PostForm'
import '../App.css'
import ReactTimeAgo from 'react-time-ago'
class Posts extends React.Component {
  state= {category: '', showForm: false}

  toggleForm = () =>{
    this.setState({ showForm: !this.state.showForm })
  }
  categoryOptions = () => {
    const { categories } = this.props
    return categories.map((c,i) => { return {
      key: i, text: c, value:c
    }})
  }


  posts = () => {
    
        const {posts} =this.props
        const {category} = this.state;

        let visible = posts

        if(category)
            visible = posts.filter(p => p.category === category)

    return visible.map( post => {
      
      const { description, category, author, updated_at } = post
      console.log(updated_at)
        return (
          <div className="messageSize">
          <Message floating>
                  {description}<br/>
                  <span>
                    {author}
                  </span>
                  {category}<br/>
                <ReactTimeAgo>{new Date(Date.parse(updated_at))}</ReactTimeAgo>
                <Link to={`/posts/${post.id}`}>
                  View Post
                </Link><br/>
          </Message>
          </div>
          )
        })
    }

  handleChange =(_, { value }) => {
    this.setState({ category: value })
  }

  

  render() {
      let { category, showForm } = this.state

    return (
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Hide Form' : 'Show Form' }
        </Button>
        { showForm ? 
            <PostForm closeForm={this.toggleForm} />
            :
            <Fragment>
                <Dropdown
                  placeholder = "Filter by category"
                  fluid
                  selection
                  options={this.categoryOptions()}
                  onChange={(e, data) => this.setState({category: data.value})}
                value={category}
                />
                {category && 
                <Button 
                fluid 
                basic 
                onClick={ () => this.setState({ category: '' }) }
                >Clear Filter: {category}
                </Button> }
              <Divider />

              <Container>
              { this.posts() }
              </Container>
            </Fragment>
          }
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    const { posts } = state
    const categories = [...new Set(posts.map( p => p.category ))]
    return { posts, categories }  }

export default connect(mapStateToProps)(Posts);