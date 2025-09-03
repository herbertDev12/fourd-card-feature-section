import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function FeatureSection() {
    return (
        <div className="mt-12 flex items-center justify-center p-4 ">
    
            <div className="grid gap-6 w-fit lg:grid-cols-3 lg:grid-rows-2">
                
                <Card className="lg:row-span-2 lg:self-center border-t-cyan-500">
                    <CardHeader className="text-left">
                        <CardTitle>Supervisor</CardTitle>
                        <CardDescription>Monitors activity to identify project roadblocks</CardDescription>
                    </CardHeader>
                    <CardFooter >
                        <img
                            src="/icon-supervisor.svg"
                            alt="Supervisor icon"
                        />
                    </CardFooter>
                </Card>

                <Card className="border-t-red-500 lg:row-start-1 lg:col-start-2">
                    <CardHeader className="text-left">
                        <CardTitle>Team Builder</CardTitle>
                        <CardDescription>Scans our talent network to create the optimal team for your project</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <img
                            src="/icon-team-builder.svg"
                            alt="Team Builder icon"
                        />
                    </CardFooter>
                </Card>

                <Card className="border-t-yellow-500">
                    <CardHeader className="text-left">
                        <CardTitle>Karma</CardTitle>
                        <CardDescription>Regularly evaluates our talent to ensure quality</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <img
                            src="/icon-karma.svg"
                            alt="Karma icon"
                        />
                    </CardFooter>
                </Card>

                <Card className="border-t-blue-600 lg:row-span-2 lg:row-start-1 lg:col-start-3 lg:self-center">
                    <CardHeader className="text-left">
                        <CardTitle>Calculator</CardTitle>
                        <CardDescription>
                            <p>Uses data from past projects to provide better delivery estimates</p>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <img
                            src="/icon-calculator.svg"
                            alt="Calculator icon"
                        />
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}