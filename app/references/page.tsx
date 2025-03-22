import { getBaseUrl } from '../utils/url';
import ReferenceList from './ReferenceList';
import "./referneces.scss";

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
    searchParams: { category?: string }
}) {
    const [referencesData, categoriesData] = await Promise.all([
        getReferences(),
        getCategories()
    ]);

    const selectedCategory = searchParams.category || 'all';
    const filteredReferences = selectedCategory === 'all' 
        ? referencesData.data
        : referencesData.data.filter((ref: any) =>
            ref.reference_categories.some((category: any) => 
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
