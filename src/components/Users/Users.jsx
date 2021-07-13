
import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/img/user1.png'
const Users = ({ totalUsersCount, pageSize, currentPage, unfollow, follow, users, onPageChange, currentUserId }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <>
      <div className="pages">{pages.map(page => {
        return <span onClick={() => { onPageChange(page) }} key={page} className={currentPage === page ? 'active__page' : ''}>{page}</span>
      }

      )}</div>
      {
        users.map((user, index) => {

          return (

            <span key={index}>
              <section>
                <NavLink onClick={() => { currentUserId(user.id) }} to={`profile/${user.id}`}><img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" style={{ width: "100px", height: "" }} /></NavLink>
                <div className="name">
                  {user.name}
                </div>
                {user.followed ?
                  <button onClick={() => { unfollow(user.id) }}>unfollow</button>
                  : <button onClick={() => { follow(user.id) }}>follow</button>}
              </section>
            </span>

          )
        }
        )
      }
    </>
  )
}





export default Users
