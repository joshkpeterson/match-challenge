import React from 'react'

export default function ReportsTable({ projects, gateways }) {
    console.log(projects)
    return (
        <div>
            {projects && 'hey there'}
            {gateways && 'hey asdf'}
        </div>
    )
}
