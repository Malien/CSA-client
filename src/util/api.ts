export const { API_URL } = process.env

export const handleServerError = (res: any) => {
    if (!res.ok) throw res
    else return res
}

export const createNotifier = 
    (notificationFunc: (message: string) => void = console.log) =>
        (err: any) => 
            notificationFunc(err.message || "Unknown error occurred")
