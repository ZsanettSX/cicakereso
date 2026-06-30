'use client'

interface DeleteButtonProps {
  action: (formData: FormData) => Promise<void>
  id: string
  confirmMessage: string
}

export default function DeleteButton({ action, id, confirmMessage }: DeleteButtonProps) {
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        style={{ background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)', padding: 0 }}
        onClick={(e) => { if (!confirm(confirmMessage)) e.preventDefault() }}
      >
        Törlés
      </button>
    </form>
  )
}
