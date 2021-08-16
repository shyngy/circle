import React from 'react';



class ProfileStatus extends React.Component {

   
  state = {editMode:false};
    


  toggleSwith = () =>{
    

    this.setState({
      editMode: !this.state.editMode
    })
    console.log(this.editMode);
  }
  
  render(){
    return (
      <div>
        {this.state.editMode ? 
        <div>
          <input autoFocus={true} defaultValue={"d"} onBlur={this.toggleSwith.bind(this)}/>

        </div>
        : 
        <div>
          <div  onClick={this.toggleSwith.bind(this)}>hello status</div>
        </div>
      }
      </div>
    )
  }
}



export default ProfileStatus
