
import axios from 'axios';
import React from 'react'



class Users extends React.Component {

  constructor(props) {
    super(props);

    console.log(this.props);







  }
  onPageChange(pageNumber) {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);

    })
  }


  componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
      console.log(response.data)
      this.props.setTotalUsersCount(response.data.totalCount)
    })

  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }



    return (
      <>
        {pages.map(page => {
          return <span onClick={() => { this.onPageChange(page) }} key={page} className={this.props.currentPage === page ? 'active__page' : ''}>{page}</span>
        }

        )}
        {
          this.props.users.map((user, index) => {

            return (

              <span key={index}>
                <section>
                  <img src={user.img} alt="" style={{ width: "100px", height: "" }} />
                  <div className="name">
                    {user.name}
                  </div>
                  {user.followed ?
                    <button onClick={() => { this.props.unfollow(user.id) }}>unfollow</button>
                    : <button onClick={() => { this.props.follow(user.id) }}>follow</button>}
                </section>
              </span>

            )
          }
          )
        }
      </>
    )
  }
}
// const Users = (props) => {
//   console.log('rernder');
//   if (props.users.length === 0) {
//     axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
//       props.setUsers(response.data.items);
//     })
//   }



//   return (
//     <>
//       {
//         props.users.map((user, index) => {
//           console.log(user);
//           return (

//             <span key={index}>
//               <section>
//                 <img src={user.img} alt="" style={{ width: "100px", height: "" }} />
//                 <div className="name">
//                   {user.name}
//                 </div>
//                 {user.followed ?
//                   <button onClick={() => { props.unfollow(user.id) }}>unfollow</button>
//                   : <button onClick={() => { props.follow(user.id) }}>follow</button>}
//               </section>
//             </span>

//           )
//         }
//         )
//       }
//     </>
//   )
// }



export default Users
