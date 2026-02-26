import Statistics from "./Statistics";
function Scores({ courseName, courseResults}){

    const getScoreClassName = (score) => {
        return score < 50 ? "warning" : "";
    };
    return (
        <div className="scores">
            <h1>{courseName}</h1>

            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Scores</th>
                    </tr>
                </thead>
                <tbody>
                    {courseResults.map((student, index)=>(
                        <tr key={index}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td className={getScoreClassName(student.score)}>{student.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Statistics results={courseResults} />
        </div>
    );
}

export default Scores;