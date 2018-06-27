import { handleProp, calcQuesCount, calcQuestionType, calcQuizTitle, calcQuesNum, calcQuesImage, calcQuesText } from './BuildQuestionData';

test('megaTable will be false before axios call', function () {
    let result = handleProp();
    expect(result).toBeFalsy();
} )