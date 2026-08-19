export default function ProjectMeta({ details }) {
  return (
    <dl className="setsail-meta">
      {details.map(({ label, value }) => (
        <div className="setsail-meta-item" key={label}>
          <dt>{label}</dt>
          <dd className={value ? undefined : 'setsail-pending'}>{value || 'Pending PM input'}</dd>
        </div>
      ))}
    </dl>
  )
}
