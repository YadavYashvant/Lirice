"use-client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/navbar/navbar-menu";
import { cn } from "@/utils/cn";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation'

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const router = useRouter()
    return (
      <div
        className={cn("fixed top-10 max-sm:top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="🏠 Home">
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item=" 📋 Leaderboard">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Github"
                href="htttps://github.com/YadavYashvant/Lirice"
                description="Visit our Github repository"
              />
              <ProductItem
                title="Render"
                href="https://render.com"
                description="visit our hosting provider"
              />
              <ProductItem
                title="Reddit"
                href="https://reddit.com"
                description="Go for communities such as r/hyprland, r/unixporn etc"
              />
              <ProductItem
                title="See leaderboard"
                href="https://lirice.vercel.app/leaderboard"
                description="See the leaderboard of the top contributors"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item=" 📚 Library">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Latest</HoveredLink>
              <HoveredLink href="/individual">Top</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="✏️ Create">
          <div>
          <Button variant="bordered" color="secondary" onClick={() => router.push('/newpost')}>
            Create New Post
          </Button>
          </div>
          </MenuItem>

        </Menu>
      </div>
    );
  }