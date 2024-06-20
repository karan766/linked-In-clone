import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import { useRecoilState } from "recoil";

const HomePage = () => {
	
	const showToast = useShowToast();
	useEffect(() => {
		
	}, [showToast]);

	return (
		<Flex gap='10' alignItems={"flex-start"}>
			<Box flex={70}>
				
			</Box>
			<Box
				flex={30}
				display={{
					base: "none",
					md: "block",
				}}
			>
				
			</Box>
		</Flex>
	);
};

export default HomePage;
