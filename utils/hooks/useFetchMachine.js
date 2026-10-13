import { useState, useEffect } from "react";
import axios from "axios";

import { getJwt } from "../functions";

export const useFetchMachine = (machinesObject,machine_id, model_id) => {
	const [machines, setMachines] = useState(machinesObject);
	const [model, setModel] = useState([]);

	useEffect(() => {
        const fetchMachines = () => {
			let res;
			try {
				// res = await axios.post(
				// 	process.env.NEXT_PUBLIC_API,
				// 	{machine_id},
				// 	{
				// 		headers: { Authorization: `Bearer ${getJwt()}` },
				// 	}
				// );
				// if (res?.data?.status !== "success")
				// 	throw new Error(res?.data.data.message);
				// const machines = [...res.data?.data];
				// machines.forEach((item, index) => {
				// 	machines[index].models = JSON.parse(item.models);
				// 	machines[index].resources = JSON.parse(item.resources);
				// 	machines[index].general_description = item.general_description ? JSON.parse(
				// 		item.general_description
				// 	): [];
				// 	// console.log('application',item.application)
				// 	machines[index].application = item.application ? JSON.parse(item.application) : [];
				// 	// console.log('item.application',item.item.application)
				// 	machines[index].appearance = item.appearance ? JSON.parse(item.appearance): [];
				// 	// console.log('accessories',item.accessories)
				// 	machines[index].accessories = item.accessories ? JSON.parse(item.accessories): [];
				// 	// console.log('services',item.services)
				// 	machines[index].services = item.services ? JSON.parse(item.services) : [];
				// });
				const machine = machines.filter(
					ma => parseInt(ma.id) === parseInt(machine_id)
				)[0];
				const model = machine.models.filter(mo => mo.id === model_id);

				// setMachines(machines);
				setModel(model);
			} catch (error) {
				console.log(error);
				// alert(`اشکال در بروز رسانی \n ${error} `);
				// throw new Error(`اشکال در بروز رسانی \n ${error} `);
			}

		};
        fetchMachines();
	},[machines,machine_id,model_id]);

	return [model];
};
