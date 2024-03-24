export const FORM_FIELDS = [
    {
        field_id: 'initial_investment',
        field_label: 'Initial investment',
        field_mandatory: true,
        field_placeholder: '',
        field_type: 'number',
        field_value: 15000
    },
    {
        field_id: 'annual_investment',
        field_label: 'Annual investment',
        field_mandatory: true,
        field_placeholder: '',
        field_type: 'number',
        field_value: 1200
    },
    {
        field_id: 'expected_return',
        field_label: 'Expected return',
        field_mandatory: true,
        field_placeholder: '',
        field_type: 'number',
        field_value: 6
    },
    {
        field_id: 'duration',
        field_label: 'Duration',
        field_mandatory: true,
        field_placeholder: '',
        field_type: 'number',
        field_value: 10
    }
]

//{Year, Investment value, Interest(Year), Total Interest, Invested Capital};

export const titleList = {
    year: 'Year',
    investment_value: 'Investment value',
    interest: 'Interest(Year)',
    total_interest: 'Total Interest',
    invested_capital: 'Invested Capital'
}
