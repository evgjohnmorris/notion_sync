/**
 * Industry-Specific Notion Macros
 * Simulates complex, multi-step workflows for autonomous AI agents in specific sectors.
 */

async function fetchCoords(locationName) {
    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationName)}&format=json&limit=1`, {
            headers: { 'User-Agent': 'NotionSyncCLI/1.0 (test@example.com)' }
        });
        const data = await res.json();
        if (data && data.length > 0) return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
    } catch (e) {
        console.warn(`Geocoding failed for ${locationName}: ${e.message}`);
    }
    return null;
}

function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

async function handleIndustryMacro(notionClient, domain, enhancement, params) {
    console.log(`[Macro Engine] Intercepting ${enhancement} for domain: ${domain}`);
    
    let result = {
        macro_executed: false,
        workflow_steps: [],
        final_state: {}
    };

    switch(domain) {
        case 'Logistics':
            if (enhancement === 'smart_update') {
                const trackingId = params.cargo_id || params.tracking_id || 'UNKNOWN';
                const origin = params.origin || 'New York, NY';
                const dest = params.destination || 'Los Angeles, CA';
                
                result.macro_executed = true;
                
                const originCoords = await fetchCoords(origin);
                const destCoords = await fetchCoords(dest);
                
                let distance = 4000; // fallback km
                if (originCoords && destCoords) {
                    distance = haversine(originCoords.lat, originCoords.lon, destCoords.lat, destCoords.lon);
                }
                
                // Assuming average transport speed of 80 km/h
                const hoursToDest = distance / 80;
                const etaMillis = Date.now() + (hoursToDest * 60 * 60 * 1000);
                
                result.workflow_steps = [
                    `Searched for Cargo ID: ${trackingId}`,
                    `Geocoded origin (${origin}) and destination (${dest})`,
                    `Calculated distance: ${distance.toFixed(2)} km`,
                    `Calculated ETA based on average speed (80 km/h)`,
                    `Updated location to: ${dest}`,
                    `Sent notification to receiving warehouse`
                ];
                result.final_state = {
                    tracking_id: trackingId,
                    status: 'In Transit',
                    origin: origin,
                    destination: dest,
                    distance_km: distance.toFixed(2),
                    eta: new Date(etaMillis).toISOString()
                };
            }
            break;
            
        case 'Trade':
            if (enhancement === 'smart_create') {
                const shipmentId = params.shipment_id || 'SHP-000';
                const hsCode = params.hs_code || '0000.00.0000';
                
                result.macro_executed = true;
                
                const hsRegex = /^\d{4}\.\d{2}\.\d{4}$/;
                const isValidFormat = hsRegex.test(hsCode);
                
                let dutyRate = 0.05; // 5% default
                if (isValidFormat) {
                    const prefix = parseInt(hsCode.substring(0, 2), 10);
                    if (prefix >= 61 && prefix <= 63) dutyRate = 0.15; // Textiles
                    else if (prefix >= 84 && prefix <= 85) dutyRate = 0.02; // Machinery
                }

                const shipmentValue = params.value || 10000;
                const estimatedDuties = isValidFormat ? shipmentValue * dutyRate : 0;

                result.workflow_steps = [
                    `Validated HS Code ${hsCode} format: ${isValidFormat ? 'Valid' : 'INVALID'}`,
                    `Calculated tariff estimate based on prefix classification`,
                    `Created Customs Clearance draft for Shipment ${shipmentId}`,
                    `Linked to Compliance Officer queue`
                ];
                result.final_state = {
                    clearance_id: `CLR-${Math.floor(Math.random() * 10000)}`,
                    shipment_id: shipmentId,
                    hs_code: hsCode,
                    hs_valid: isValidFormat,
                    estimated_duties: `$${estimatedDuties.toFixed(2)}`,
                    status: isValidFormat ? 'Pending Review' : 'Hold - Invalid HS Code'
                };
            }
            break;
            
        case 'Import':
        case 'Export':
            if (enhancement === 'smart_create') {
                const bol = params.bill_of_lading || 'BOL-XXX';
                const importer = params.importer_record || 'Unknown Importer';
                
                result.macro_executed = true;
                result.workflow_steps = [
                    `Extracted shipment details from BOL ${bol}`,
                    `Verified Importer of Record: ${importer}`,
                    `Compiled ISF 10+2 data points`,
                    `Generated Compliance Checklist Page`
                ];
                result.final_state = {
                    isf_filing_status: 'Drafted',
                    bill_of_lading: bol,
                    importer: importer,
                    missing_elements: ['Container Stuffing Location', 'Consolidator Name']
                };
            }
            break;
            
        case 'Brokerage':
            if (enhancement === 'smart_update') {
                const origin = params.origin || 'New York, NY';
                const dest = params.destination || 'Los Angeles, CA';
                const weightNum = params.weight_kg || 1000;
                
                result.macro_executed = true;
                
                const originCoords = await fetchCoords(origin);
                const destCoords = await fetchCoords(dest);
                
                let distance = 500; // fallback
                if (originCoords && destCoords) {
                    distance = haversine(originCoords.lat, originCoords.lon, destCoords.lat, destCoords.lon);
                }
                
                // Quote: $1.50 per km + $0.05 per kg per 100km
                const quote = (1.5 * distance) + (0.05 * weightNum * (distance / 100));

                result.workflow_steps = [
                    `Geocoded ${origin} and ${dest}`,
                    `Calculated Haversine distance: ${distance.toFixed(2)} km`,
                    `Factored weight class ${weightNum}kg into pricing model`,
                    `Generated Freight Quote RFQ Response`
                ];
                result.final_state = {
                    quote_id: `QT-${Date.now().toString().slice(-6)}`,
                    route: `${origin} -> ${dest}`,
                    distance_km: distance.toFixed(2),
                    rate: `$${quote.toFixed(2)}`,
                    valid_until: new Date(Date.now() + 86400000 * 7).toISOString() // + 7 days
                };
            }
            break;

        case 'Taxes':
            if (enhancement === 'smart_create' || enhancement === 'smart_update') {
                const companyId = params.company_id || 'COMP-DEFAULT';
                const quarter = params.quarter || 'Q3-2026';
                const revenue = params.revenue_estimate || 5000000;
                const state = params.state || 'CA';
                
                const stateTaxRates = { 'CA': 0.0884, 'TX': 0.0, 'NY': 0.0725, 'FL': 0.055, 'IL': 0.095 };
                const stateRate = stateTaxRates[state] !== undefined ? stateTaxRates[state] : 0.05;
                
                const estimatedDeductions = revenue * 0.45; // 45% expense ratio
                const taxableIncome = revenue - estimatedDeductions;
                const federalRate = 0.21;
                
                const federalLiability = taxableIncome * federalRate;
                const stateLiability = taxableIncome * stateRate;
                const totalLiability = federalLiability + stateLiability;
                const effectiveRate = (totalLiability / taxableIncome) * 100;
                
                result.macro_executed = true;
                result.workflow_steps = [
                    `Fetched real-time ledger balance for company: ${companyId}`,
                    `Calculated estimated deductions ($${estimatedDeductions.toLocaleString()}) against gross revenue ($${revenue.toLocaleString()})`,
                    `Applied blended Federal (21%) and State (${state} - ${(stateRate*100).toFixed(2)}%) statutory rates to taxable base`,
                    `Generated comprehensive Quarterly Tax Provision Payload for Notion Database insertion`
                ];
                
                // Constructing an advanced Notion API-like Page Payload
                result.final_state = {
                    object: 'page',
                    parent: { type: 'database_id', database_id: 'tax-provision-db-uuid-xxxx' },
                    properties: {
                        "Entity / Company ID": {
                            type: "title",
                            title: [{ type: "text", text: { content: companyId } }]
                        },
                        "Quarter": {
                            type: "select",
                            select: { name: quarter, color: "blue" }
                        },
                        "Gross Revenue Estimate": {
                            type: "number",
                            number: revenue
                        },
                        "Taxable Income Base": {
                            type: "number",
                            number: taxableIncome
                        },
                        "Federal Tax Liability": {
                            type: "number",
                            number: federalLiability
                        },
                        "State Tax Liability": {
                            type: "number",
                            number: stateLiability
                        },
                        "Total Provision Required": {
                            type: "number",
                            number: totalLiability
                        },
                        "Status": {
                            type: "status",
                            status: { name: "Draft", color: "yellow" }
                        },
                        "Filing Deadline": {
                            type: "date",
                            date: { start: new Date(Date.now() + 86400000 * 30).toISOString().split('T')[0] }
                        }
                    },
                    children: [
                        {
                            object: 'block',
                            type: 'heading_2',
                            heading_2: { rich_text: [{ type: 'text', text: { content: 'Calculation Summary' } }] }
                        },
                        {
                            object: 'block',
                            type: 'paragraph',
                            paragraph: {
                                rich_text: [
                                    { type: 'text', text: { content: 'Based on estimated deductions, the effective tax rate is approximated at ' } },
                                    { type: 'text', text: { content: `${effectiveRate.toFixed(1)}%`, link: null }, annotations: { bold: true } },
                                    { type: 'text', text: { content: ' for this period. Please verify state apportionment factors before finalized filing.' } }
                                ]
                            }
                        }
                    ]
                };
            }
            break;

        case 'ISO_Standards':
            if (enhancement === 'smart_update' || enhancement === 'smart_create') {
                const standard = params.standard || 'ISO 27001:2022';
                const department = params.department || 'Information Security';
                const auditorId = params.auditor_id || 'AUD-INT-001';
                
                result.macro_executed = true;
                result.workflow_steps = [
                    `Verified current certification lifecycle for ${standard}`,
                    `Identified target scope: ${department}`,
                    `Assigned Lead Auditor (${auditorId}) and notified stakeholders`,
                    `Assembled standard-specific Statement of Applicability (SoA) and Audit Checklist blocks`
                ];
                
                // Constructing an advanced Notion API-like Page Payload
                result.final_state = {
                    object: 'page',
                    parent: { type: 'database_id', database_id: 'iso-compliance-db-uuid-yyyy' },
                    properties: {
                        "Audit Title": {
                            type: "title",
                            title: [{ type: "text", text: { content: `Q3 Internal Audit: ${standard}` } }]
                        },
                        "Standard Framework": {
                            type: "multi_select",
                            multi_select: [{ name: standard, color: "purple" }]
                        },
                        "Scope / Department": {
                            type: "relation",
                            relation: [{ id: "dept-infosec-uuid-1111" }]
                        },
                        "Lead Auditor": {
                            type: "people",
                            people: [{ object: "user", id: auditorId }]
                        },
                        "Audit Status": {
                            type: "status",
                            status: { name: "Audit In Progress", color: "orange" }
                        },
                        "Target Completion": {
                            type: "date",
                            date: { start: new Date(Date.now() + 86400000 * 14).toISOString().split('T')[0] }
                        }
                    },
                    children: [
                        {
                            object: 'block',
                            type: 'heading_2',
                            heading_2: { rich_text: [{ type: 'text', text: { content: 'Audit Checklist & Findings' } }] }
                        },
                        {
                            object: 'block',
                            type: 'to_do',
                            to_do: {
                                rich_text: [{ type: 'text', text: { content: 'Review Access Control Policy (A.9)' } }],
                                checked: false
                            }
                        },
                        {
                            object: 'block',
                            type: 'to_do',
                            to_do: {
                                rich_text: [{ type: 'text', text: { content: 'Verify Cryptography Controls (A.10)' } }],
                                checked: false
                            }
                        },
                        {
                            object: 'block',
                            type: 'to_do',
                            to_do: {
                                rich_text: [{ type: 'text', text: { content: 'Inspect Physical & Environmental Security logs (A.11)' } }],
                                checked: false
                            }
                        },
                        {
                            object: 'block',
                            type: 'callout',
                            callout: {
                                rich_text: [{ type: 'text', text: { content: 'Any non-conformities identified must be linked to the CAPA (Corrective and Preventive Action) database immediately.' } }],
                                icon: { type: 'emoji', emoji: '⚠️' },
                                color: 'yellow_background'
                            }
                        }
                    ]
                };
            }
            break;
    }

    if (result.macro_executed) {
        console.log(`[Macro Engine] Executed multi-step workflow for ${domain}:`, result.workflow_steps);
    }
    
    return result;
}

module.exports = { handleIndustryMacro };
