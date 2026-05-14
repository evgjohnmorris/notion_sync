/**
 * Generated Tool: usersTool_0444
 * Domain: Users
 * ID: 0444
 */
exports.usersTool_0444 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0444:', error);
    throw error;
  }
};
