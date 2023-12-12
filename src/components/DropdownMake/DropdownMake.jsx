import { useDispatch } from "react-redux";
import { updateMakes } from "../../redux/reducers/filterSlice";

const DropdownMake = ({ makes }) => {
    const dispatch = useDispatch();

    const handleMakeChange = (e) => {
        const selectedMake = e.target.value;
        dispatch(updateMakes(selectedMake))
    };

    return (
        <div>
            <label htmlFor="makeDropdown">Car brand</label>
            <select
                id="makeDropdown"
                onChange={handleMakeChange}
            >
                <option value="">All Makes</option>
                {makes &&
                    (makes.map((make) => (
                        <option key={make} value={make}>
                            {make}
                        </option>
                    )))}

            </select>
        </div>
    )
}

export default DropdownMake