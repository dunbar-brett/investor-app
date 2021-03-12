/**
 * Service for investor qualification calls
 */

export default {
    // calculate investor info
    async calculate(payload) {
        console.log(payload);

        return new Promise((resolve, reject) => {
            if (!payload?.investmentAmount &&
                !payload?.investmentType &&
                !payload?.totalNetWorth &&
                !payload?.estimatedCreditScore &&
                !payload?.estimatedYearlyIncome) {
                  reject({
                     status: 400,
                     message: 'Missing parameters'
                  });
               }

            if (payload.investmentAmount > 9000000) {
               resolve({
                  status: 400,
                  message: 'Bad Request'
               });
            }

            const oneFifthIncome = payload.estimatedYearlyIncome * 0.2;
            const threePercentNetWorth = payload.totalNetWorth * 0.03;
            if (payload.investmentAmount > oneFifthIncome ||
                payload.estimatedCreditScore < 600 ||
                payload.investmentAmount > threePercentNetWorth
            ) {
               // disqualified
               resolve({
                  status: 200,
                  message: `Based on the information you gave us we can't qualify you at this time.`,
                  approved: false,
               });
            } else {
               // qualified
               resolve({
                  status:200,
                  message: 'Approved',
                  approved: true
               });
            }
        });
    },
};
