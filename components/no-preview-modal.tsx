"use client"

import { Lock } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface NoPreviewModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function NoPreviewModal({ isOpen, onOpenChange }: NoPreviewModalProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-[400px] border-primary/20 bg-card/95 backdrop-blur-xl">
        <AlertDialogHeader className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <AlertDialogTitle className="font-play text-2xl">Acesso Restrito</AlertDialogTitle>
          <AlertDialogDescription className="font-inter leading-relaxed">
            Infelizmente não posso compartilhar o link de demonstração deste projeto 
            específico por questões de <strong>confidencialidade ou contrato (NDA)</strong>.
            <br /><br />
            Sinta-se à vontade para entrar em contato se desejar saber mais sobre minha contribuição técnica nele.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center">
          <AlertDialogAction className="h-11 w-full bg-primary font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90">
            Entendido
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}