/**
 * Generated Tool: usersTool_0367
 * Domain: Users
 * ID: 0367
 */
exports.usersTool_0367 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0367:', error);
    throw error;
  }
};
