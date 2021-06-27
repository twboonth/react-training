import { useQuery, gql,useLazyQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
const CUSTOMER_LIST = gql`
    query customers($gender:Gender){
        customers(gender:$gender) {
       name
       surname
       gender
    } 
    }
`
// const CUSTOMER = gql`
//     query {
//         customer(id:102) {
//        name
//        surname
//        gender
//     } 
//     }
// `
export default function () {
    const [gender,setGender] = useState('FEMALE')
    // const [getCustomer,{data={},loading}] = useLazyQuery(CUSTOMER)
    const { data = {}, loading, error, refetch } = useQuery(CUSTOMER_LIST, {
        variables: { gender: gender }
    })
    return <>
        <h1 className="title">Graphql</h1>
        {/* <button className="button" onClick={() => getCustomer()}>Refresh</button> */}
        <pre>{JSON.stringify(data)}</pre>

    </>
}