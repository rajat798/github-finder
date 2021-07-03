import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user : { login,avatar_url,html_url }}) => {
    // constructor(){
    //     super()
    //     console.log('123')
    //     this.state = {
    //         id: 1,
    //         login: 'mojombo',
    //         avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4', 
    //         html_url: 'https://github.com/mojombo'
    //     }
    // }

    // state = {
    //     id : 1,
    //     login: 'mojombo',
    //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4', 
    //     html_url: 'https://github.com/mojombo'
    // }



        // const { login,avatar_url,html_url } = props.user;
        return (
            <div className = "card text-center">
                <img src={avatar_url} alt="" className = "round-img" style = {{width :'60px'}}/>
                <h3>{login}</h3>
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        )
}


UserItem.propTypes = {
    user : PropTypes.object.isRequired
}

export default UserItem;

