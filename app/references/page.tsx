"use client";

import { useEffect, useState } from 'react';
import "./referneces.scss";
import api from '../services/api';
import ReferenceCard from '../components/reference-card/reference-card';

export default function Page() {
    const [categories, setCategories] = useState([]);
    const [references, setReferences] = useState([]);
    const [category, setCategory] = useState("all");
    const [selectedReferences, selectReferences] = useState([]);
    const [className, setClassName] = useState("col-12");

    useEffect(() => {
        const fetchReferences = async () => {
            try {
                const response = await api.get('/api/reference-categories');
                setCategories(response.data.data);
                const response_2 = await api.get("/api/references");
                const refsData = response_2.data.data;
                setReferences(refsData);
                selectReferences(refsData); // Initialize with all references
            } catch (error) {
                console.error('Error fetching references:', error);
            }
        };
        fetchReferences();
        
        // Set responsive class based on window width
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setClassName("col-4"); // 3 items per row on large screens
            } else if (window.innerWidth >= 768) {
                setClassName("col-6"); // 2 items per row on medium screens
            } else {
                setClassName("col-12"); // 1 item per row on small screens
            }
        };
        
        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function show(cat, event = null) {
        setCategory(cat);
        if (cat === "all") {
            selectReferences(references);
            return;
        }

        selectReferences(references.filter((ref) => ref.reference_categories.some(category => category.id === cat)));
    }

    // Group references into rows (optional, for layout purposes)
    const groupReferencesIntoRows = (refs, itemsPerRow = 3) => {
        const rows = [];
        for (let i = 0; i < refs.length; i += itemsPerRow) {
            rows.push(refs.slice(i, i + itemsPerRow));
        }
        return rows;
    };

    const referenceRows = groupReferencesIntoRows(selectedReferences, className === "col-4" ? 3 : className === "col-6" ? 2 : 1);

    return (
        <div className="container-fluid">
            <div>
                <div className="buttons-container">
                    <h4>
                        Referenciák
                    </h4>
                    <div
                        className={`btn btn-primary btn-first ${category === 'all' ? 'active' : ''}`}
                        onClick={() => show('all')}
                    >
                        Összes
                    </div>
                    {categories.map((cat) => (
                        <div key={cat.id}
                             className={`btn btn-primary ${category === cat.id ? 'active' : ''}`}
                             onClick={(e) => show(cat.id, e)}
                        >
                            {cat.name}
                        </div>
                    ))}
                </div>
                
                {referenceRows.map((row, rowIndex) => (
                    <div className="row row-eq-height" key={`row-${rowIndex}`}>
                        {row.map(ref => (
                            <ReferenceCard 
                                key={ref.id} 
                                reference={ref} 
                                className={className}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
