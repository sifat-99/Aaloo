import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const users = [
    { name: "John Doe", email: "john@aaloo.com", role: "Admin", status: "Active", lastActive: "2 mins ago" },
    { name: "Jane Smith", email: "jane@aaloo.com", role: "Manager", status: "Active", lastActive: "1 hour ago" },
    { name: "Bob Johnson", email: "bob@aaloo.com", role: "Viewer", status: "Inactive", lastActive: "2 days ago" },
    { name: "Alice Brown", email: "alice@aaloo.com", role: "Manager", status: "Active", lastActive: "5 hours ago" },
]

export default function UsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
                <Button>Add User</Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Authorized Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {/* Header */}
                        <div className="grid grid-cols-5 text-sm font-medium text-muted-foreground border-b pb-2">
                            <div className="col-span-1">Name</div>
                            <div className="col-span-1">Email</div>
                            <div className="col-span-1">Role</div>
                            <div className="col-span-1">Status</div>
                            <div className="col-span-1 text-right">Last Active</div>
                        </div>

                        {/* Rows */}
                        {users.map((user, i) => (
                            <div key={i} className="grid grid-cols-5 items-center text-sm py-2">
                                <div className="col-span-1 font-medium">{user.name}</div>
                                <div className="col-span-1 text-muted-foreground">{user.email}</div>
                                <div className="col-span-1">{user.role}</div>
                                <div className="col-span-1">
                                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                        {user.status}
                                    </span>
                                </div>
                                <div className="col-span-1 text-right text-muted-foreground">{user.lastActive}</div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
