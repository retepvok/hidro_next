import { getBaseUrl } from '../utils/url';
import RentList from './RentList';
import "../references/referneces.scss";

async function getRentReferences() {
    const res = await fetch(`${getBaseUrl()}/api/references?filters[for_rent]=true`);
    if (!res.ok) throw new Error('Failed to fetch rent references');
    return res.json();
}

export default async function Page() {
    const response = await getRentReferences();

    return (
        <div className="container-fluid">
            <RentList initialReferences={response.data} />
        </div>
    );
}
