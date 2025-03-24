import {getBaseUrl} from '../utils/url';
import ReferenceList from './ReferenceList';
import "./referneces.scss";
import {Reference} from '../components/reference-card/reference-card';

interface ReferenceCategory {
    id: number;
    name: string;
}


async function getReferences() {
    try {
        const res = await fetch(`${getBaseUrl()}/api/references?filters[for_rent]=0`, {
            cache: 'no-store'
        });
        if (!res.ok) return {data: [], meta: {hasDescription: false}};
        return res.json();
    } catch (error) {
        console.error('Failed to fetch references:', error);
        return {data: [], meta: {hasDescription: false}};
    }
}

async function getCategories() {
    try {
        const res = await fetch(`${getBaseUrl()}/api/reference-categories`, {
            cache: 'no-store'
        });
        if (!res.ok) return {data: []};
        return res.json();
    } catch (error) {
        console.error('Failed to fetch categories:', error);
        return {data: []};
    }
}

async function getServerSideProps() {
    const [data1, data2] = await Promise.all([getCategories(), getReferences()]);
    return [data1, data2];
}

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams: Promise<{ category?: string }>
}) {

    const [categoriesData,referencesData] = await getServerSideProps();

    const {category} = await searchParams;
    const selectedCategory = category || 'all';
    const filteredReferences = selectedCategory === 'all'
        ? referencesData.data
        : referencesData.data.filter((ref: Reference & { reference_categories: ReferenceCategory[] }) =>
            ref.reference_categories.some((category) =>
                category.id.toString() === selectedCategory
            )
        );

    return (
        <div className="container-fluid">
            <ReferenceList
                references={filteredReferences}
                categories={categoriesData.data}
                selectedCategory={selectedCategory}
                hasDescription={referencesData.meta.hasDescription}
            />
        </div>
    );
}
