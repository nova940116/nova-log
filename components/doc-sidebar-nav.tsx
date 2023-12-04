"use client"

import Link from "next/link"
import { Doc } from "@/app/types"
import { usePathname } from "next/navigation"
import { cn } from "@/app/tw"

export default function DocSidebarNav({ docs }: any) {
  const pathname = usePathname()
  
  return (    
    <nav className="flex flex-col mt-5">
    {docs.map((doc: Doc) => 
      <div key={doc.slug} className={cn("pl-2 pr-24 py-2", {"bg-slate-500" : pathname === `/doc/${doc.slug}`} )}>
        {doc.slug !== 'index' && 
          <Link href={`/doc/${doc.slug}`} key={doc.slug}>{doc.title}</Link>
        }
      </div>
    )}
    </nav>  
  )
}