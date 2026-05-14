/**
 * Generated Tool: usersTool_0845
 * Domain: Users
 * ID: 0845
 */
exports.usersTool_0845 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0845:', error);
    throw error;
  }
};
