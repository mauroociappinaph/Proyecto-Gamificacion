import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RewardsService } from './rewards.service';
import { ClaimRewardDto } from './dto/claim-reward.dto';

@Controller('rewards')
export class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}

  @Get('user/:userId')
  findUserRewards(@Param('userId') userId: string) {
    return this.rewardsService.findUserRewards(userId);
  }

  @Post('claim')
  claimReward(@Body() claimRewardDto: ClaimRewardDto) {
    return this.rewardsService.claimReward(claimRewardDto);
  }
}
