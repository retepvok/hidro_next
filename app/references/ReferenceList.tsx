import ReferenceCard, { Reference } from '../components/reference-card/reference-card';
import Link from 'next/link';


interface Category {
    id: number;
    name: string;
}

interface ReferenceListProps {
    references: Reference[];
    categories: Category[];
    selectedCategory: string;
    hasDescription: boolean;
}

export default function ReferenceList({
    references,
    categories,
    selectedCategory,
    hasDescription
}: ReferenceListProps) {
    return (
        <div className="reference">
            <div className="buttons-container">
                <h4>Referenciák</h4>
                <Link
                    href="?category=all"
                    className={`btn btn-primary btn-first ${selectedCategory === 'all' ? 'active' : ''}`}
                >
                    Összes
                </Link>
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        href={`?category=${cat.id}`}
                        className={`btn btn-primary ${selectedCategory === cat.id.toString() ? 'active' : ''}`}
                    >
                        {cat.name}
                    </Link>
                ))}
            </div>

            <div className="row row-eq-height">
                {references.map(ref => (
                    <ReferenceCard
                        key={ref.id}
                        reference={ref}
                        className="col-12 col-md-6 col-lg-4"
                        hasDescription={hasDescription}
                    />
                ))}
            </div>
        </div>
    );
}
