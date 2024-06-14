import { Skeleton, Stack } from "@mui/material"
import React from "react"
import "./skeletonLoading.css"

const SkeletonLoading = () => {
    const skeletonList = [{ id: 1 }, { id: 2 }, { id: 3 }]
    return (
        <div className="skeletonContainer">
            {skeletonList.map((e) => {
                return (
                    <div key={e.id}>
                        <Stack
                            spacing={0}
                            sx={{
                                marginLeft: "0",
                                marginTop: "50px",
                            }}
                        >
                            <Skeleton
                                variant="rounded"
                                width={300}
                                height={300}
                            />
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: "45px" }}
                                width={180}
                            />
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: "20px" }}
                                width={250}
                            />
                            <Stack
                                direction="row"
                                spacing={19}
                                sx={{ marginTop: "15px" }}
                            >
                                <Skeleton
                                    variant="text"
                                    width={60}
                                    sx={{ fontSize: "30px" }}
                                />
                                <Skeleton
                                    variant="rounded"
                                    width={80}
                                    height={30}
                                />
                            </Stack>
                        </Stack>
                    </div>
                )
            })}
        </div>
    )
}

export default SkeletonLoading
