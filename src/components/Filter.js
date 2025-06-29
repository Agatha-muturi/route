const Filter =({filterTitle, setFilterTitle, filterRate, setFilterRate})=>{
    return(
        <div className="input">
            <input
            type='text'
            placeholder="search by title"
            value={filterTitle}
            onChange={(e)=>setFilterTitle(e.target.value)}
            />
            <input
            type='number'
            placeholder="minimum rating"
            value={filterRate}
            onChange={(e)=>setFilterRate(e.target.value)}
            />
        </div>
    );
};
export default Filter;