import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function GridContainer() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 ">
    
            <div className="grid gap-6 w-fit lg:grid-cols-3 lg:grid-rows-2">
                
                <Card className="lg:row-span-2 lg:self-center">
                    <CardHeader>
                        <CardTitle>Supervisor</CardTitle>
                        <CardDescription>Monitors activity to identify project roadblocks</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <img
                            src="./src/assets/icon-supervisor.svg"
                            alt="Supervisor icon"
                        />
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Team Builder</CardTitle>
                        <CardDescription>Scans our talent network to create the optimal team for your project</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <img
                            src="./src/assets/icon-team-builder.svg"
                            alt="Team Builder icon"
                        />
                    </CardFooter>
                </Card>

                <Card className="lg:row-start-1 lg:col-start-2">
                    <CardHeader>
                        <CardTitle>Karma</CardTitle>
                        <CardDescription>Regularly evaluates our talent to ensure quality</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <img
                            src="./src/assets/icon-karma.svg"
                            alt="Karma icon"
                        />
                    </CardFooter>
                </Card>

                <Card className="lg:row-span-2 lg:row-start-1 lg:col-start-3 lg:self-center">
                    <CardHeader>
                        <CardTitle>Calculator</CardTitle>
                        <CardDescription>
                            <p>Uses data from past projects to provide better delivery estimates</p>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <img
                            src="./src/assets/icon-calculator.svg"
                            alt="Calculator icon"
                        />
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

/*
export default function ExtensionGrid(){

    const cards = [
        { id: 1, src: "./src/assets/images/logo-devlens.svg", name:"DevLens", description:"Quickly inspect page layouts and visualize element boundaries."},
        { id: 2, src: "src/assets/images/logo-style-spy.svg", name:"StyleSpy", description:"Instantly analize and copy CSS from any webpage element."},
        { id: 3, src: "src/assets/images/logo-speed-boost.svg", name:"SpeedBoost", description:"Optimizes browser resource usage to accelerate page loading."},
        { id: 4, src: "src/asset/images/logo-json-wizard.svg", name:"JSONWizard", description:"Formats, validates, and prettifies JSON responses in-browser."},
        { id: 5, src: "src/assets/images/logo-tab-master-pro.svg", name:"TabMaster Pro", description:"Organizes browser tabs into groups and sessions."},
        { id: 6, src: "src/assets/images/logo-viewport-buddy.svg", name:"ViewportBuddy", description:"Simulates various screen resolutions directly within the browser."},
        { id: 7, src: "src/assets/images/logo-markup-notes.svg", name:"Markup Notes", description:"Enables annotation and notes directly onto webpages for collaborative debugging."},
        { id: 8, src: "src/assets/images/logo-grid-guides.svg", name:"GridGuides", description:"Overlay customizable grids and alignment guides on any webpage"},
        { id: 9, src: "src/assets/images/logo-palette-picker.svg", name:"Palette Picker", description:"Instanly extracts color palettes from any webpage."},
        { id: 10, src: "src/assets/images/logo-link-checker.svg", name:"LinkChecker", description:"Scans and highlights broken links on any page."},
        { id: 11, src: "src/assets/images/ogo-dom-snapshot.svg", name:"DOM Snapshot", description:"Capture and export DOM structures quickly."},
        { id: 12, src: "src/assets/images/logo-console-plus.svg", name:"ConsolePlus", description:"Enhanced developer console with advanced filtering and logging"}
    ]

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
            {cards.map((card) => ( 
                <ExtensionCard 
                    key={card.id}
                    imageSrc={card.src}
                    cardName={card.name}
                    cardDescription={card.description}
                />
            ))}
        </div>  
    )
}


*/