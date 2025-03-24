import {getBaseUrl} from '../utils/url';
import ReferenceList from './ReferenceList';
import "./referneces.scss";
import { Reference } from '../components/reference-card/reference-card';

interface ReferenceCategory {
    id: number;
    name: string;
}

interface ReferenceData {
    data: Reference[];
    meta: {
        hasDescription: boolean;
    };
}

interface CategoryData {
    data: ReferenceCategory[];
}

async function getReferences() {
    const res = await fetch(`${getBaseUrl()}/api/references?filters[for_rent]=0`);
    if (!res.ok) throw new Error('Failed to fetch references');
    return res.json();
}

async function getCategories() {
    const res = await fetch(`${getBaseUrl()}/api/reference-categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    return res.json();
}

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams: Promise<{ category?: string }>
}) {
    const [referencesData, categoriesData] = await Promise.all([
        getReferences(),
        getCategories()
    ]);

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
