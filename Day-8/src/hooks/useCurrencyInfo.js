import { useState, useEffect } from "react";
import axios from 'axios';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                setData(res.data[currency]);
                console.log("✅ Data Received:", res.data[currency]);
            } catch (error) {
                console.error("❌ Error fetching currency data:", error);
            }
        };

        if (currency) {
            fetchData();
        }
    }, [currency]);

    return data;
}

export default useCurrencyInfo;