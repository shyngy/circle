
import React from 'react'

const Users = ({ totalUsersCount, pageSize, currentPage, unfollow, follow, users, onPageChange }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <>
      {pages.map(page => {
        return <span onClick={() => { onPageChange(page) }} key={page} className={currentPage === page ? 'active__page' : ''}>{page}</span>
      }

      )}
      {
        users.map((user, index) => {
          return (

            <span key={index}>
              <section>
                <img src={user.img} alt="" style={{ width: "100px", height: "" }} />
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
