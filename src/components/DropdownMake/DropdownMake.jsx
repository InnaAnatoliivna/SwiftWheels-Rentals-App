import { useDispatch } from "react-redux";
import { updateMakes } from "../../redux/reducers/filterSlice";
import { Dropdown, Label, Select } from "./DropdownMake.styled";

const DropdownMake = ({ makes }) => {
    const dispatch = useDispatch();

    const handleMakeChange = (e) => {
        const selectedMake = e.target.value;
        dispatch(updateMakes(selectedMake))
    };

    return (
        <Dropdown>
            <Label htmlFor="makeDropdown">Car brand</Label>
            <Select
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

            </Select>
        </Dropdown>
    )
}

export default DropdownMake