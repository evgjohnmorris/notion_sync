/**
 * Generated Tool: usersTool_0704
 * Domain: Users
 * ID: 0704
 */
exports.usersTool_0704 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0704:', error);
    throw error;
  }
};
