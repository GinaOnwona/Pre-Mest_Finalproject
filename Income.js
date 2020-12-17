import React, {useState} from 'react'
import Header from './Header';

export default function Income() {
    const [totalIncome, settotalIncome] = useState(0);

    return (
        <div>
            <div className="expensepg">
                <Header totalIncome={totalIncome} />
            </div>
        </div>
    )
}
