
const fetchGroup = async (id) => {
    const data = await fetch(`${process.env.REACT_APP_API_URL}/post/groupPosts/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
                },
            });
    let group = await data.json();
    console.log(group, 'group')
    group.data.sort(function(a,b){ 
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
    });
    return group;
    
}

const fetchGroups = async () => {
    const data = await fetch(`${process.env.REACT_APP_API_URL}/group/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
                        },
                    });
    let groups = await data.json();
    groups = groups.data;
    console.log(groups)
    return groups;
    // setGroups(groups);
}

module.exports.fetchGroup = fetchGroup;
module.exports.fetchGroups = fetchGroups;