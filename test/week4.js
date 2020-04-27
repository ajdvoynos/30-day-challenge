import assert from "assert";
import subArraySum from "../week4/subArraySumEqualsK.js"
import bitwiseNumberRange from "../week4/bitwiseNumberRange.js";
import LRUCache from "../week4/lruCache.js";
import canJump from "../week4/jumpGame.js";
import longestCommonSubsequence from "../week4/longestCommonSubsequence.js";
describe('Week3', function(){
  describe('Sub Array sum equals K', function(){
    it('Should solve example1', function(){
      var input = [[1,1,1],2];
      var expected = 2;
      var actual = subArraySum(...input);
      assert.equal(actual, expected);
    })
    it('Should solve bigger array', function(){
      var input = [[6,-4,5,-4,-9,-3,4,4,8,-7,2,0,-10,-9,-3,7],5];
      var expected = 4;
      var actual = subArraySum(...input);
      assert.equal(actual, expected);
    })
    it('Should handle 1 and 0s', function(){
      var input = [[1,0,1,0,1,0,1],1];
      var expected = 12;
      var actual = subArraySum(...input);
      assert.equal(actual, expected);
    })
  })
  describe('Bitwise number range', function(){
    it('Should solve example 1', function(){
      var input = [5,7];
      var expected = 4;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 2', function(){
      var input = [0,1];
      var expected = 0;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 3', function(){
      var input = [26,29];
      var expected = 24;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 4', function(){
      var input = [4,5];
      var expected = 4;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 5', function(){
      var input = [10,11];
      var expected = 10;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 6', function(){
      var input = [20,22];
      var expected = 20;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 7', function(){
      var input = [20,32];
      var expected = 0;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
  })
  describe('LRU Cache', function(){
    it('Should solve example 1', function(){
      var input1 = ["LRUCache","put","put","put","get","put", "get","get"];
      var input2 = [[2],[1,1],[2,2],[3,3],[2],[4,4],[2],[3]];
      var expected = [null,null,null,null,2,null,2,-1];
      var actual = [];
      var cache;
      for (let i = 0; i < input1.length; i++) {
        switch (input1[i]) {
          case "LRUCache":
            cache = new LRUCache(...input2[i]);
            actual.push(null);
            break;
          default:
            actual.push(cache[input1[i]](...input2[i]) || null);
            break;
        }
      };
      assert.deepEqual(actual,expected);
    });
  })
  describe('Can Jump', function(){
    it('Should solve example 1', function(){
      var input = [2,3,1,1,4];
      var expected = true;
      var actual = canJump(input);
      assert.equal(actual, expected);
    })
    it('Should solve example 2', function(){
      var input = [3,2,1,0,4];
      var expected = false;
      var actual = canJump(input);
      assert.equal(actual, expected);
    })
  })
  describe('Longest common substring', function(){
    it('Should solve example1', function(){
      var input = ["abcde", "ace"];
      var expected = 3;
      var actual = longestCommonSubsequence(...input);
      assert.equal(actual, expected);
    })
    it('Should solve time limit exceeded case', function(){
      var input = ["pmjghexybyrgzczy","hafcdqbgncrcbihkd"];
      var expected = 4;
      var actual = longestCommonSubsequence(...input);
      assert.equal(actual, expected);
    })
    it('Should solve out of memory use case', function(){
      var input = ["fcvafurqjylclorwfoladwfqzkbebslwnmpmlkbezkxoncvwhstwzwpqxqtyxozkpgtgtsjobujezgrkvevklmludgtyrmjaxyputqbyxqvupojutsjwlwluzsbmvyxifqtglwvcnkfsfglwjwrmtyxmdgjifyjwrsnenuvsdedsbqdovwzsdghclcdexmtsbexwrszihcpibwpidixmpmxshwzmjgtadmtkxqfkrsdqjcrmxkbkfoncrcvoxuvcdytajgfwrcxivixanuzerebuzklyhezevonqdsrkzetsrgfgxibqpmfuxcrinetyzkvudghgrytsvwzkjulmhanankxqfihenuhmfsfkfepibkjmzybmlkzozmluvybyzsleludsxkpinizoraxonmhwtkfkhudizepyzijafqlepcbihofepmjqtgrsxorunshgpazovuhktatmlcfklafivivefyfubunszyvarcrkpsnglkduzaxqrerkvcnmrurkhkpargvcxefovwtapedaluhclmzynebczodwropwdenqxmrutuhehadyfspcpuxyzodifqdqzgbwhodcjonypyjwbwxepcpujerkrelunstebopkncdazexsbezmhynizsvarafwfmnclerafejgnizcbsrcvcnwrolofyzulcxaxqjqzunedidulspslebifinqrchyvapkzmzwbwjgbyrqhqpolwjijmzyduzerqnadapudmrazmzadstozytonuzarizszubkzkhenaxivytmjqjgvgzwpgxefatetoncjgjsdilmvgtgpgbibexwnexstipkjylalqnupexytkradwxmlmhsnmzuxcdkfkxyfgrmfqtajatgjctenqhkvyrgvapctqtyrufcdobibizihuhsrsterozotytubefutaxcjarknynetipehoduxyjstufwvkvwvwnuletybmrczgtmxctuny","nohgdazargvalupetizezqpklktojqtqdivcpsfgjopaxwbkvujilqbclehulatshehmjqhyfkpcfwxovajkvankjkvevgdovazmbgtqfwvejczsnmbchkdibstklkxarwjqbqxwvixavkhylqvghqpifijohudenozotejoxavkfkzcdqnoxydynavwdylwhatslyrwlejwdwrmpevmtwpahatwlaxmjmdgrebmfyngdcbmbgjcvqpcbadujkxaxujudmbejcrevuvcdobolcbstifedcvmngnqhudixgzktcdqngxmruhcxqxypwhahobudelivgvynefkjqdyvalmvudcdivmhghqrelurodwdsvuzmjixgdexonwjczghalsjopixsrwjixuzmjgxydqnipelgrivkzkxgjchibgnqbknstspujwdydszohqjsfuzstyjgnwhsrebmlwzkzijgnmnczmrehspihspyfedabotwvwxwpspypctizyhcxypqzctwlspszonsrmnyvmhsvqtkbyhmhwjmvazaviruzqxmbczaxmtqjexmdudypovkjklynktahupanujylylgrajozobsbwpwtohkfsxeverqxylwdwtojoxydepybavwhgdehafurqtcxqhuhkdwxkdojipolctcvcrsvczcxedglgrejerqdgrsvsxgjodajatsnixutihwpivihadqdotsvyrkxehodybapwlsjexixgponcxifijchejoxgxebmbclczqvkfuzgxsbshqvgfcraxytaxeviryhexmvqjybizivyjanwxmpojgxgbyhcruvqpafwjslkbohqlknkdqjixsfsdurgbsvclmrcrcnulinqvcdqhcvwdaxgvafwravunurqvizqtozuxinytafopmhchmxsxgfanetmdcjalmrolejidylkjktunqhkxchyjmpkvsfgnybsjedmzkrkhwryzan"];
      var expected = 323;
      var actual = longestCommonSubsequence(...input);
      assert.equal(actual, expected);
    })
  })
});