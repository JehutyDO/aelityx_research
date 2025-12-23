import {useState} from "react";

const RippleImage = () => {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
    const [count, setCount] = useState(0);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: count };
        setRipples((prev) => [...prev, newRipple]);
        setCount((prev) => prev + 1);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);
    };

    return (
        <div
            onClick={handleClick}
            className="relative w-full h-full cursor-pointer overflow-hidden rounded-2xl"
        >
            <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Análisis de datos"
                className="w-full h-full object-cover"
            />
            {ripples.map((r) => (
                <span
                    key={r.id}
                    className="ripple bg-white/40 dark:bg-white/20"
                    style={{
                        top: r.y - 15,
                        left: r.x - 15,
                        width: 30,
                        height: 30,
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-aelityx-dark/70 to-transparent flex items-end">
                <div className="p-6">
                    <p className="text-white text-lg font-medium">Transformamos datos en conocimiento profundo</p>
                </div>
            </div>
        </div>
    );
};

export default RippleImage;