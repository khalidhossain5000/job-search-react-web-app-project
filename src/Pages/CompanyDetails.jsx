import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import CompanyDetailsCard from '../components/CompanyDetailsCard/CompanyDetailsCard';
import { Helmet } from 'react-helmet-async';



const CompanyDetails = () => {
    const companyData = useLoaderData();//this is full data
    const { id } = useParams()//this is dynamic id
    const [singleCompany, setSingleCompany] = useState({})
    useEffect(() => {
        const singleCompany = companyData.find((singleCompany) => singleCompany.id == id);
        setSingleCompany(singleCompany);
    }, [companyData, id])
    return (
        <div>
            <div className="dynamic-title">
                <Helmet>
                    <title>Company-Details </title>
                </Helmet>
            </div>
            <CompanyDetailsCard singleCompanyData={singleCompany}></CompanyDetailsCard>
        </div>
    );
};

export default CompanyDetails;