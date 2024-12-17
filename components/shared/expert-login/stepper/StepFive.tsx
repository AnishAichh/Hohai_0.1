import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';

export default function StepFive() {
    return (
        <div className="max-w-lg mx-auto p-6">
            <h2 className="text-2xl font-bold mb-2">Great! Now let’s set your availability</h2>
            <p className="text-gray-600 mb-6">Let your audience know when you’re available. You can edit this later</p>

            <div className="space-y-4 mb-6">
                {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                    <div key={day} className="flex items-center gap-4">
                        <FormControlLabel
                            control={<Checkbox />}
                            label={day}
                            className="w-1/3"
                        />
                        <TextField
                            type="time"
                            variant="outlined"
                            size="small"
                            className="w-1/3"
                            defaultValue="09:00"
                        />
                        <span>-</span>
                        <TextField
                            type="time"
                            variant="outlined"
                            size="small"
                            className="w-1/3"
                            defaultValue="20:00"
                        />
                    </div>
                ))}
            </div>

            <Button variant="contained" fullWidth>
                Finish
            </Button>
        </div>
    );
}
