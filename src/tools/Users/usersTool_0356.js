/**
 * Generated Tool: usersTool_0356
 * Domain: Users
 * ID: 0356
 */
exports.usersTool_0356 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0356:', error);
    throw error;
  }
};
