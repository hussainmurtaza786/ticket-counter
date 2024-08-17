







export const movieData = (movieData) => {
    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await fetch(
                'https://react-http-c8f4f-default-rtdb.firebaseio.com/movies.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(movieData),

                })

            if (!response.ok) {
                throw new Error('Sending login data failed.')
            }
        }

        try {
            await sendRequest()



        } catch (error) {


        }

    }

}