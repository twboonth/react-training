import { useState, useEffect } from 'react'
import axios from 'axios'
  const api = process.env['REACT_APP_API'];
export default function Post() {
    // const api = process.env['REACT_APP_API'];
    const [posts, setPost] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [pages, setPages] = useState([]);

    useEffect(async () => {
        console.log(activePage)
        const { data, headers } = await axios.get(`${api}/posts?_limit=6&_page=${activePage}`)

        const totalPage = Math.floor(parseInt(headers["x-total-count"]) / 6);

        setPages(new Array(totalPage).fill());

        setPost(data);

    }, [activePage])
    return <>
        <table className="table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>

            <tbody>
                {posts.map((item, index) =>
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                )}

            </tbody>
        </table>
        {/* <pre>{JSON.stringify(posts)}</pre> */}
        <nav className="pagination">
            <ul className="pagination-list">
                {pages.map((each, idx) => {
                    const pageNo = idx + 1;
                    return <li key={idx}>
                        <a onClick={() => setActivePage(pageNo)} className={`pagination-link ${pageNo === activePage ? "is-current" : ""}`}>{pageNo}</a>
                    </li>
                })}
            </ul>
        </nav>
    </>
}