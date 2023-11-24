import { useEffect, useState } from "react"
import { fetchAllAdverts } from "../../redux/operations"
import { useDispatch } from "react-redux";
import { updateMakes } from "../../redux/reducers/filterSlice";

const DropdownMake = () => {
    const dispatch = useDispatch();

    const [getMakes, setGetMakes] = useState(null);

    useEffect(() => {
        const findMakes = async () => {
            try {
                const allAdverts = await fetchAllAdverts()
                console.log(allAdverts) /// =====
                const makes = Array.from(new Set(allAdverts.map((advert) => advert.make).flat()));
                setGetMakes(makes);
            } catch (e) {
                console.error(e)
            }
        };
        findMakes()
    }, []);
    console.log('makes :', getMakes)

    const handleMakeChange = (e) => {
        const selectedMake = e.target.value;
        dispatch(updateMakes(selectedMake))

    };

    return (
        <div>
            <label htmlFor="makeDropdown">Car brand</label>
            <select
                id="makeDropdown"
                // type="make"
                // value={selectedMake}
                onChange={handleMakeChange}
            >
                <option value="">All Makes</option>
                {getMakes &&
                    (getMakes.map((make) => (
                        <option key={make} value={make}>
                            {make}
                        </option>
                    )))}

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