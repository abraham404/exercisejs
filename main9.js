const deleteStr = (text = "", pattern = "") => {
    (!text)
    ? console.warn("Enter a text")
    :(!pattern)
        ? console.warn("Enter a pattern")
        : console.log(text.replace(new RegExp(pattern, "ig"),""));
}

deleteStr();
deleteStr("ewd");
deleteStr("abc1 ABC2 abc3", "abc");