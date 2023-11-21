
const DropdownMake = () => {
    return (
        <div>
            <label htmlFor="makeDropdown">Car brand</label>
            <select
                id="makeDropdown"
            // value={selectedMake}
            // onChange={handleMakeChange}
            >
                <option value="">All Makes</option>
                {/* {makes.map((make) => (
                    <option key={make} value={make}>
                        {make}
                    </option>
                ))} */}

            </select>
            <input
                type="text"
                // value={inputValue}
                // onChange={handleInputChange}
                placeholder="Type a make..."
            />
        </div>
    )
}

export default DropdownMake