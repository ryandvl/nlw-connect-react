"use client"

import { LucideLink, LucideCopy } from "lucide-react";

import { IconButton } from "@/components/icon-button";
import { InputRoot, InputIcon, InputField } from "@/components/input";

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <LucideLink size={20} />
      </InputIcon>

      <InputField
        readOnly
        defaultValue={inviteLink}
      />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <LucideCopy size={20} />
      </IconButton>
  </InputRoot>
  );
}
