export async function GET() {

    const users = [
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Jane'
        }
    ]
    return new Response(JSON.stringify(users))
}