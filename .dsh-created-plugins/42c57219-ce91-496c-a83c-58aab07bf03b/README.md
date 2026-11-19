# Knowledge tree design editor

A right-sidebar tab that turns the "知识树设计图" (knowledge-tree design drawing) into an editable tree.

## Where it is

Installing the bundle adds the **Knowledge tree** page type to the right Sidebar. In a Session it opens by itself once per Session; when it is closed, the Sidebar's **+** control opens the guide, where the **Knowledge tree design** card opens it again.

## What it does

- **Numbering is recomputed from position**, following the design rules:
  - `40` is the root/center; `4` is the fixed knowledge-tree prefix.
  - Level 1 is the six domains `41`–`46`.
  - Digits are edges and letters are nodes, alternating level by level (`41A`, `41A1`, `41A1A`, …).
  - `0` marks a center (概念本体, where tags live): a digit-level child carrying the center flag is numbered `0` and listed first. The initial drawing has six centers: `40`, `41A0`, `41B1A0`, `41B1B0`, `41B1C0`, `41B1D0`.
- **Drag the `≡` handle** on a row: drop on the row's top or bottom edge to reorder among its siblings, or in the middle to make it a child of that row. Dropping a node inside its own subtree, or dropping the root, is refused.
- **Rename** the selected node's English and Chinese names in the inspector under the header.
- **Add child** appends a child to the selected node; its level type follows the alternating rule.
- **Move up / Move down** reorder the selected node among its siblings (a center always stays first).
- **Reset** (one click; its tooltip states the consequence) discards the local draft and restores the initial drawing.

## Known limitations

- Reparenting needs a pointer drag on a row's `≡` handle; the **Move up / Move down** buttons only reorder one node among its current siblings.
- The tree is a flat row list with expanding branches: it has no pan/zoom or diagram layout.
- One draft is stored per browser profile, not per Session, and the draft is not written to the workspace, so the design still has to be applied to notes by other means.

## Storage and scope

Edits are kept in this browser only, under the plugin-owned key `dsh.knowledge-tree-design.v1`; they are not written to the workspace, the Session log, or the profile, and they survive Session switches and page reloads in the same browser. The draft is profile-wide, not per Session. If browser storage is unavailable, the panel says so and keeps the draft in memory for the open page. The plugin reads no workspace files and calls no Host service.

## Removal

Disabling or removing the bundle removes the page type, its body and chip, its style element, and the copies of this tab open in adopted Sessions. The local draft stays in this browser until **Reset** is used or the storage key is cleared, so re-enabling the bundle restores the edits.
