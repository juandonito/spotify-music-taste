const parseHash = (hash) => {

    const query = hash.split('&')

    let data = {}

    for (let i = 0 ; i < query.length ; i++ ){
        let keyVal = query[i].split('=')
        data = {...data, [keyVal[0]] : keyVal[1]}
    }

    return data
}

export default parseHash