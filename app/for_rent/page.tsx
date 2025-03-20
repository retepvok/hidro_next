"use client";

import { useEffect, useState } from 'react';
import "../references/referneces.scss";
import api from '../services/api';
import ReferenceCard from '../components/reference-card/reference-card';

export default function Page() {
    const [references, setReferences] = useState([]);
    const [className, setClassName] = useState("col-12");

    useEffect(() => {
        const fetchReferences = async () => {
            try {
                const response_2 = await api.get("/api/references?filters[for_rent]=true");
                const refsData = response_2.data.data;
                setReferences(refsData);
            } catch (error) {
                console.error('Error fetching references:', error);
            }
        };
        fetchReferences();

        // Set responsive class based on window width
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setClassName("col-6"); // 2 items per row on medium screens
            } else {
                setClassName("col-12"); // 1 item per row on small screens
            }
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Group references into rows (optional, for layout purposes)
    const groupReferencesIntoRows = (refs, itemsPerRow = 3) => {
        const rows = [];
        for (let i = 0; i < refs.length; i += itemsPerRow) {
            rows.push(refs.slice(i, i + itemsPerRow));
        }
        return rows;
    };

    const referenceRows = groupReferencesIntoRows(references, className === "col-4" ? 3 : className === "col-6" ? 2 : 1);

    return (
        <div className="container-fluid">
            <div>
                <div className="buttons-container">
                    <h4>
                        Bérelhető gépek
                    </h4>
                </div>

                {referenceRows.map((row, rowIndex) => (
                    <div className="row row-eq-height" key={`row-${rowIndex}`}>
                        {row.map(ref => (
                            <ReferenceCard
                                key={ref.id}
                                reference={ref}
                                className={className}
                                hasDescription={references.some((ref)=>!!ref.description)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
