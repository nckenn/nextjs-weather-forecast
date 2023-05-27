'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export function SearchWeatherForm() {
    const [city, setCity] = useState('');
    
    const router = useRouter();

    const submitHandler = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/weather/${city}`);
    }

    return (
        <form
            className="w-1/2 flex flex-col gap-4 items-center mt-4"
            onSubmit={submitHandler}
        >
            <Input placeholder="Search a city" onChange={(e) => setCity(e.target.value)}></Input>
            <Button type="submit" className="w-1/2">Display Weather</Button>
        </form>
       
    )
}