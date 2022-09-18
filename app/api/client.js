import { create } from 'apisauce'

const apiClent = create({
	baseURL: "http://192.168.1.3:9000/api"
});
export default apiClent

