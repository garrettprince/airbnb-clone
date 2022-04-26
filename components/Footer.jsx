import React from 'react'

function Footer() {
    return (
        <div className="mx-auto bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-600 max-w-7xl mx-auto">
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-bold">ABOUT</h5>
                    <p>How Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-bold">COMMUNITY</h5>
                    <p>Accessability</p>
                    <p>This is not a real site</p>
                    <p>Just a clone</p>
                    <p>Solid clone though</p>
                    <p>Airbnb Extra Lux</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-bold">HOST</h5>
                    <p>How to Host</p>
                    <p>Why Host?</p>
                    <p>Have you hosted yet?</p>
                    <p>Hosting. Simplified.</p>
                    <p>Host again</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-bold">SUPPORT</h5>
                    <p>Contact</p>
                    <p>Media</p>
                    <p>Careers</p>
                    <p>Get Help</p>
                    <p>Get More Help</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
