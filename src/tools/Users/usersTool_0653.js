/**
 * Generated Tool: usersTool_0653
 * Domain: Users
 * ID: 0653
 */
exports.usersTool_0653 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0653:', error);
    throw error;
  }
};
