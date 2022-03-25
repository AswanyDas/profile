function Table() {

    let skills = [
        { skill: 'Testing Tools', tool: 'SoapUI/Postman, JIRA, Selenium-Java' },
        { skill: 'Bug Tracking Tool', tool: 'VSTS/Test Manger' },
        { skill: 'Testing Methodologies', tool: 'Agile Methodology' },
        { skill: 'Database', tool: 'MS SQL' },
        { skill: 'Programming Languages', tool: 'Java, SQL' }

    ];
    return (
        <table>
            {skills.map(item =>
                <tr>
                    <td>
                        {item.skill}
                    </td>
                    <td>
                        {item.tool}
                    </td>
                </tr>
            )}
        </table>
    )
}
export default Table;