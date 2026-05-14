/**
 * Generated Tool: usersTool_0628
 * Domain: Users
 * ID: 0628
 */
exports.usersTool_0628 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0628:', error);
    throw error;
  }
};
