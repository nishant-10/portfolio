import { useState } from "react";
import styles from "../css/reaction.module.css";
export function EmojiReactions() {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [emojiDesc, setEmojiDesc] = useState(null);
  async function reactionClicked(reaction) {
    if (reaction == selectedReaction) {
      setSelectedReaction(null);
    } else {
      setSelectedReaction(reaction);
    }
  }
  return (
    <>
      <div id="reaction_section" className={styles.section_title}>
        03. Share your thoughts!
      </div>
      <div className={styles.emoji_list}>
        <span
          className={`${styles.emoji_element} ${
            selectedReaction == "like" ? styles.is_selected : ""
          }`}
          onMouseEnter={()=>{setEmojiDesc("I like this!")}}
          onMouseLeave={()=>{setEmojiDesc(null)}}
        >
          <span
            onClick={() => {
              reactionClicked("like");
            }}
          >
            &#128077;
          </span>
          <span className={`${styles.count_text}`}>12</span>
        </span>
        <span
          className={`${styles.emoji_element} ${
            selectedReaction == "dislike" ? styles.is_selected : ""
          }`}
          onMouseEnter={()=>{setEmojiDesc("really? ;)")}}
          onMouseLeave={()=>{setEmojiDesc(null)}}
        >
          <span
            onClick={() => {
              reactionClicked("dislike");
            }}
          >
            &#128078;
          </span>
          <span className={`${styles.count_text}`}>12</span>
        </span>
        <span
          className={`${styles.emoji_element} ${
            selectedReaction == "wow" ? styles.is_selected : ""
          }`}
          onMouseEnter={()=>{setEmojiDesc("I looove it!")}}
          onMouseLeave={()=>{setEmojiDesc(null)}}
        >
          <span
            onClick={() => {
              reactionClicked("wow");
            }}
          >
            &#128525;
          </span>
          <span className={`${styles.count_text}`}>12</span>
        </span>
        <span
          className={`${styles.emoji_element} ${
            selectedReaction == "steal" ? styles.is_selected : ""
          }`}
          onMouseEnter={()=>{setEmojiDesc("I'm stealing this portfolio. bye.")}}
          onMouseLeave={()=>{setEmojiDesc(null)}}
        >
          <span
            onClick={() => {
              reactionClicked("steal");
            }}
          >
            &#128526;
          </span>
          <span className={`${styles.count_text}`}>12</span>
        </span>
      </div>
      <div className={styles.emoji_desc}>{emojiDesc??""}</div>
    </>
  );
}
