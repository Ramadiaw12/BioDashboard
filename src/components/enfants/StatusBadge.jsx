import React from "react";

const StatusBadge = () => {
    return (
        <>
            <div className="mockup-browser border border-base-300 w-full">
                <div className="mockup-browser-toolbar">
                    <input type="text" placeholder="Recherche d'échantillons..." className="p-3  rounded-b-lg text-lg border-amber-50   w-2xs md:w-auto" />

                </div>
                <div className="grid place-content-center h-80">
                <div className="overflow-x-auto">
                <table className="table table-xl ">
                    <thead className="shadow-sm bg-green-950 text-amber-50">
                    <tr>
                        
                        <th>ID</th>
                        <th>Nom de l'échantillon</th>
                        <th>Type</th>
                        <th>Date de l'ajout</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody className="shadow-sm  ">
                    <tr>
                        
                        <td className="font-bold">ROT001</td>
                        <td>Sample A</td>
                        <td>Whole génome</td>
                        <td>02/04/2025</td>
                        <td><button className="p-2 bg-amber-600  rounded-lg">En Traitement</button></td>
                        <td><button className="p-2 bg-gray-200 border-2 rounded-lg">Voir les détails</button></td>
                    </tr>
                    <tr>
                    
                        <td className="font-bold">ROT002</td>
                        <td>Sample B</td>
                        <td>ADN</td>
                        <td>25/01/2025</td>
                        <td><button className="p-2 bg-red-600  rounded-lg">Problème</button></td>
                        <td><button className="p-2 bg-gray-200 border-2 rounded-lg">Voir les détails</button></td>
                    </tr>
                    <tr>
                        
                        <td className="font-bold">ROT003</td>
                        <td>Sample C</td>
                        <td>ARN</td>
                        <td>10/12/2024</td>
                        <td><button className="p-2 bg-green-600 rounded-lg">Terminé</button></td>
                        <td><button className="p-2 bg-gray-200 border-2 rounded-lg">Voir les détails</button></td>
                    </tr>
                    <tr>
                        
                        <td className="font-bold">ROT004</td>
                        <td>Sample AI</td>
                        <td>Métagénomique</td>
                        <td>30/11/2024</td>
                        <td><button className="p-2 bg-green-600 rounded-lg">Terminé</button></td>
                        <td><button className="p-2 bg-gray-200 border-2 rounded-lg">Voir les détails</button></td>
                    </tr>
                    
                    
                    
                    </tbody>
                    
                </table>
</div>
                </div>
            </div>
        </>
    )
}
export default StatusBadge;