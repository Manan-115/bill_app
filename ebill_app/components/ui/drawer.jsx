"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = React.forwardRef(({ ...props }, ref) => {
    return <DrawerPrimitive.Root data-slot="drawer" ref={ref} {...props} />;
});
Drawer.displayName = "Drawer";

const DrawerTrigger = React.forwardRef(({ ...props }, ref) => {
    return <DrawerPrimitive.Trigger data-slot="drawer-trigger" ref={ref} {...props} />;
});
DrawerTrigger.displayName = "DrawerTrigger";

const DrawerPortal = React.forwardRef(({ ...props }, ref) => {
    return <DrawerPrimitive.Portal data-slot="drawer-portal" ref={ref} {...props} />;
});
DrawerPortal.displayName = "DrawerPortal";

const DrawerClose = React.forwardRef(({ ...props }, ref) => {
    return <DrawerPrimitive.Close data-slot="drawer-close" ref={ref} {...props} />;
});
DrawerClose.displayName = "DrawerClose";

const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <DrawerPrimitive.Overlay
            data-slot="drawer-overlay"
            ref={ref}
			className={cn("fixed inset-0 z-[1200] bg-black/40", className)}
            {...props}
        />
    );
});
DrawerOverlay.displayName = "DrawerOverlay";

const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
			<DrawerPortal>
				<DrawerOverlay />
			<DrawerPrimitive.Content
				data-slot="drawer-content"
				ref={ref}
				className={cn(
					"group/drawer-content fixed inset-x-0 bottom-0 z-[1300] flex w-full flex-col rounded-t-[1.25rem] border-t bg-white text-foreground shadow-[0_-16px_48px_rgba(0,0,0,0.18)] outline-none",
					"data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:bottom-auto data-[vaul-drawer-direction=top]:mt-0 data-[vaul-drawer-direction=top]:rounded-b-[1.25rem] data-[vaul-drawer-direction=top]:rounded-t-none data-[vaul-drawer-direction=top]:border-t-0 data-[vaul-drawer-direction=top]:border-b",
					"data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:bottom-auto data-[vaul-drawer-direction=right]:mt-0 data-[vaul-drawer-direction=right]:h-full data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-[1.25rem] data-[vaul-drawer-direction=right]:rounded-r-none data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:border-t-0",
					"data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:bottom-auto data-[vaul-drawer-direction=left]:mt-0 data-[vaul-drawer-direction=left]:h-full data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-[1.25rem] data-[vaul-drawer-direction=left]:rounded-l-none data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:border-t-0",
					className
				)}
				{...props}
			>
				<div
					aria-hidden="true"
					className="mx-auto hidden shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block"
				/>
				{children}
			</DrawerPrimitive.Content>
			</DrawerPortal>
	);
});
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = React.forwardRef(({ className, ...props }, ref) => {
	return (
		<div
			data-slot="drawer-header"
			ref={ref}
			className={cn(
				"flex flex-col gap-1 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:text-left",
				className
			)}
			{...props}
		/>
	);
});
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = React.forwardRef(({ className, ...props }, ref) => {
	return (
		<div
			data-slot="drawer-footer"
			ref={ref}
			className={cn("mt-auto flex flex-col gap-2 p-4", className)}
			{...props}
		/>
	);
});
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => {
	return (
		<DrawerPrimitive.Title
			data-slot="drawer-title"
			ref={ref}
			className={cn("text-base font-medium text-foreground", className)}
			{...props}
		/>
	);
});
DrawerTitle.displayName = "DrawerTitle";

const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => {
	return (
		<DrawerPrimitive.Description
			data-slot="drawer-description"
			ref={ref}
			className={cn("text-sm text-muted-foreground", className)}
			{...props}
		/>
	);
});
DrawerDescription.displayName = "DrawerDescription";

const DrawerHandle = React.forwardRef(({ className, ...props }, ref) => {
	return (
		<div
			aria-hidden="true"
			ref={ref}
			className={cn("mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-muted", className)}
			{...props}
		/>
	);
});
DrawerHandle.displayName = "DrawerHandle";

export {
	Drawer,
	DrawerPortal,
	DrawerOverlay,
	DrawerTrigger,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
	DrawerDescription,
	DrawerHandle,
};
