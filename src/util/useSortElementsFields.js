export const useSortElementsFields = (elements) => {
    let objectElements = {
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    }

    elements.forEach(element => {
        switch (element.field_id){
            case 'initial_investment':
                objectElements.initialInvestment = element.field_value;
                break;
            case 'annual_investment':
                objectElements.annualInvestment = element.field_value;
                break;
            case 'expected_return':
                objectElements.expectedReturn = element.field_value;
                break;
            case 'duration':
                objectElements.duration = element.field_value;
                break;
        }
    })
    return objectElements;
}
