function Statistics({ results }) {

    const calculateStats = () => {
    if (!results || results.length === 0) {
        return { avg: 0, min: 0, max: 0 };
    }
    
    const scores = results.map(student => student.score);
    const sum = scores.reduce((acc, score) => acc + score, 0);
    const avg = Math.round((sum / scores.length) * 10) / 10; // Round to 1 decimal
    const min = Math.min(...scores);
    const max = Math.max(...scores);
    
    return { avg, min, max };
    };

    const stats = calculateStats();

    return (
    <div className="statistics">
        <div className="stat-item">
            <span className="stat-label">Average:</span>
            <span className="stat-value">{stats.avg}</span>
        </div>
        <div className="stat-item">
            <span className="stat-label">Min:</span>
            <span className="stat-value">{stats.min}</span>
        </div>
        <div className="stat-item">
            <span className="stat-label">Max:</span>
            <span className="stat-value">{stats.max}</span>
        </div>
    </div>
    );
}

export default Statistics;