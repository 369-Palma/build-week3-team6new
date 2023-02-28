/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExp } from "../redux/actions";

const Experiences = () => {
    const dispatch = useDispatch();
    const experiences = useSelector((state) => state.contentExp[0]);
    const profileStore = useSelector((state) => state.contentUsers);


    useEffect(() => {
        dispatch(fetchExp("experiences"));
        console.log(experiences)

    }, []);

    console.log(experiences)

    return (
        <>
            <h1>this is expereriences Component</h1>
            <h1> {profileStore?.name}</h1>


            <h2>role: {experiences?.role}</h2>
            <h2>company: {experiences?.company}</h2>
            <h2>description: {experiences?.description}</h2>
            <h2>area: {experiences?.area}</h2>


        </>
    )


}

export default Experiences