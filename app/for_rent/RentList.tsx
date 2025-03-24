import ReferenceCard, {Reference} from '../components/reference-card/reference-card';

interface RentListProps {
    initialReferences: Reference[];
}

export default function RentList({ initialReferences }: RentListProps) {
    return (
        <div className="reference">
            <div className="buttons-container">
                <h4>
                    Bérelhető gépek
                </h4>
            </div>

            <div className="row row-eq-height">
                {initialReferences.map(ref => (
                    <ReferenceCard
                        key={ref.id}
                        reference={ref}
                        className="col-12 col-lg-6"
                        hasDescription={initialReferences.some((ref)=>!!ref.description)}
                    />
                ))}
            </div>
        </div>
    );
}
