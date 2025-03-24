import { getBaseUrl } from '../utils/url';
import RentList from './RentList';
import "../references/referneces.scss";

async function getServerSideProps() {
    try {
        const res = await fetch(`${getBaseUrl()}/api/references?filters[for_rent]=true`, {
            cache: 'no-store'
        });
        if (!res.ok) return { data: [], meta: { hasDescription: false } };
        return res.json();
    } catch (error) {
        console.error('Failed to fetch references:', error);
        return { data: [], meta: { hasDescription: false } };
    }
}

export default async function Page() {
    const response = await getServerSideProps();

    return (
        <div className="container-fluid">
            <RentList initialReferences={response.data} />
        </div>
    );
}
