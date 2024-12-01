// components/shared/expert-login/stepper/StepTwo.tsx
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function StepTwo() {
    return (
        <div className="max-w-lg mx-auto p-6 space-y-6 bg-white shadow">
            <h2 className="text-2xl font-bold">Hello there!</h2>
            <p className="text-sm text-gray-500">In a few moments you will be ready to share your expertise & time</p>

            <TextField
                fullWidth
                label="Connect your social account"
                variant="outlined"
                placeholder="https://"
                size="small"
            />

            <TextField
                fullWidth
                label="Your topmate page link"
                variant="outlined"
                defaultValue="topmate.io/username"
                InputProps={{
                    readOnly: true,
                }}
                size="small"
            />

            <FormControl fullWidth>
                <InputLabel id="plan-label">How do you plan to use topmate</InputLabel>
                <Select
                    labelId="plan-label"
                    value=""
                    label="How do you plan to use topmate"
                    size="small"
                >
                    <MenuItem value="offer">I want to offer my expertise to my followers</MenuItem>
                    <MenuItem value="monetize">I want to monetise my audience</MenuItem>
                    <MenuItem value="explore">I’m just exploring</MenuItem>
                </Select>
            </FormControl>

            <div className="flex gap-2 flex-wrap">
                {["1:1 sessions", "Priority DMs", "Webinars", "Packages", "Digital products"].map(option => (
                    <Button key={option} variant="outlined" size="small">{option}</Button>
                ))}
            </div>
        </div>
    );
}
