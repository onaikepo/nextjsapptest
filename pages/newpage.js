export default function NewPage() {
    return (
        <div className="main">
            <h1>First Post</h1>
            <form action="/api/form" method="post">
                <label htmlFor="search">Search</label>
                <input type="text" id="first" name="search" />
                <button type="submit">Submit</button>
            </form>
        </div >

    )
}