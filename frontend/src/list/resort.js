import {create} from "zustand"

export const useResortList = create((set) => ({
    resorts: [],
    setResorts: (resorts) => set({ resorts }),
    createResort: async(newResort) => {
        if(!newResort.name || !newResort.rating || !newResort.image){
            return {success: false, message: "Please Fill in All Fields!"}
        }
        const res = await fetch("/api/resorts", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newResort)
        })
        const data = await res.json()
        set((state) => ({resorts: [...state.resorts, data.data]}))
        return {success: true, message: "Resort created successfully"}
    }
}))
