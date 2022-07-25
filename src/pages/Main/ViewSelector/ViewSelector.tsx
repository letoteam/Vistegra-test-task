import React, { Dispatch, SetStateAction } from "react";
import { View } from "../../../types/View";

type ViewSelectorProps = {
  view: View;
  setView: Dispatch<SetStateAction<View>>;
};

export default function ViewSelector({ view, setView }: ViewSelectorProps) {
  // TODO: add views[] const

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        <input
          id="table"
          type="radio"
          value="table"
          name="view"
          defaultChecked={view === "table"}
          onChange={(event) => {
            // @ts-ignore
            setView(event.target.value);
          }}
        />
        Table
      </label>

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        <input
          type="radio"
          value="list"
          name="view"
          defaultChecked={view === "list"}
          onChange={(event) => {
            // @ts-ignore
            setView(event.target.value);
          }}
        />
        List
      </label>
    </div>
  );
}
