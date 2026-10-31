var removeDuplicates = function(nums) {
    let l=0;
    for(let r=1; r<nums.length; r++){
        if(nums[r] !== nums[l]){
            l++;
            nums[l] = nums[r];
        }
    }
    return l+1;
};