import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { fetchGroups } from '../../services/ajax';

function MainContainer() {

    

    useEffect(() => {
        let groups;
        async function fetchData() {
            groups = await fetchGroups();
            setGroups(groups)
        }
        fetchData();
    }, []);

    const [groups, setGroups] = useState([]);

    return (
        <div>
            <h1>My Groups</h1>
            
            <Link to={'/create-group'}>Create a Group</Link>
                
                {groups.map(group => (
                    <h2 key={group._id}>
                        <Link to={`/group/${group._id}`}>{group.title}</Link>
                    </h2>
                ))}
        </div>
    )
}

// class MainContainer extends Component {
//     constructor() {
//         super();
//         this.state = {
//             groups: []
//         }
//     }
//     componentDidMount = () => {
//         this.getGroups();
//     }
    
//     getGroups = async() => {
//         try {
//             const groups = await fetch(`${process.env.REACT_APP_API_URL}/group/`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             const response = await groups.json();
//             console.log(response.data);
//             this.setState({groups: response.data});
//         } catch (error) {
//             console.log(error);
//         }
//     };

    

//     render(){
        
//         return(
//             <div >
//                 <h1>Your Groups</h1>
//                 <Link to='/create-post'>Create a Group</Link>
                // {this.state.groups.map((group) => {
                //     return <Group key={group._id} group={group} />
                // })}
                
                
//             </div>

//         )
//     }
// }

export default MainContainer;