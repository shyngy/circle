
import React from 'react'

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg", followed: false, fullName: 'Dmitry', status: 'i am a boss', location: { city: 'Minsk', country: 'Belarus' } },
      { id: 2, img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg", followed: true, fullName: 'Sasha', status: 'i am a boss too', location: { city: 'Moscow', country: 'Russia' } },
      { id: 3, img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg", followed: false, fullName: 'Andrew', status: 'i am a ....', location: { city: 'Kiev', country: 'Ukraine' } },
    ]
    )
  }

  console.log(props.users);
  return (
    <>
      {
        props.users.map((user, index) => {
          console.log(user);
          return (

            <span key={index + user.id}>
              <section>
                <img src={user.img} alt="" style={{ width: "100px", height: "" }} />
                <div className="name">
                  {user.fullName}
                </div>
                {user.followed ?
                  <button onClick={() => { props.unfollow(user.id) }}>unfollow</button>
                  : <button onClick={() => { props.follow(user.id) }}>follow</button>}
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
