

export const fetchLoginData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(
                'https://react-http-c8f4f-default-rtdb.firebaseio.com/login.json'
            )

            if (!response.ok) {
                throw new Error('Could not fetch lohin data')
            }
            const data = await response.json()

            return data
        }
        try {
            const cartData = await fetchData()
            dispatch(cartAction.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))
        }
        catch (error) {

        }
    }
}


export const sendLoginData = (loginData) => {
    return async (dispatch) => {
        // dispatch(uiActions.showNotification({
        //     status: 'pending',
        //     title: 'sending',
        //     message: 'sending cart data'
        // })
        // )

        const sendRequest = async () => {
            const response = await fetch(
                'https://react-http-c8f4f-default-rtdb.firebaseio.com/login.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(loginData),

                })

            if (!response.ok) {
                throw new Error('Sending login data failed.')
            }
        }

        try {
            await sendRequest()

            // dispatch(uiActions.showNotification({
            //     status: 'success',
            //     title: 'Success',
            //     message: 'Sending cart data successfull'
            // }))

        } catch (error) {

            // dispatch(uiActions.showNotification
            //     ({
            //         status: 'error',
            //         title: 'Error',
            //         message: 'Sending cart data failed'
            //     })
            // )


        }





    }

}