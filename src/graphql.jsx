import { useQuery, gql, useLazyQuery, useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
// const CUSTOMER_LIST = gql`
//     query customers($gender:Gender){
//         customers(gender:$gender) {
//        name
//        surname
//        gender
//     } 
//     }
// `
const CUSTOMER = gql`
    query {
        customer(id:102) {
       name
       surname
       gender
    } 
    }
`
const CREATE_CUSTOMER = gql`
    mutation{
        a:createCustomer(customer :{name:"JO",age:50}){
            name
        }
        b:createCustomer(customer :{name:"JOJO",age:50}){
            name
        }
    }
`
export default function () {
    const [gender, setGender] = useState('FEMALE')
    // const [getCustomer, { data = {}, loading }] = useLazyQuery(CUSTOMER)
    const [createCustomer, { data = {} }] = useMutation(CREATE_CUSTOMER)
    // const { data = {}, loading, error, refetch } = useQuery(CUSTOMER_LIST, {
    //     variables: { gender: gender }
    // })
    return <>
        <h1 className="title">Graphql</h1>
        <button className="button" onClick={() => createCustomer()}>Refresh</button>
        <pre>{JSON.stringify(data)}</pre>

    </>
}