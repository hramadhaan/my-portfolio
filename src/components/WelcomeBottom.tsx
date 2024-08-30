'use client'

export default function WelcomeBottom() {
  return (
    <div className="w-full flex flex-row items-center justify-between mt-1 text-sm">
      <div
        className="cursor-pointer"
        role="button"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("experiences")?.scrollIntoView();
        }}
      >
        Scroll Down
      </div>
      <div className="w-2/12 text-center">
        Building apps, teams, with super experience
      </div>
      <div className="text-right">©2024</div>
    </div>
  );
}
