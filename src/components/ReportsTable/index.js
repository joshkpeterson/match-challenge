import React from 'react'

export default function ReportsTable({ projects, gateways, filteredData }) {
    // console.log(filteredData)
    return (
        <div>
            {projects && 'has projects'}
            {gateways && ' / has gateways'}
            {filteredData && ' / has filtered data'}
        </div>
    )
}
