import { Crown, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/store";
import { logout, selectUser } from "@/store/authSlice";

export function UserMenu() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  if (!user) return null;

  const displayName = user.fullName?.trim() || user.username || user.email;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        aria-label={`Tài khoản của ${displayName}`}
        className="cursor-pointer rounded-full outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <Avatar className="size-9 bg-white">
          {user.avatarUrl && <AvatarImage src={user.avatarUrl} alt="" />}
          <AvatarFallback className="bg-primary font-semibold text-primary-foreground">
            {displayName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        collisionPadding={8}
        className="w-60 max-w-[calc(100vw-1.5rem)] border border-border"
      >
        <DropdownMenuLabel className="grid gap-0.5">
          <span className="truncate text-sm font-medium text-foreground">
            {displayName}
          </span>
          <span className="truncate text-xs font-normal text-muted-foreground">
            {user.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => {
            window.location.hash = "#mua-goi";
          }}
        >
          <Crown aria-hidden />
          Gói thành viên
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => dispatch(logout())}>
          <LogOut aria-hidden />
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
