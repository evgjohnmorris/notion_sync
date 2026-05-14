/**
 * Generated Tool: usersTool_0292
 * Domain: Users
 * ID: 0292
 */
exports.usersTool_0292 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0292:', error);
    throw error;
  }
};
