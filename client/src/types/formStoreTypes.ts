export type StepOneData = {
	name: string;
	email: string;
	password: string;
	age: number;
	phone: string;
};

export type StepTwoData = {
	score_1: number;
	score_2: number;
	score_3: number;
};

export type StepThreeData = {
	birth_date: Date;
	gender: string;
	lat: number;
	lng: number;
};

export type SchedulerFormData = StepOneData & StepTwoData & StepThreeData;

