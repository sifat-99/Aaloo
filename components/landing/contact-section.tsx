'use client'
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Swal from "sweetalert2"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log({ name, email, phone, message });

        Swal.fire({
            title: "Message Sent!",
            text: "We'll get back to you shortly.",
            icon: "success",
            confirmButtonColor: "oklch(0.55 0.22 260)", // Primary color
        });

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setLoading(false);
    }

    return (
        <section id="contact" className="container py-12 md:py-24 mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                {/* Left: Contact Info */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary">
                            Get In Touch
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Interested in deploying Aaloo in your fishery? Or just want to learn more about our tech? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <Card className="bg-white/50 dark:bg-card/40 backdrop-blur-md border-border/50 shadow-sm transition-transform hover:translate-x-1">
                            <CardContent className="flex items-center gap-4 p-4">
                                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Email Us</p>
                                    <p className="text-base font-semibold text-foreground">info@teamaaloo.com</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/50 dark:bg-card/40 backdrop-blur-md border-border/50 shadow-sm transition-transform hover:translate-x-1">
                            <CardContent className="flex items-center gap-4 p-4">
                                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Call Us</p>
                                    <p className="text-base font-semibold text-foreground">+880 1715-784403</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/50 dark:bg-card/40 backdrop-blur-md border-border/50 shadow-sm transition-transform hover:translate-x-1">
                            <CardContent className="flex items-center gap-4 p-4">
                                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Visit Us</p>
                                    <p className="text-base font-semibold text-foreground">Dhaka, Bangladesh</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <Card className="bg-white/80 dark:bg-card/60 backdrop-blur-xl border-primary/10 shadow-lg">
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                        <CardDescription>
                            Fill out the form below and our team will reach out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-background/50 border-input/50"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="your.email@example.com"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-background/50 border-input/50"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone (Optional)</Label>
                                <Input
                                    id="phone"
                                    placeholder="+880..."
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="bg-background/50 border-input/50"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="How can we help you?"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="min-h-[120px] bg-background/50 border-input/50"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full gap-2" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                                {!loading && <Send className="w-4 h-4 ml-1" />}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
