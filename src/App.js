import './App.css'

const user1 = {
  avatar:'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9263607_b_v9_aa.jpg',
  name:'Sudesh Sudeera',
  designation:'Computer Engineer',
  salary:'95000'
}

const user2 = {
  avatar:'https://people.com/thmb/xE9UNogGcWjaA7Zkj-nWfEz6Vtk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(689x409:691x411)/Ezra-Miller-as-Flash-Warner-Bros-080422-1a1d7a5357a84f5e8fe25fc4833afeef.jpg',
  name:'Sudeera Bandara',
  designation:'Telecommuniction Engineer',
  salary:'85000'
}

const user3 = {
  avatar:'https://deadline.com/wp-content/uploads/2022/10/creed-iii-michael-b-jordan-canelo-alvarez.jpg?w=1000',
  name:'Bandara Konara',
  designation:'Electrical Engineer',
  salary:'75000'
}

const user4 = {
  avatar:'https://m.media-amazon.com/images/M/MV5BMTI5ODY5NTUzMF5BMl5BanBnXkFtZTcwOTAzNTIzMw@@._V1_.jpg',
  name:'Konara Sudeera',
  designation:'Electronic Engineer',
  salary:'65000'
}

function UserManager() {
  return(
    <div className='wrapper'>
      <User avatar={user1.avatar}
        name={user1.name} designation={user1.designation} salary={user1.salary} />
      <User avatar={user2.avatar}
        name={user2.name} designation={user2.designation} salary={user2.salary} />
      <User avatar={user3.avatar}
        name={user3.name} designation={user3.designation} salary={user3.salary} />
      <User avatar={user4.avatar}
        name={user4.name} designation={user4.designation} salary={user4.salary} />
    </div>
  );
}

const User = (props)=> {
  const {avatar, name, designation, salary} = props;
  return(
    <div className='user-outer'>
      <Avatar avatar={avatar}/>
      <UserData name={name} designation={designation} salary={salary} >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book.
      </UserData>
    </div>
  )
}

const Avatar = ({avatar})=> {
  return(
    <div className='avatar-outer'>
      <img src={avatar} alt='Walter O. Brain'/>
    </div>
  )
}

const UserData = ({name, designation, salary, children})=> {
  return(
    <div className='user-data'>
      <UserName name={name}/>
      <Designation designation={designation}/>
      <Salary salary={salary}/>
      <p>
        {children}
      </p>
    </div>
  )
}

const UserName = ({name})=> {
  const inlineStyles = {
    color: 'lightblue'
  }

  return(
    <div>
      <h2 style={inlineStyles}>{name}</h2>
    </div>
  )
}

const Designation = ({designation})=> {
  return(
    <div>
      <h3 style={{fontStyle: 'italic'}}>{designation}</h3>
    </div>
  )
}

const Salary = ({salary})=> {
  return(
    <div>
      <h3 style={{fontStyle: 'italic'}}>{salary}</h3>
    </div>
  )
}

export default UserManager;