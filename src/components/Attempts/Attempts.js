import Button from "../Button/Button.js";

export default function Attemts({ attemptsCount }) {

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div>
      <p className="attempts">Attempts: {attemptsCount}</p>
      <Button
        onClick={() => refreshPage()}
        text="Начать заново"
        type="button"
      />
    </div>
  )
}

