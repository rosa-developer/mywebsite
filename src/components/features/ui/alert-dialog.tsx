// Moved from components/ui/alert-dialog.tsx

import * as React from "react";
import { DialogProps } from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const AlertDialog = React.forwardRef<HTMLDivElement, DialogProps>(({ children, ...props }, ref) => {
	return (
		<Dialog {...props} ref={ref}>
			{children}
		</Dialog>
	);
});
AlertDialog.displayName = "AlertDialog";

const AlertDialogTrigger = DialogTrigger;

const AlertDialogContent = React.forwardRef<HTMLDivElement, DialogProps>(({ children, ...props }, ref) => {
	return (
		<DialogContent ref={ref} className={cn("fixed inset-0 m-auto max-w-md rounded-lg p-6")} {...props}>
			{children}
		</DialogContent>
	);
});
AlertDialogContent.displayName = "AlertDialogContent";

const AlertDialogTitle = DialogTitle;

const AlertDialogAction = React.forwardRef<HTMLButtonElement, DialogProps>(({ children, ...props }, ref) => {
	return (
		<Button ref={ref} className={cn("w-full")} {...props}>
			{children}
		</Button>
	);
});
AlertDialogAction.displayName = "AlertDialogAction";

const AlertDialogCancel = React.forwardRef<HTMLButtonElement, DialogProps>(({ children, ...props }, ref) => {
	return (
		<Button ref={ref} variant="outline" className={cn("w-full")} {...props}>
			{children}
		</Button>
	);
});
AlertDialogCancel.displayName = "AlertDialogCancel";

export { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogTitle, AlertDialogTrigger };