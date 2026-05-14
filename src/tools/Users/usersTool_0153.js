/**
 * Generated Tool: usersTool_0153
 * Domain: Users
 * ID: 0153
 */
exports.usersTool_0153 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0153:', error);
    throw error;
  }
};
